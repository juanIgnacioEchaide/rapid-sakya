import { useState, useEffect, useRef } from "react";
import NavElements from "../../molecules/navElements";
import { isMobileViewport, isDesktopViewport } from "../../../utils/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const SideBar = ({
  navbarOpen,
  navbarClose,
  setNavbarOpen,
  setNavbarClose,
  size,
}) => {
  const ref = useRef(null);

  useEffect(
    (e) => {
      if (navbarOpen && isMobileViewport(size)) {
        ref.current.animate(
          [{ transform: "translateX(-100%)" }, { transform: "translateX(0%)" }],
          { duration: 200, iterations: 1, AnimationTimingFunction: "linear" }
        );
        setNavbarClose(false);
      }
    },
    [navbarOpen]
  );

  useEffect(
    (e) => {
      if ((navbarClose && isMobileViewport(size)) || isDesktopViewport(size)) {
        ref.current.animate(
          [{ transform: "translatex(0%)" }, { transform: "translateX(-100%)" }],
          { duration: 250, iterations: 1, AnimationTimingFunction: "linear" }
        );
        setNavbarOpen(false);
      }
    },
    [navbarClose]
  );

  return (
    <div
      style={
        navbarOpen ? styles.navbar_side_menu__open : styles.navbar_side_menu
      }
      ref={ref}
    >
      <div
        style={styles.navbar_back}
        onClick={(e) => {
          setNavbarClose(!navbarClose);
        }}
      />
    </div>
  );
};

/* --------------------------------------------------------------------- */

const SlideSubItem = (display, title) => {
  useEffect((e) => {
    if (display) {
      ref.current.animate(
        [{ transform: "translateX(-101%)" }, { transform: "translateX(0%)" }],
        { duration: 280, iterations: 1, AnimationTimingFunction: "linear" }
      );
      ref.current.styles = { opacity: "20%" };
    }
    if (!display) {
      ref.current.animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(-101%)" }],
        { duration: 250, iterations: 1, AnimationTimingFunction: "linear" }
      );
    }
  }, []);

  const ref = useRef(null);
  const trends = [
    { id: 0, item: "trend 1", url: "" },
    { id: 1, item: "trend 1", url: "" },
    { id: 2, item: "trend 1", url: "" },
    { id: 3, item: "+", url: "" },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        lineHeight: "35px",
        overflow: "hidden",
      }}
    >
      {trends.map((t) =>
        t.id === 3 ? (
          <Link href="/route/{id}">
            <a>
              <i
                style={{
                  opacity: "1",
                  borderWidth: "0 3px 3px 0",
                  display: "inline-block",
                  padding: "3px",
                  transform: "rotate(45deg)",
                  webkitTransform: "rotate(45deg)",
                }}
              ></i>
            </a>
          </Link>
        ) : (
          <Link href="/route/{id}">
            <motion.div initial="hidden" animate="visible" variants={variants}>
              <a>{t.item}</a>
            </motion.div>
          </Link>
        )
      )}
    </div>
  );
};

/* ------------------------------------------------------------------------------ */
const TopBarLink = ({ title, url, index, id, display, setDisplay }) => {
  const ref = useRef();

  const handleHoverLink = (e, action) => {
    if (action === "ENTER") {
      setDisplay(true);
      console.log(ref.current);
    }
    if (action === "LEAVE") {
      setDisplay(false);
      console.log(ref.current);
    }
    console.log(display);
  };

  return (
    <div
      value="top_bar_link"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      onMouseLeave={(e) => handleHoverLink(e, "LEAVE")}
      onMouseEnter={(e) => handleHoverLink(e, "ENTER")}
    >
      <Link href={url}>
        <a style={styles.navbar_top_bar_link}>{title}</a>
      </Link>
      {display && <SlideSubItem display={display} />}
    </div>
  );
};

/* ---------------------------------------------------------------------- */
const TopBar = ({ size, hoverOnMenu }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(false);

  useEffect((e) => {
    if (hoverOnMenu) {
      ref.current.animate(
        [{ transform: "translateY(-101%)" }, { transform: "translateY(0%)" }],
        { duration: 250, iterations: 1, AnimationTimingFunction: "linear" }
      );
    }
    if (!hoverOnMenu) {
      ref.current.animate(
        [{ transform: "translateY(0%)" }, { transform: "translateY(-101%)" }],
        { duration: 250, iterations: 1, AnimationTimingFunction: "linear" }
      );
    }
  }, []);

  const links = [
    { id: 0, url: "/promos", title: "PROMOS" },
    { id: 1, url: "/menues", title: "MENUES" },
    { id: 3, url: "/productos", title: "PRODUCTOS" },
  ];

  return (
    <div ref={ref} style={styles.navbar_top_bar}>
      {links.map((l, index) => (
        <TopBarLink
          url={l.url}
          title={l.title}
          index={index}
          id={l.id}
          display={display}
          setDisplay={setDisplay}
        />
      ))}

      <div
        style={{
          position: "float-right",
          backgroundColor: "#e7e3e2ff",
          minWidth: "100px",
          height: "100px",
          borderRadius: "30%",
          marginRight: "40px",
        }}
      />
    </div>
  );
};

/* --------------------------------------------------------- */
const NavBar = (size) => {
  const {
    NavContainer,
    NavbarContainer,
    NavLinks,
    NavLogo,
    NavUser,
    NavMenu,
    NavBurger,
  } = NavElements();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarClose, setNavbarClose] = useState(false);
  const [hoverOnMenu, setHoverOnMenu] = useState(false);

  const handleHoverIn = (e) => {
    setHoverOnMenu(true);
    console.log("hover in", hoverOnMenu);
  };
  const handleHoverOut = (e) => {
    setHoverOnMenu(false);
    console.log("hover out", hoverOnMenu);
  };

  return (
    <div
      style={styles.navbar_container}
      onMouseEnter={() => handleHoverIn()}
      onMouseLeave={() => handleHoverOut()}
    >
      <div style={styles.navbar_bar_container}>
        {/* hamburguesa */}
        {isMobileViewport(size) && (
          <div
            style={styles.navbar_bars}
            onClick={(e) => {
              setNavbarOpen(!navbarOpen);
            }}
          />
        )}
      </div>
      {hoverOnMenu && isDesktopViewport(size) && (
        <TopBar hoverOnMenu={hoverOnMenu} />
      )}
      {isMobileViewport(size) && (
        <SideBar
          size={size}
          navbarOpen={navbarOpen}
          navbarClose={navbarClose}
          setNavbarOpen={setNavbarOpen}
          setNavbarClose={setNavbarClose}
        />
      )}
    </div>
  );
};

const sideMenuStyles = {
  padding: "12px",
  position: "absolute",
  /* backgroundColor: "#28773cff", */
  background: "radial-gradient(#2c983dff, #2c8a3dff",
  height: "100%",
  width: "40%",
  maxWidth: "300px",
  zIndex: "4",
};
const styles = {
  navbar_container: {
    backgroundColor: "#232331ff",
    display: "flex",
    width: "100%",
  },
  navbar_bar_container: {
    position: "relative",
    height: "2vh",
    minHeight: "60px",
    padding: "12px",
    zIndex: "3",
  },
  navbar_bars: {
    backgroundColor: "white",
    height: "40px",
    width: "40px",
    zIndex: "3",
  },
  navbar_back: {
    backgroundColor: "black",
    height: "40px",
    width: "40px",
    zIndex: "4",
  },
  navbar_side_menu: {
    ...sideMenuStyles,
    WebkitTransform: "translateX(-101%)",
  },
  navbar_side_menu__open: {
    ...sideMenuStyles,
    WebkitTransform: "translateX(0%)",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)",
  },
  navbar_top_bar: {
    display: "flex",
    height: "150px",
    width: "100%",
    backgroundColor: "#ffffffff",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
    zIndex: "4",
  },
  navbar_top_bar_link: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
    color: "#04873dff",
  },
};

export default NavBar;

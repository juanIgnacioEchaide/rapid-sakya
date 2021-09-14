import { useEffect, useRef } from "react";
import { isMobileViewport, isDesktopViewport } from "../../utils/constants";
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
    const links = [
      { text: "Promociones", url: "/promos" },
      { text: "Menues", url: "/menus" },
      { text: "Productos", url: "/products" },
      { text: "Nosotros", url: "/" },
    ];
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
        {links.map((l) => (
          <Link href={l.url}>
            <a >{l.text}</a>
          </Link>
        ))}
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight:"50px"
  };
  const styles = {
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
  };

export default SideBar
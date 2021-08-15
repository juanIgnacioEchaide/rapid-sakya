import { useState, useEffect, useRef } from "react";
import NavElements from "../../molecules/navElements";
import { isMobileViewport, isDesktopViewport } from "../../../utils/constants";

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
          [
            { transform: "translateX(-100%)" },
            /* { WebkitTransform: "slide-in 0.5s forwards" }, */
            { transform: "translateY(0%)" },
          ],
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
          [
            { transform: "translateY(0%)" },
            /* { WebkitTransform: "slide-out 0.5s forwards" }, */
            { transform: "translateX(-100%)" },
          ],
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

  return (
    <div style={styles.navbar_container}>
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
  backgroundColor: "red",
  height: "100%",
  width: "40%",
  maxWidth: "300px",
  zIndex: "2",
};

const styles = {
  navbar_container: {
    backgroundColor: "grey",
    display: "flex",
    width: "100%",
    zIndex: "2",
  },
  navbar_bar_container: {
    height: "8vh",
    minHeight: "60px",
    padding: "12px",
  },
  navbar_bars: {
    backgroundColor: "white",
    height: "40px",
    width: "40px",
    zIndex: "2",
  },
  navbar_back: {
    backgroundColor: "black",
    height: "40px",
    width: "40px",
    zIndex: "3",
  },
  navbar_side_menu: {
    ...sideMenuStyles,
    WebkitTransform: "translateX(-101%)",
  },
  navbar_side_menu__open: {
    ...sideMenuStyles,
    WebkitTransform: "translateX(0%)",
    boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.4)"
  },
};

export default NavBar;

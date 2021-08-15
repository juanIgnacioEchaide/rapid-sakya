import { useState, useEffect, useRef } from "react";
import NavElements from "../../molecules/navElements";

const SideBar = ({
  navbarOpen,
  navbarClose,
  setNavbarOpen,
  setNavbarClose,
}) => {
  const ref = useRef(null);

  useEffect(
    (e) => {
      if (navbarOpen) {
        ref.current.animate(
          [{ transform: "translateX(-100%)" }, { transform: "translateY(0%)" }],
          { duration: 200, iterations: 1 }
        );
        setNavbarClose(false);
      }
    },
    [navbarOpen]
  );

  useEffect(
    (e) => {
      if (navbarClose) {
        ref.current.animate(
          [{ transform: "translateY(0%)" }, { transform: "translateX(-100%)" }],
          { duration: 200, iterations: 1 }
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

const NavBar = ({ size }) => {
  console.log(size);

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
        <div
          style={navbarOpen ? styles.navbar_bars__selected : styles.navbar_bars}
          onClick={(e) => {
            setNavbarOpen(!navbarOpen);
          }}
        />
      </div>
      {/* panel lateral */}
      <SideBar
        navbarOpen={navbarOpen}
        navbarClose={navbarClose}
        setNavbarOpen={setNavbarOpen}
        setNavbarClose={setNavbarClose}
      />
    </div>
  );
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
  navbar_bars__selected: {
    backgroundColor: "white",
    height: "40px",
    width: "40px",
    border: "solid 1px red",
  },
  navbar_side_menu: {
    padding: "12px",
    position: "absolute",
    backgroundColor: "red",
    height: "100%",
    width: "40%",
    maxWidth: "300px",
    zIndex: "2",
    animationName: "sideBar",
    WebkitTransform: "translateX(-100%)",
    Animation: "slide-out 0.5s forwards",
  },
  navbar_side_menu__open: {
    padding: "12px",
    position: "absolute",
    backgroundColor: "red",
    height: "100%",
    width: "40%",
    maxWidth: "300px",
    zIndex: "2",
    animationName: "sideBar",
    WebkitTransform: "translateX(0%)",
    Animation: " slide-out 0.5s forwards",
  },
};

export default NavBar;

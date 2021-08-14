import { useState, useEffect } from "react";
import Link from "next/link";
import NavElements from "../../molecules/navElements";
import useNavabar from "../../../utils/useNavbar";

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

  return (
    <div style={styles.navbar_container}>
      <div style={styles.navbar_bar_container}>
        {/* hamburguesa */}
        <div
          style={navbarOpen ? styles.navbar_bars__selected : styles.navbar_bars}
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
          onBlur={() => {
            setNavbarOpen(false);
          }}
        />
      </div>
      {/* panel lateral */}
      {navbarOpen && (
        <div style={styles.navbar_side_menu}>
          <div
            style={styles.navbar_back}
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
            onBlur={() => {
              setNavbarOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  navbar_container: {
    backgroundColor: "grey",
    display: "flex",
    width: "100%",
    /*     padding: "12px", */
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
  },
  navbar_back: {
    backgroundColor: "black",
    height: "40px",
    width: "40px",
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
  },
};

export default NavBar;

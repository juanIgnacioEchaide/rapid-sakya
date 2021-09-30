import { useState } from "react";
import { isMobileViewport, isDesktopViewport } from "../../../utils/constants";
import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";

const NavBar = (size) => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarClose, setNavbarClose] = useState(false);
  const [hoverOnMenu, setHoverOnMenu] = useState(false);

  const handleHoverIn = (e) => {
    setHoverOnMenu(true);
  };
  const handleHoverOut = (e) => {
    setHoverOnMenu(false);
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
        <TopBar hoverOnMenu={hoverOnMenu} size={size} />
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
  }
};

export default NavBar;

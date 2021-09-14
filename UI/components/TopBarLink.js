import { useState, useRef } from "react";
import SlideSubItem from "./SlideSubItem";
import Link from "next/link";

const TopBarLink = ({ title, url, id, index, display, setDisplay }) => {
    const ref = useRef();
    const[linkHoverId, setLinkHoverId]=useState();
  
    const handleHoverLink = (e, action) => {
      if (action === "ENTER") {
        setDisplay(true);
        setLinkHoverId(e.target.id);
      }
      if (action === "LEAVE") {
        setDisplay(false);
        setLinkHoverId(null);
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
        <Link href={url} >
          <a id={id} style={styles.navbar_top_bar_link}>{title}</a>
        </Link>
        {display && <SlideSubItem display={display} index={index} />}
      </div>
    );
  };

  const styles = {
    navbar_top_bar_link: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
      color: "#04873dff",
    },
  };
  
  export default TopBarLink;
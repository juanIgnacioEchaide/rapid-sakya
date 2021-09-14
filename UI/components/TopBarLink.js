import { useState, useRef } from "react";
import SlideSubItem from "./SlideSubItem";
import Link from "next/link";

const TopBarLink = ({
  title,
  url,
  id,
  index,
  mouseOnLink,
  setMouseOnLink,
  subtitles,
}) => {
  const ref = useRef();

  const [display, setDisplay] = useState(false);

  const handleHoverLink = (e, action) => {
    if (action === "ENTER") {
      setMouseOnLink(e.target.id);
      setDisplay(true);
    }
    if (action === "LEAVE") {
      setMouseOnLink(null);
      setDisplay(false);
    }
  };
 
  return (
    <div
      value="top_bar_link"
      style={styles.top_bar_link_container}
      onMouseLeave={(e) => handleHoverLink(e, "LEAVE")}
      onMouseEnter={(e) => handleHoverLink(e, "ENTER")}
    >
      <Link href={url}>
        <a id={id} style={styles.top_bar_link}>
          {title}
        </a>
      </Link>
      {display && (
        <SlideSubItem 
          display={display} 
          index={index} 
          subtitles={subtitles} 
        />
      )}
    </div>
  );
};

const styles = {
  top_bar_link_container:{
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
  },
  top_bar_link: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
    color: "#04873dff",
  },
};

export default TopBarLink;

import { useState, useRef } from "react";
import SlideSubItem from "./SlideSubItem";
import Link from "next/link";

const TopBarLink = ({
  title,
  url,
  id,
  index,
  display,
  setDisplay,
  mouseOnLink,
  setMouseOnLink,
  subtitles,
}) => {
  const ref = useRef();

  const handleHoverLink = (e, action) => {
    if (action === "ENTER") {
      setMouseOnLink(e.target.id);
    }
    if (action === "LEAVE") {
      setMouseOnLink(null);
    }
  };
 
  return (
    <div
      value="top_bar_link"
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      onMouseLeave={(e) => handleHoverLink(e, "LEAVE")}
      onMouseEnter={(e) => handleHoverLink(e, "ENTER")}
    >
      <Link href={url}>
        <a id={id} style={styles.navbar_top_bar_link}>
          {title}
        </a>
      </Link>
      {display && (
        <SlideSubItem display={shouldDisplay()} index={index} subtitles={subtitles} />
      )}
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
import { useState, useEffect, useRef } from "react";
import TopBarLink from "../components/TopBarLink";

const TopBar = ({ size, hoverOnMenu }) => {
  const ref = useRef(null);
  const [mouseOnLink, setMouseOnLink] = useState();

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
    {
      id: 0,
      url: "/promos",
      title: "PROMOS",
      subtitles: [
        { name: "Previa Banzai", url: "" },
        { name: "Boddhi language", url: "" },
        { name: "K'ngFu Baozi", url: "" },
      ],
    },
    {
      id: 1,
      url: "/menues",
      title: "MENUES",
      subtitles: [
        { name: "Shangri La", url: "" },
        { name: "Diadorama", url: "" },
        { name: "Laza", url: "" },
      ],
    },
    {
      id: 2,
      url: "/productos",
      title: "PRODUCTOS",
      subtitles: [
        { name: "Medallón", url: "" },
        { name: "Jugo", url: "" },
        { name: "Cookies", url: "" },
      ],
    },
  ];

  return (
    <div ref={ref} style={styles.navbar_top_bar}>
      {links.map((l, index) => (
        <TopBarLink
          url={l.url}
          title={l.title}
          index={index}
          id={l.id}
          subtitles={l.subtitles}
          setMouseOnLink={setMouseOnLink}
          mouseOnLink={mouseOnLink}
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

const styles = {
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
};

export default TopBar;

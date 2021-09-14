import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
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
                    WebkitTransform: "rotate(45deg)",
                  }}
                ></i>
              </a>
            </Link>
          ) : (
            <motion.div>
              <Link href="/route/{id}">
                <a>{t.item}</a>
              </Link>
            </motion.div>
          )
        )}
      </motion.div>
    );
  };

  export default SlideSubItem;
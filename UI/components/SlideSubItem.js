import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SlideSubItem = (display, subtitles) => {
  
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
    console.log(subtitles);
  }, []);

  const ref = useRef(null);

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
      style={styles.slide_container}
    >
      {
        subtitles && (
           <div style={styles.slide_links}>
              <Link href="/"><a>llegan</a></ Link>
              <Link href="/"><a>llegan</a></ Link>
              <Link href="/"><a>llegan</a></ Link>
              <Link href="/"><a>llegan</a></ Link>
          </div>
        )
        /*   subtitles.map((s) =>
            <motion.div>
              <Link >
                <a>{s.name}</a>
              </Link>
            </motion.div>
      ) */
      }
    </motion.div>
  );
};

const styles = {
  slide_container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    lineHeight: "35px",
    overflow: "hidden",
  },
  slide_links:{
    display:"flex", 
    flexDirection:"column"
  }
};

export default SlideSubItem;

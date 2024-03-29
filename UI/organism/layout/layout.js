import React from "react";
import NavBar from "../navbar/index";
import styles from "../../../styles/Layout.module.css";

const layout = ({ children, size }) => {
  const loginSelected = false;
  return (
    <div className={styles.layout_container}>
      <NavBar className={styles.navbar} size={size} />
      <div style={{ position: "relative"}}>{children}</div>
    </div>
  );
};

layout.propTypes = {};
export default layout;

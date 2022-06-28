import React from "react";
import styles from "./Footer.module.css"

const Footer = () => (

      <footer className={styles.footer}>
        <div className={`${styles.footer_container} container`}>
          <div className={styles.footer_copyr}>
              Alex Piña 2022
          </div>
        </div>
      </footer>

);

export default Footer;
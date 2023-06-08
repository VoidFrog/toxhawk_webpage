import React from "react";
import styles from "./footer.module.css";

import logo_white_mini from "@/images/logo_white_mini.svg";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={logo_white_mini}
        alt="toxhawk"
        className={styles.logo_small}
      />
    </footer>
  );
}

export default Footer;

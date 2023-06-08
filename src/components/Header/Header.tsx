import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

import logo_white from "../../images/logo_white.svg";
import UK_flag from "../../images/flag_UK.svg";
import PL_flag from "../../images/flag_PL.svg";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logo_white} alt="logo" className={styles.logo} />
        <nav className={styles.nav}>
          <div className={styles.underline}>
            <Link href="/">Home</Link>
            <div></div>
          </div>
          <div className={styles.underline}>
            <Link href="/">Misja</Link>
            <div></div>
          </div>
          <div className={styles.underline}>
            <Link href="/">Projekty</Link>
            <div></div>
          </div>
          <div className={styles.underline}>
            <Link href="/">Pipeline</Link>
            <div></div>
          </div>
          <div className={styles.underline}>
            <Link href="/">Wiadomości</Link>
            <div></div>
          </div>
          <div className={styles.underline}>
            <Link href="/">Kontakt</Link>
            <div></div>
          </div>
          <div>
            <Image src={PL_flag} alt="Polski" />
          </div>
          <div>
            <Image src={UK_flag} alt="English" />
          </div>
        </nav>
      </header>
      <div className={styles.bottom_underline_container}>
        <div className={styles.bottom_underline}></div>
      </div>
    </>
  );
}

export default Header;

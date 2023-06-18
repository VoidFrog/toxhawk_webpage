import React from "react";
import styles from "./collaboratorTile.module.css";

import Image from "next/image";
import Link from "next/link";

import toxhawk_logo_black from "@/images/toxhawk_logo_black.svg";
import icon_phone_green from "@/images/icon_phone_green.svg";
import icon_web_green from "@/images/icon_web_green.svg";
import icon_email_green from "@/images/icon_email_green.svg";

function CollaboratorTile() {
  return (
    <div className={styles.collaborator_tile}>
      <div className={styles.circle}>
        <Image src={toxhawk_logo_black} alt="image" />
      </div>
      <p className={styles.title}>Lorem Ipsum</p>
      <div className={styles.icon_container}>
        <Link href={"/"}>
          <Image src={icon_phone_green} alt="phone" />
        </Link>
        <Link href={"/"}>
          <Image src={icon_web_green} alt="website" />
        </Link>
        <Link href={"/"}>
          <Image src={icon_email_green} alt="mail" />
        </Link>
      </div>
      <div className={styles.text_container}>
        <p>
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text
        </p>
      </div>
      <div className={styles.button}>
        {/* tutaj link do strony */}
        <Link href={"/"}>Odwiedź partnera</Link>
      </div>
    </div>
  );
}

export default CollaboratorTile;

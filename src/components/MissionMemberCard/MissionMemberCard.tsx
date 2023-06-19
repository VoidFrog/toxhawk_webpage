import React from "react";
import styles from "./missionMemberCard.module.css";

import Image from "next/image";
import Link from "next/link";

// import icon_email from "@/images/icon_email_green.svg";
import icon_website from "@/images/icon_web_green.svg";

function MissionMemberCard(props: {
  name: string;
  description: string;
  website: string;
  email: string;
}) {
  const { name, description, website, email } = props;
  return (
    <div className={styles.card}>
      <p>{name}</p>
      <div className={styles.card_about}>
        <p>{description}</p>
      </div>
      <div className={styles.icon_container}>
        <Link href={website}>
          <Image src={icon_website} alt="website"></Image>
        </Link>
        {/* <Image src={icon_email} alt="email" /> */}
      </div>
    </div>
  );
}

export default MissionMemberCard;

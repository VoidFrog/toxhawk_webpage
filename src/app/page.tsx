import Image from "next/image";
import styles from "./page.module.css";

import logo_white_text from "@/images/logo_white_text.svg";
import icon_phone from "@/images/icon_phone.svg";
import icon_instagram from "@/images/icon_instagram.svg";
import icon_facebook from "@/images/icon_facebook.svg";
import icon_email from "@/images/icon_email.svg";

import collaboration_logo from "@/images/collaboration_logo.svg";
import collaboration_logo_text from "@/images/collaboration_logo_text.svg";

import ArticleCarousel from "@/components/ArticleCarousel/ArticleCarousel";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Collaborators from "@/components/Collaborators/Collaborators";

import { getAllArticles } from "@/lib/article_parser";

export default function Home() {
  let images = [
    collaboration_logo_text,
    collaboration_logo,
    collaboration_logo_text,
    collaboration_logo,
    collaboration_logo_text,
    // collaboration_logo,
  ];

  const allImages = images.map((image) => {
    return {
      src: image,
      name: "collaborator",
    };
  });
  const allArticles = getAllArticles();
  return (
    <>
      <main className={styles.main}>
        <Image
          src={logo_white_text}
          alt="toxhawk"
          className={styles.toxhawk_logo_text}
        />
        <ArticleCarousel {...{ allArticles }} />
        <ImageCarousel {...{ allImages }} />
        <Collaborators />
        <div className={styles.contact}>
          <p>Kontakt</p>
          <div className={styles.icon_container}>
            <Image src={icon_phone} alt="phone" className={styles.icon} />
            <Image src={icon_instagram} alt="ig" className={styles.icon} />
            <Image src={icon_facebook} alt="facebook" className={styles.icon} />
            <Image src={icon_email} alt="email" className={styles.icon} />
          </div>
        </div>
      </main>
    </>
  );
}

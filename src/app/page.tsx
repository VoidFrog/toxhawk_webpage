import Image from "next/image";
import styles from "./page.module.css";

import logo_white_text from "@/images/logo_white_text.svg";
import ArticleCarousel from "@/components/ArticleCarousel/ArticleCarousel";

import { getAllArticles } from "@/lib/article_parser";

export default function Home() {
  const allArticles = getAllArticles();
  return (
    <>
      <main className={styles.main}>
        <Image
          src={logo_white_text}
          alt="toxhawk"
          className={styles.toxhawk_logo_text}
        ></Image>
        <ArticleCarousel {...{ allArticles }} />
      </main>
    </>
  );
}

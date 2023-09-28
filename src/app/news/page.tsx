import React from "react";
import styles from "./news.module.css";
import Calendar from "@/components/Calendar/Calendar";
import ArticleCarousel from "@/components/ArticleCarousel/ArticleCarousel";
import { getAllArticles } from "@/lib/article_parser";

function page() {
  const allArticles = getAllArticles();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Calendar />
      </div>
      {/* article sliders here */}
      <div className={styles.article_wrapper}>
        <div className={styles.article_title_wrapper}>
          <p className={styles.label}>Artykuły naukowe</p>
        </div>
        <ArticleCarousel {...{ allArticles }} />
      </div>
      {/*  */}
      <div className={styles.article_wrapper}>
        <div className={styles.article_title_wrapper}>
          <p className={styles.label}>Działalność społeczna</p>
        </div>
        <ArticleCarousel {...{ allArticles }} />
      </div>
      {/*  */}
      <div className={styles.article_wrapper}>
        <div className={styles.article_title_wrapper}>
          <p className={styles.label}>Relacje biznesowe</p>
        </div>
        <ArticleCarousel {...{ allArticles }} />
      </div>
    </div>
  );
}

export default page;

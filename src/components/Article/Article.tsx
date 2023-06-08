import React from "react";
import styles from "./article.module.css";
import Link from "next/link";

import { article } from "@/types/article_type";

function Article(props: { article: article }) {
  const { article } = props;
  const startingIndex = article.content.indexOf("<p>");
  const lastIndex = article.content.indexOf("</p>");
  const firstParagraph = article.content
    .slice(startingIndex + 3, lastIndex)
    .replaceAll("<br>", "")
    .replaceAll("<strong>", "")
    .replaceAll("</strong>", "");

  return (
    <div className={styles.article}>
      <p>{article.name.replaceAll("_", " ")}</p>
      <p>{firstParagraph}</p>

      <div className={styles.read_article_button}>
        <Link href={`/article/${article.name}`}>Czytaj</Link>
      </div>
    </div>
  );
}

export default Article;

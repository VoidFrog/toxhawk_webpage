import React from "react";
import styles from "./page.module.css";
import { getAllArticles } from "@/lib/article_parser";

export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    name: article.name,
  }));
}

function page({ params }: { params: { name: string } }) {
  const article = getAllArticles().find(
    (article) => article.name == params.name
  );
  let name = "err";
  let content = "err";
  if (article != undefined && article.name && article.content) {
    name = article.name;
    content = article.content;
  }

  content = content.replaceAll("abc123", styles.abc123);
  content = content.replaceAll("section_container", styles.section_container);
  content = content.replaceAll("section_column", styles.section_column);
  content = content.replaceAll("section_row", styles.section_row);
  content = content.replaceAll("math-display", `math-display ${styles.math} `);

  // console.log(article?.content);
  return (
    <div className={styles.article_container}>
      <div
        className={styles.article_wrapper}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default page;

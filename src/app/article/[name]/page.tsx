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

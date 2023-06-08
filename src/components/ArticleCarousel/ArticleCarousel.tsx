"use client";
import React from "react";
import styles from "./articleCarousel.module.css";
import Image from "next/image";

import { article } from "@/types/article_type";
import leftArrow from "@/images/arrow_left.svg";
import rightArrow from "@/images/arrow_right.svg";
import Article from "@/components/Article/Article";

function ArticleCarousel(props: { allArticles: article[] }) {
  const { allArticles } = props;
  const article_container = React.useRef(null);
  let [centeredIndex, setCenteredIndex] = React.useState(1);
  let [translateValue, setTranslateValue] = React.useState(0);

  const nextSlide = () => {
    if (centeredIndex < allArticles.length - 2 && article_container.current) {
      const elem = article_container.current as HTMLElement;
      let translateBy = 17;
      elem.style.transform = `translateX(${translateValue - translateBy}rem)`;
      setTranslateValue(translateValue - translateBy);
      setCenteredIndex(centeredIndex + 1);
    }
  };
  const previousSlide = () => {
    if (centeredIndex > 1 && article_container.current) {
      const elem = article_container.current as HTMLElement;
      let translateBy = 17;
      elem.style.transform = `translateX(${translateValue + translateBy}rem)`;
      setTranslateValue(translateValue + translateBy);
      setCenteredIndex(centeredIndex - 1);
    }
  };

  const generateAllArticleTitles = (allArticles: article[]) => {
    return allArticles.map((article) => {
      return <Article key={crypto.randomUUID()} {...{ article: article }} />;
    });
  };

  return (
    <div className={styles.carousel}>
      <Image
        className={styles.arrowLeft}
        src={leftArrow}
        onClick={previousSlide}
        alt="previous"
      />
      <div className={styles.article_wrapper}>
        <div ref={article_container} className={styles.article_container}>
          {generateAllArticleTitles(allArticles)}
        </div>
      </div>
      <Image
        className={styles.arrowRight}
        src={rightArrow}
        onClick={nextSlide}
        alt="next"
      />
    </div>
  );
}

export default ArticleCarousel;

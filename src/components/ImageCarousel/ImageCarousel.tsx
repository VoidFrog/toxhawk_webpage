"use client";
import React from "react";
import styles from "./imageCarousel.module.css";
import Image from "next/image";

import leftArrowGray from "@/images/arrow_left_gray.svg";
import rightArrowGray from "@/images/arrow_right_gray.svg";

function ImageCarousel(props: {
  allImages: {
    src: any;
    name: string;
  }[];
}) {
  const { allImages } = props;
  const image_container = React.useRef(null);
  let [centeredIndex, setCenteredIndex] = React.useState(1);
  let [translateValue, setTranslateValue] = React.useState(0);

  const nextSlide = () => {
    if (centeredIndex < allImages.length - 2 && image_container.current) {
      const elem = image_container.current as HTMLElement;
      let translateBy = 17;
      elem.style.transform = `translateX(${translateValue - translateBy}rem)`;
      setTranslateValue(translateValue - translateBy);
      setCenteredIndex(centeredIndex + 1);
    }
  };
  const previousSlide = () => {
    if (centeredIndex > 1 && image_container.current) {
      const elem = image_container.current as HTMLElement;
      let translateBy = 17;
      elem.style.transform = `translateX(${translateValue + translateBy}rem)`;
      setTranslateValue(translateValue + translateBy);
      setCenteredIndex(centeredIndex - 1);
    }
  };

  const generateImageTiles = (
    allImages: {
      src: any;
      name: string;
    }[]
  ) => {
    return allImages.map((image) => {
      return (
        <div className={styles.img_box} key={crypto.randomUUID()}>
          <Image
            className={styles.image}
            src={image.src}
            alt={image.name}
            loading="eager"
          />
        </div>
      );
    });
  };

  return (
    <div className={styles.container_padding}>
      <p className={styles.text_center}>Współprace</p>
      <div className={styles.carousel}>
        <Image
          className={styles.arrowLeft}
          src={leftArrowGray}
          onClick={previousSlide}
          alt="previous"
        />
        <div className={styles.image_wrapper}>
          <div ref={image_container} className={styles.image_container}>
            {generateImageTiles(allImages)}
          </div>
        </div>
        <Image
          className={styles.arrowRight}
          src={rightArrowGray}
          onClick={nextSlide}
          alt="next"
        />
      </div>
    </div>
  );
}

export default ImageCarousel;

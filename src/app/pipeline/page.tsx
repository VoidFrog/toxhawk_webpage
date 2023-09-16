import React from "react";
import styles from "./pipeline.module.css";

function pipeline() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <p className={styles.title}>
            RCFS® - Rapid Cascade Fluorescence Spectroscopy
          </p>
          <p>
            Opracowujemy nowatorski rodzaj spektroskopii, który łączy szereg
            odkryć w zakresie sztucznej inteligencji, fizyki kwantowej i chemii
            zrównoważonego rozwoju. Cel, który pragniemy osiągnąć, to stworzenie
            grupy podręcznych sensorów stale monitorujących skażenie środowiska.
            Szybka identyfikacja rodzaju zanieczyszczenia pozwala na
            natychmiastową reakcję i ochronienie populacji przed narażeniem na
            toksyny.
          </p>
          <div className={styles.progress_container}></div>
        </div>
      </div>
    </div>
  );
}

export default pipeline;

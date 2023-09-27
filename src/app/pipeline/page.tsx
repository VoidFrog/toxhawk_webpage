import React from "react";
import styles from "./pipeline.module.css";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

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
          <div>
            <div className={styles.progress_container}>
              <ProgressBar />
            </div>
            <div className={styles.colored_bottom_blue}></div>
          </div>
          <div>
            <div className={styles.progress_container}>
              <ProgressBar />
            </div>
            <div className={styles.colored_bottom_turquoise}></div>
          </div>
          <div>
            <div className={styles.progress_container}>
              <ProgressBar />
            </div>
            <div className={styles.colored_bottom_green}></div>
          </div>
        </div>
        {/* next section */}
        <div className={styles.section}>
          <p className={styles.title}>
            Fechlate® - technologia, od której zaczęła się nasza historia…
          </p>
          <p>
            Projektujemy zaawansowane katalizatory, umożliwiające rozkład toksyn
            pochodzących z dymu lub spalin do substancji przyjaznych środowisku.
            Wierzymy, że neutralizacja zanieczyszczeń bezpośrednio w miejscu ich
            emisji jest rozwiązaniem, które w długim terminie pozwoli na
            regenerację środowiska, cofnięcie zmian klimatycznych oraz
            zmniejszenie zachorowalności na nowotwory.
          </p>
          <div>
            <div className={styles.progress_container}>
              <ProgressBar />
            </div>
            <div className={styles.colored_bottom_blue}></div>
          </div>
        </div>
        {/* next section */}
        <div className={styles.section}>
          <p className={styles.title}>
            Fechlate® - technologia, od której zaczęła się nasza historia…
          </p>
          <p>
            Tworzymy innowacyjne aglomeraty nanocząstek oraz nanofiltry, których
            celem jest efektywne oczyszczanie gleb i wód z toksyn.
            Zaprojektowana struktura nanomateriałów pozwala nie tylko na
            wyłapywanie zanieczyszczeń, ale również na ich odzysk (metale
            ciężkie). Procesy puryfikacji mogą być prowadzone wielokrotnie przy
            użyciu tej samej partii nanocząstek, co jest gwarancją
            bezpieczeństwa, ergonomii i wysokiej wydajności.
          </p>
          <div>
            <div className={styles.progress_container}>
              <ProgressBar />
            </div>
            <div className={styles.colored_bottom_blue}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default pipeline;

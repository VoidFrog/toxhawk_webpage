import React from "react";
import styles from "./mission.module.css";

import Image from "next/image";

import mission_image from "@/images/mission_image.svg";

function Mission() {
  return (
    <div className={styles.mission_container}>
      <Image src={mission_image} alt="image" className={styles.main_image} />
      {/* first paragraph under the image */}
      <div className={styles.paragraph_container + " " + styles.main_paragraph}>
        <div className={styles.paragraph_wrapper}>
          <p>
            Świat, w którym przyszło nam obecnie żyć pełen jest ciągłych zmian.
          </p>
          <p>
            Każdego roku napotykamy kolejne wyzwania, a postępujące zaniedbywane
            problemy ukazują swe oblicze w najmniej oczekiwanym momencie.
          </p>
          <p>
            Korzystając z dobrodziejstw rodzimej planety - Ziemi, osiągnęliśmy
            tak wysoki stan rozwoju cywilizacji, że nawet nierealne marzenia
            naszych przodków sprzed zaledwie 100 lat zostały spełnione...
          </p>
        </div>
      </div>
      {/* second paragraph */}
      <div
        className={styles.paragraph_container + " " + styles.second_paragraph}
      >
        <div className={styles.paragraph_wrapper + " " + styles.flex_column}>
          <div>
            <p>
              Ten niesamowity przeskok technologiczny został jednak okupiony
              przez równie wielkie przemiany jakie nastąpiły zarówno w
              środowisku naturalnym, jak i w społeczeństwie.
            </p>
          </div>
          <div>
            <p>
              Gwałtowne zjawiska pogodowe wywołane przez zmiany klimatyczne,
              wykładniczy wzrost zachorowań na nowotwory i choroby serca,
              spowodowany zanieczyszczeniami gromadzącymi się w naturze, znaczne
              pogorszenie się jakości żywności - to tylko część z nich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;

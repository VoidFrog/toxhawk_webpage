"use client";
import React from "react";
import styles from "./progressBar.module.css";

function ProgressBar() {
  let randomNumber = Math.round(Math.random() * 100);
  let [completionLevel, setCompletionLevel] = React.useState(randomNumber);
  const phases = [1, 2, 3, 4, 5];
  return (
    <div className={styles.wrapper}>
      <div className={styles.name_labels}>
        <div>Toxhawk air RCFS®</div>
        <div>Internal lab phase</div>
        <div>External trials</div>
        <div> Product optimization</div>
        <div>Commercial</div>
      </div>
      <div className={styles.slider} style={{ width: `${completionLevel}%` }}>
        <div className={styles.progress_indicator}>
          <div></div>
        </div>
      </div>
      <div className={styles.bar_wrapper}>
        {phases.map((phase, i) => {
          return (
            <div
              className={styles.progress_phase}
              style={{
                background:
                  (i + 1) * 20 <= completionLevel
                    ? `var(--color-lime-green)`
                    : i * 20 <= completionLevel
                    ? `linear-gradient(to right, var(--color-lime-green), ${
                        ((completionLevel % 20) + 0.1) * 5
                      }%, rgba(49,58,91)`
                    : `linear-gradient(to right, rgba(49,58,91, ${
                        1 - (i - 1) * 0.1
                      }), rgba(49,58,91,  ${1 - i * 0.1})`,
              }}
              key={crypto.randomUUID()}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;

import React from "react";
import styles from "./calendarDateTile.module.css";

function CalendarDateTile(props: { date: Date }) {
  const { date } = props;
  const dayNames = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];
  let isEventPresent = Math.random() * 10 > 7 ? true : false;
  return (
    <div className={styles.container}>
      <div className={styles.day_info}>
        <p className={styles.day_number}>{date.getDate()}</p>
        <p className={styles.day_name}>{dayNames[date.getDay()]}</p>
      </div>
      <div
        className={styles.event_highlight}
        style={{
          backgroundColor: isEventPresent
            ? "var(--color-lime-green)"
            : "transparent",
        }}
      ></div>
    </div>
  );
}

export default CalendarDateTile;

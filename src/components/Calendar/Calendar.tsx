import React from "react";
import styles from "./calendar.module.css";
import CalendarDateTile from "../CalendarDateTile/CalendarDateTile";

function Calendar() {
  const months = [
    "styczen",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];
  const getMonthName = (days: Date[]) => {
    let monthsFromDays = days.map((day) => day.getMonth());
    if (monthsFromDays[0] != monthsFromDays[6]) {
      return `${months[monthsFromDays[0]]} / ${months[monthsFromDays[6]]}`;
    } else {
      return `${months[monthsFromDays[0]]}`;
    }
  };
  const getWeek = () => {
    let days = [];
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let day = new Date();
      if (i < 3) {
        day.setDate(today.getDate() - 3 + i);
        days.push(day);
      } else {
        day.setDate(today.getDate() - 3 + i);
        days.push(day);
      }
    }
    return days;
  };
  const currentWeek = getWeek();
  const currentMonth = getMonthName(currentWeek);
  const currentYear = currentWeek[0].getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.month_year_display}>
        <p>{currentMonth}</p>
        <p>{currentYear}</p>
      </div>
      <div className={styles.week_container}>
        {currentWeek.map((day) => {
          return <CalendarDateTile date={day} />;
        })}
      </div>
      <div className={styles.event_description}>
        <p>Istotne daty i wydarzenia </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          ex vitae elit posuere laoreet. Proin in sollicitudin leo, non placerat
          nunc. Curabitur scelerisque semper neque vitae mattis. In velit odio,
          aliquet in nisl in, tempor ullamcorper lectus. Integer ac lorem in
          odio sodales fermentum at non diam. Curabitur facilisis vel sapien eu
          aliquet. Quisque ut eros congue, faucibus tellus vel, tincidunt eros.
          Ut pretium luctus est in tincidunt. Mauris vitae metus quis justo
          malesuada volutpat nec a nisl.
        </p>
      </div>
      <div className={styles.description_highlight}></div>
    </div>
  );
}

export default Calendar;

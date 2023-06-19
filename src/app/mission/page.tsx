import React from "react";
import styles from "./mission.module.css";
import Image from "next/image";

import MissionMemberCard from "@/components/MissionMemberCard/MissionMemberCard";

import mission_image from "@/images/mission_image.svg";

function Mission() {
  const members = [
    {
      name: "Krzysiek",
      description:
        "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
      website: "https://voidfrog.github.io",
      email: "maildotoxhawka@costam.com",
    },
    {
      name: "Kojo",
      description:
        "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
      website: "",
      email: "maildotoxhawka@costam.com",
    },
    {
      name: "Miły",
      description:
        "text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text",
      website: "http://firebite.me",
      email: "maildotoxhawka@costam.com",
    },
  ];

  return (
    <div className={styles.mission_container}>
      <Image src={mission_image} alt="image" className={styles.main_image} />
      {/* first paragraph under the image */}
      <div className={styles.paragraph_container + " " + styles.main_paragraph}>
        <div className={styles.main_paragraph_wrapper}>
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
      <div className={styles.paragraph_container + " " + styles.paragraph}>
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
      {/* some kind of mp4 or animation, not my business rn */}
      {/* third paragraph */}
      <div className={styles.paragraph_container + " " + styles.paragraph}>
        <div
          className={styles.paragraph_wrapper_wide + " " + styles.flex_column}
        >
          <div>
            <p>
              Inicjatywa Toxhawk jest naszą odpowiedzią na zaistniałą sytuację.
              Jesteśmy grupą młodych naukowców/wynalazców, którzy od dziecięcych
              lat dostrzegają niewidzane przez wielu kumulujące się problemy.
              Połączył nas wspólny cel - pragniemy wykorzystując w pełni
              otrzymane talenty wprowadzić realną zmianę niwelującą skutki
              postępujących zmian klimatycznych.
            </p>
          </div>
          <div>
            <p>
              Wierzymy, że opracowane i wprowadzone do użytku przez nasz zespół
              wynalazki realnie przyczynią się do poprawy jakości życia ludzi
              narażonych na zanieczyszczenia, cofną obecne szkody oraz
              zapobiegną katastrofom ekologicznym w przyszłości - otwierając
              bezpieczny świat dla kolejnych pokoleń.
            </p>
          </div>
        </div>
      </div>
      {/* cards with descriptions about team members */}
      <div className={styles.cards_container}>
        {members.map((member) => {
          return <MissionMemberCard {...member} />;
        })}
      </div>
    </div>
  );
}

export default Mission;

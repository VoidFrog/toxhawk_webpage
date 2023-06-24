import React from "react";
import styles from "./projects.module.css";

import Image from "next/image";

import drone_image from "@/images/drone.svg";
import plane_image from "@/images/plane.svg";
import fechlate_image from "@/images/fechlate_reaction.svg";
import magnet_image from "@/images/magnet.svg";

function page() {
  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_wrapper}>
        {/* header before first section */}
        <div className={styles.header}>
          <div className={styles.header_content}>
            <p>RCFS® - Rapid Cascade Fluorescence Spectroscopy</p>
            <Image
              src={drone_image}
              alt="drone"
              className={styles.image_drone}
            />
          </div>
          <div
            className={styles.border_lime + " " + styles.border_radius1}
          ></div>
        </div>
        {/* first section */}
        <div className={styles.section}>
          <div className={styles.section_column}>
            <p>
              Toxhawk Air, Water oraz Soil to nowoczesne i bezobsługowe
              mini-sensory zaopatrzone w opatentowaną przez nas technologię
              RCFS®. Połączenie innowacyjnego instrumentu badawczego,
              sterowanego przez moduł IoT, a także mikrokomputera
              przetwarzającego dane z wykorzystaniem AI - umożliwia
              natychmiastowe i jednoczesne wykrywanie wielu rodzajów
              zanieczyszczeń w dowolnym miejscu. Wyniki analiz chemicznych,
              prezentowane w zestawieniu do norm, wysyłane są na bieżąco do
              aplikacji internetowej lub mobilnej.
            </p>
            <div className={styles.rcfs_animation_placeholder}>
              miejsce na animację ukazującą sens technologii RCFS®
            </div>
          </div>
        </div>
        {/* second section introduction */}
        <div className={styles.paragraph_wrapper}>
          <p>
            W zależności od zastosowania przedstawiamy rodzinę spektroskopów
            opartych o technologię RCFS®:
          </p>
        </div>
        {/* second section */}
        <div className={styles.section}>
          <div className={styles.section_column}>
            <div className={styles.section_row}>
              <div
                className={
                  styles.section_column +
                  " " +
                  styles.small_gap +
                  " " +
                  styles.half
                }
              >
                <h4 className={styles.font12 + " " + styles.weight200}>
                  TOXHAWK AIR
                </h4>
                <p className={styles.weight300}>
                  Specjalistyczne ucządzenie pomiarowe analizujące
                  zanieczyszczenie powietrzee lub skład ulatniającego się dymu.
                </p>
                <p className={styles.weight300}>
                  Dodatkowa funkcja to definiowanie źródła pochodzenia toksyn.
                </p>
                <p className={styles.weight300}>
                  Niewielkie rozmiary, moduł GPS, LTE, własne źródło zasilania i
                  obudowa spełniająca standard IPXY pozwalają na korzystanie z
                  możliwości urządzenia w wymagających warunkach. Toxhawk Air
                  posiada także mocowania oraz złącza przystosowane pod
                  autonomiczne loty dronów
                </p>
              </div>
              <div className={styles.animation_placeholder_air}>
                Animacja ukazująca urządzenie
              </div>
              {/* end of row */}
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.padding_lr2 +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font12 + " " + styles.weight300}>
                Lista zanieczyszczeń wykrywana przez TOXHAWK AIR:
              </p>
              <p>
                Różne substancje z grup paliw, rozpuszczalników, LZO, WWA,
                PCDDs, PCDFs, PCBs, TZO, barwników syntetycznych, herbicydów,
                fungicydów, i insektycydów.
              </p>
              <p>
                Toksyczne pyły i gazy: PM1, PM2.5, PM10, CO, H2S, SOx, NOx, O3,
                HCN
              </p>
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.padding_lr2 +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font11 + " " + styles.weight300}>
                Definiowane źródła pochodzenia zanieczyszczeń przez TOXHAWK AIR:
              </p>
              <p>
                Spalanie węgla brunatnego, węgla kamiennego, drewna, drewna
                lakierowanego, makulatury, roślinności, LDPE i HDPE, PET, PS,
                PCV, ubrań i włókien, gum, leków, olejów i klejów
              </p>
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font11 + " " + styles.weight300}>
                Przykładowy wynik pomiaru - aplikacja internetowa
              </p>
              <div className={styles.image_placeholder}>
                zdjęcie przedstawiające przykładowy wynik pomiaru z aplikacji
              </div>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className={styles.section}>
          <div className={styles.section_column}>
            <div className={styles.section_row}>
              <div className={styles.animation_placeholder_water}>
                Animacja ukazująca urządzenie
              </div>
              <div
                className={
                  styles.section_column +
                  " " +
                  styles.small_gap +
                  " " +
                  styles.half +
                  " " +
                  styles.text_align_left
                }
              >
                <h4 className={styles.font12 + " " + styles.weight200}>
                  TOXHAWK WATER
                </h4>
                <p className={styles.weight300}>
                  Stacjonarny moduł badawczy, monitorujący w czasie rzeczywistym
                  szczegółowy skład wody w rzekach i zbiornikach wodnych.
                </p>
                <p className={styles.weight300}>
                  Szczególną cechą urządzenia jest zdolność do stałej analizy
                  mikrobiologicznej wód {"(bakterie oraz glony)"}.
                </p>
                <p className={styles.weight300}>
                  Specjalnie zaprojektowana konstrukcja umożliwia samodzielną
                  pracę urządzenia oraz wysoką odporność na warunki
                  atmosferyczne, w tym powodzie.
                </p>
              </div>
              {/* end of row */}
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.padding_lr2 +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font11 + " " + styles.weight300}>
                Lista zanieczyszczeń wykrywana przez TOXHAWK WATER
              </p>
              <p>
                Różne substancje z grup paliw, rozpuszczalników, LZO, WWA,
                PCDDs, PCDFs, PCBs, TZO, barwników syntetycznych, herbicydów,
                fungicydów, insektycydów, zanieczyszczeń pochodzenia zwierzęcego
                oraz z odpadków żywności, leków, glonów oraz bakterii.
              </p>
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font11 + " " + styles.weight300}>
                Przykładowy wynik pomiaru - aplikacja internetowa
              </p>
              <div className={styles.image_placeholder}>
                zdjęcie przedstawiające przykładowy wynik pomiaru z aplikacji
              </div>
            </div>
          </div>
        </div>
        {/* fourth section */}
        <div className={styles.section}>
          <div className={styles.section_column}>
            <div className={styles.section_row}>
              <div
                className={
                  styles.section_column +
                  " " +
                  styles.small_gap +
                  " " +
                  styles.half
                }
              >
                <h4 className={styles.font12 + " " + styles.weight200}>
                  TOXHAWK SOIL
                </h4>
                <p className={styles.weight300}>
                  Podziemny instrument analityczny, indywidualnie dobrany pod
                  każdego klienta, na bieżąco monitorujący skażenie pola
                  uprawnego.
                </p>
                <p className={styles.weight300}>
                  Moduł badawczy okrąża pod ziemią miejsce uprawy, dzięki czemu
                  jest w stanie wskazać dokładne miejsce, z którego
                  zanieczyszczenia przedostają się do upraw.
                </p>
                <p className={styles.weight300}>
                  Konstrukcja jest całkowicie autonomiczna i zaprojektowana w
                  sposób, który chroni sensory badawcze przed glebą i edafonami
                  np. kretami. Zapewnia to długotrwałą i bezproblemową pracę
                  urządzenia przez wiele lat.
                </p>
              </div>
              <div className={styles.animation_placeholder_soil}>
                Animacja ukazująca urządzenie
              </div>
              {/* end of row */}
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.padding_lr2 +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font12 + " " + styles.weight300}>
                Lista zanieczyszczeń wykrywana przez TOXHAWK SOIL:
              </p>
              <p>
                Różne substancje z grup paliw, rozpuszczalników, LZO, WWA,
                PCDDs, PCDFs, PCBs, TZO, barwników syntetycznych, herbicydów,
                fungicydów, i insektycydów, leków, a także zanieczyszczeń
                pochodzenia zwierzęceego oraz z odpadków żywności.
              </p>
            </div>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.text_align_center
              }
            >
              <p className={styles.font11 + " " + styles.weight300}>
                Przykładowy wynik pomiaru - aplikacja internetowa
              </p>
              <div className={styles.image_placeholder}>
                zdjęcie przedstawiające przykładowy wynik pomiaru z aplikacji
              </div>
            </div>
          </div>
        </div>
        {/* end of toxhawk air/water/soil section */}
        {/* fechlate header */}
        <div className={styles.header}>
          <div className={styles.header_content}>
            <p>Fechlate® - Nasz klucz do cofnięcia zmian klimatycznych </p>
            <Image
              src={plane_image}
              alt="drone"
              className={styles.image_plane}
            />
          </div>
          <div className={styles.section_row + " " + styles.no_gap}>
            <div
              className={
                styles.border_lime +
                " " +
                styles.flex_width4 +
                " " +
                styles.border_radius1
              }
            ></div>
            <div
              className={
                styles.border_brown +
                " " +
                styles.flex_width1 +
                " " +
                styles.border_radius1
              }
            ></div>
          </div>
        </div>
        {/* fechlate section */}
        <div className={styles.section}>
          <div className={styles.section_column}>
            <div
              className={
                styles.section_column +
                " " +
                styles.smallest_gap +
                " " +
                styles.padding_lr05 +
                " " +
                styles.text_align_left
              }
            >
              <p>
                Fechlate® to technologia, dzięki której narodziła się idea
                inicjatywy Toxhawk. Już w wieku szkolnym prowadziliśmy
                zaawansowane badania nad jej rozwojem. Fechlate® to
                elektronanokatalizator nowej generacji, który przekształca
                toksyczne gazy i pyły emitowane przez kominy przemysłowe,
                spaliny samochodów, statków oraz samolotów do przyjaznych
                środowisku związków chemicznych. Rozwiązanie to jest
                zaimplementowane w urządzeniu przypominającym katalizator
                samochodowy, lecz w zależności od zastosowania rozmiary są
                dobierane indywidualnie.
              </p>
              <p>
                Co więcej urządzenie neutralizuje również gazy cieplarniane. Oto
                lista przykładowych przemian chemicznych zachodzących w układzie
                Fechlate®:
              </p>
            </div>
            <Image
              src={fechlate_image}
              alt="fechlate reaction"
              className={styles.fechlate_reaction_image}
            />
            <p className={styles.text_align_center + " " + styles.padding_lr1}>
              Wdrożenie projektu Fechlate® jako produkt komercyjny to nasz
              najważniejszy cel na przyszłość. Jest to najbardziej skomplikowana
              i innowacyjna technologia, którą opracowujemy.
            </p>
            <div className={styles.animation_placeholder_fechlate}>
              Miejsce na film Fechlate® - launching the change
            </div>
          </div>
        </div>
        {/* end of fechlate section */}
        {/* toxsponge section */}
        <div className={styles.header}>
          <div className={styles.header_content}>
            <p>Toxsponge® - Nanoroboty ku rewitalizacji środowiska</p>
          </div>
          <div className={styles.section_row + " " + styles.gap02}>
            <div
              className={
                styles.border_lime +
                " " +
                styles.flex_width48 +
                " " +
                styles.border_radius_left
              }
            ></div>
            <div
              className={styles.border_brown + " " + styles.flex_width4}
            ></div>
            <div
              className={styles.border_yellow + " " + styles.flex_width4}
            ></div>
            <div
              className={styles.border_blue + " " + styles.flex_width4}
            ></div>
            <div
              className={styles.border_purple + " " + styles.flex_width2}
            ></div>
            <div
              className={
                styles.border_red +
                " " +
                styles.flex_width2 +
                " " +
                styles.border_radius_right
              }
            ></div>
            <Image
              src={magnet_image}
              alt="manget"
              className={styles.image_magnet}
            />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section_column}>
            <p>
              Toxsponge® - to nanoroboty o wielkości 50 nm {"("}skala podobna do
              wirusów{")"}, sterowane za pomocą kontrolowanego pola
              magnetycznego. Posiadają one specjalne odnogi, o różnych
              zastosowaniach. Jedna z nich wyłapuje metale ciężkie np. kadm,
              ołów i rtęć. Druga posiada specjalne ramię niszczące
              zanieczyszczenia organiczne. Nanoroboty Toxsponge® wprowadza się
              do gleby, bądź wody i rozprowadza po terenie za pomocą
              elektromagnesów. W tym czasie następuje oczyszczanie środowiska.
              Proces kończy się w momencie gwałtownego zwiększenia natężenia
              pola magnetycznego, co skutkuje ewakuacją nanorobotów z miejsca
              prowadzenia operacji.
            </p>
            <div className={styles.animation_placeholder_toxsponge}>
              miejsce na animację
            </div>
            <p>
              Projekt Toxsponge® umożliwia skuteczną i szybką rewitalizację
              nawet najbardziej skażonych terenów. Odzysk nanorobotów z
              oczyszczonego miejsca gwarantuje bezpieczeństwo, pozwala na odzysk
              pochłoniętych metali oraz daje możliwość ponownego wykorzystania
              nanorobotów.
            </p>
            <div className={styles.section_row}>
              <div className={styles.image_placeholder}>
                {"("}zdjęcie{")"}
              </div>
              <div className={styles.image_placeholder}>
                {"("}zdjęcie{")"}
              </div>
            </div>
            <div
              className={
                styles.animation_placeholder_toxsponge +
                " " +
                styles.toxsponge_nanobots
              }
            >
              {"("}film ukazujący nasze nanoroboty pod mikroskopem{")"}
            </div>
          </div>
        </div>
        {/* motivation/goals/something section */}
        <div className={styles.section + " " + styles.last_section}>
          <div
            className={
              styles.section_column +
              " " +
              styles.small_gap +
              " " +
              styles.text_align_center
            }
          >
            <div className={styles.padding_lr1}>
              <p>
                Działamy dla dobra natury i przyszłych pokoleń, a nasze
                wynalazki, w szczególności nanoroboty nie są w stanie zgładzić
                ludzkości. Mogą Państwo spać spokojnie. Domyślamy się, że
                powyższe opisy mogą wzbudzać wiele emocji, lecz świat stale się
                rozwija i nowatorskie technologie z biegiem czasu stają się
                standardem ludzkiego życia.
              </p>
            </div>
            <p>
              Najbliższa przyszłość przyniesie wiele niezrozumiałych i
              innowacyjnych wynalazków...
            </p>
            <div className={styles.self_right}>Zespół Toxhawk</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

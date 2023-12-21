import Image from "next/image";
import styles from "./page.module.css";
import styles_test from "./page-test.module.css";
import clsx from "clsx";

export default function Home() {
  return (
    <main className={clsx(styles["main"], styles_test["site__body"])}>
      <div className={styles_test.site__honeycomb}>
        <div
          className={clsx(
            styles_test["hexagonsHome"],
            styles_test["u-clearfix"]
          )}
        >
          <div className={styles_test.hexagonsHome__hexagons}>
            <div
              className={clsx(
                styles_test["hexagonsHome__hexagon"],
                styles_test["hexagonsHome__hexagon--large"]
              )}
            >
              <a
                className={styles_test.hexagonsHome__inner}
                href="/duurzaam/startpagina"
              >
                <span className={styles_test.hexagonsHome__center}>
                  <span
                    className={styles_test.hexagonsHome__backgroundImage}
                  ></span>
                  <div className={styles_test.hexagonsHome__content}>
                    <h2 className={styles_test.hexagonsHome__title}>
                      Duurzaam Bouwen
                    </h2>
                    <h4 className={styles_test.hexagonsHome__subTitle}>
                      en wonen
                    </h4>
                  </div>
                </span>
              </a>
            </div>
            <div
              className={clsx(
                styles_test["hexagonsHome__hexagon"],
                styles_test["hexagonsHome__hexagon--large"]
              )}
            >
              <a
                className={styles_test.hexagonsHome__inner}
                href="/innovatie/startpagina"
              >
                <span className={styles_test.hexagonsHome__center}>
                  <span
                    className={styles_test.hexagonsHome__backgroundImage}
                  ></span>
                  <div
                    className={clsx(
                      styles_test["hexagonsHome__content"],
                      styles_test["hexagonsHome__content--hasBackground"]
                    )}
                  >
                    <h2 className={styles_test.hexagonsHome__title}>
                      Innovatie
                    </h2>
                    <h4 className={styles_test.hexagonsHome__subTitle}>
                      in de bouw
                    </h4>
                  </div>
                </span>
              </a>
            </div>
            <div
              className={clsx(
                styles_test["hexagonsHome__hexagon"],
                styles_test["hexagonsHome__hexagon--medium"]
              )}
            >
              <a
                className={clsx(
                  styles_test["hexagonsHome__inner"],
                  styles_test["hexagonsHome__inner--dark"]
                )}
                href="https://www.kampc.be/rondleidingen-en-expo/exploded-view-beyond-building"
              >
                <span className={styles_test.hexagonsHome__center}>
                  <div className={styles_test.hexagonsHome__content}>
                    <h2 className={styles_test.hexagonsHome__title}>
                      Exploded View Beyond Building
                    </h2>
                    <h4 className={styles_test.hexagonsHome__subTitle}>
                      rondleidingen
                    </h4>
                  </div>
                </span>
              </a>
            </div>
            <div
              className={clsx(
                styles_test["hexagonsHome__hexagon"],
                styles_test["hexagonsHome__hexagon--medium"]
              )}
            >
              <a
                className={clsx(
                  styles_test["hexagonsHome__inner"],
                  styles_test["hexagonsHome__inner--light"]
                )}
                href="https://www.kampc.be/agenda/item/391/kamp-c-viert-feest"
              >
                <span className={styles_test.hexagonsHome__center}>
                  <div className={styles_test.hexagonsHome__content}>
                    <h2 className={styles_test.hexagonsHome__title}>
                      Kamp C viert feest!
                    </h2>
                    <h4 className={styles_test.hexagonsHome__subTitle}>
                      Bezoek ons op 19/08
                    </h4>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

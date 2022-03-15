import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./hero.module.scss";
import clsx from "clsx";
import AsciinemaPlayer from "../AsciinemaPlayer";
import Link from "@docusaurus/Link";
import { useWindowSize } from "@docusaurus/theme-common";

const Hero: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const window = useWindowSize();

  return (
    <div className={clsx(styles.split, "hero shadow--lw hero--primary")}>
      <div className={styles.halfWidth}>
        <h1 className={clsx(styles.mainText, "hero__title")}>
          {siteConfig.title}
        </h1>
        <h2
          className={clsx(
            styles.secondaryText,
            "hero__subtitle margin-top--xl margin-horiz--xl"
          )}
        >
          {siteConfig.tagline}
        </h2>
        <div className={clsx(styles.buttons, "padding-top--md")}>
          <Link
            className="button button--secondary button--lg hero__subtitle"
            to="/docs/intro"
          >
            Installation Tutorial ~10min ⏱️
          </Link>
        </div>
      </div>
      {/* Do not render on mobile, as it tries to render even if hidden */}
      {window != "mobile" && (
        <div
          className={clsx(
            styles.split,
            styles.hiddenOnPhone,
            "padding-top--lg padding-left--md padding-right--xl"
          )}
        >
          <AsciinemaPlayer src="/casts/install_panel_full.cast" speed={1.25} />
        </div>
      )}
    </div>
  );
};

export default Hero;

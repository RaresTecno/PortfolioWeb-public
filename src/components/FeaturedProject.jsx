'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/FeaturedProject.module.css";

export default function FeaturedProject() {
  const { t } = useContext(LanguageContext);
  const fp = t("featuredProject");

  return (
    <section id="featured" className={styles.section}>
      <h2 className="section-title">{t("section.featured")}</h2>

      <a
        href={fp.link}
        target="_blank"
        rel="noreferrer"
        className={styles.card}
      >
        <img src={fp.img} alt={fp.name} className={styles.thumb} />
        <div className={styles.body}>
          <h3>{fp.name}</h3>
          <p>{fp.description}</p>
          <span className={styles.link}>↗</span>
        </div>
      </a>
    </section>
  );
}
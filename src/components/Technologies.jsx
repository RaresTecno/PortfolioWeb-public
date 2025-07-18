'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Technologies.module.css";

export default function Technologies() {
  const { t } = useContext(LanguageContext);
  const techs = t("technologies") || [];

  return (
    <section id="technologies" className={styles.section}>
      <h2 className="section-title">{t("section.technologies")}</h2>
      <ul className={styles.list}>
        {techs.map((tech) => (
          <li key={tech} className={styles.item}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}
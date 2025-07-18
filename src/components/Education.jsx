'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Education.module.css";

export default function Education() {
  const { t } = useContext(LanguageContext);
  const eduObj = t("education") || {};
  const studies = Object.values(eduObj);

  return (
    <section id="education" className={styles.section}>
      <h2 className="section-title">{t("section.education")}</h2>
      <ul className={styles.timeline}>
        {studies.map((s) => (
          <li key={s.degree} className={styles.item}>
            <h3>{s.degree}</h3>
            <span className={styles.school}>{s.school}</span>
            <span className={styles.period}>{s.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Languages.module.css";

export default function Languages() {
  const { t } = useContext(LanguageContext);
  const langsObj = t("languages") || {};
  const langs = Object.values(langsObj);

  return (
    <section id="languages" className={styles.section}>
      <h2 className="section-title">{t("section.languages")}</h2>
      <ul className={styles.list}>
        {langs.map((l) => (
          <li key={l.name} className={styles.item}>
            <span>{l.name}</span>
            <span className={styles.level}>{l.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
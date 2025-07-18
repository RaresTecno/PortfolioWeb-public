'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Skills.module.css";

export default function Skills() {
  const { t } = useContext(LanguageContext);
  const skills = t("skills") || [];

  return (
    <section id="skills" className={styles.section}>
      <h2 className="section-title">{t("section.skills")}</h2>
      <ul className={styles.cloud}>
        {skills.map((s) => (
          <li key={s} className={styles.tag}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
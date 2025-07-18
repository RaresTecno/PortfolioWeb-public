'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Experience.module.css";

export default function Experience() {
  const { t } = useContext(LanguageContext);
  const expObj = t("experience") || {};
  const timeline = Object.values(expObj);

  return (
    <section id="experience" className={styles.section}>
      <h2 className="section-title">{t("section.experience")}</h2>

      <ul className={styles.timeline}>
        {timeline.map((item) => (
          <li key={item.period} className={styles.item}>
            <img
              src={item.img}
              alt={item.company}
              className={styles.avatar}
              loading="lazy"
            />
            <div>
              <h3>{item.title} — {item.company}</h3>
              <span className={styles.period}>{item.period}</span>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
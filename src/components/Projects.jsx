'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const { t } = useContext(LanguageContext);
  const projObj = t("projects") || {};
  const projects = Object.values(projObj);

  return (
    <section id="projects" className={styles.section}>
      <h2 className="section-title">{t("section.projects")}</h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link || "#"}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noreferrer" : undefined}
            className={styles.card}
          >
            <img
              src={p.img}
              alt={p.name}
              className={styles.thumb}
              loading="lazy"
            />
            <div className={styles.body}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </div>
            {p.link && <span className={styles.arrow}>↗</span>}
          </a>
        ))}
      </div>
    </section>
  );
}

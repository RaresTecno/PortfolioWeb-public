'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "../styles/Hero.module.css";        

export default function Hero() {
  const { t } = useContext(LanguageContext);

  return (
    <section id="about" className={styles.container}>
      <img src="/rares.png" alt="Rares Andrei" className={styles.avatar} />

      <h1 className={styles.title}>{t("hero.title")}</h1>
      <p className={styles.subtitle}>{t("hero.subtitle")}</p>
      <p className={styles.about}>{t("hero.about")}</p>
      <div className={styles.actions}>
        <a
          href="/RaresAndreiAna_FullStack.pdf"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();

            window.open('/RaresAndreiAna_FullStack.pdf', '_blank', 'noopener,noreferrer');

            const link = document.createElement('a');
            link.href = '/RaresAndreiAna_FullStack.pdf';
            link.download = 'RaresAndreiAna_FullStack.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          {t("hero.downloadCv")}
        </a>
        <a href="https://linkedin.com/in/rares-andrei-ana" className="btn btn-outline" target="_blank" rel="noreferrer">
          {t("hero.linkedin")}
        </a>
      </div>
    </section>
  );
}

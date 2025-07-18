'use client';
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useContext(LanguageContext);
  return (
    <footer style={{padding:"2rem 1rem",textAlign:"center"}}>
      <small>{t("footer.rights")}</small>
    </footer>
  );
}

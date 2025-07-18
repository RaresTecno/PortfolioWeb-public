import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function FlagSwitcher() {
  const { lang, setLang } = useContext(LanguageContext);

  const flagStyle = (code) => ({
    cursor: "pointer",
    opacity: lang === code ? 1 : 0.45,
    transition: "opacity .2s",
    width: "28px",
    height: "28px",
  });

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <img
        src="/flags/es.png"
        alt="Bandera de España"
        aria-label="Cambiar el idioma a español"
        onClick={() => setLang("es")}
        style={flagStyle("es")}
      />
      <img
        src="/flags/en.png"
        alt="United States flag"
        aria-label="Switch language to English"
        onClick={() => setLang("en")}
        style={flagStyle("en")}
      />
    </div>
  );
}

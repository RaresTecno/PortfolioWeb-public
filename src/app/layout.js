import "./globals.css"
import { LanguageProvider } from "../context/LanguageContext";

export const metadata = {
  title: "Rares Andrei Ana",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

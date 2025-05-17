import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Genify Landing",
  description: "Master Your Exams with Genify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-Ho+j7jyX93eQ3tJovAAYD9Oy0nQMeCbJZmNaWp+8T++vEjW64+J3Kn0Y+fRQ3OkDRW+cDyQfJQn/Fsl0iD+d1g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>
      </head>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "SmartXEnglish | Inglês Offshore, Técnico e Profissional",
  description:
    "Aprenda Inglês Offshore e Técnico com especialistas. Preparação para IELTS, certificações marítimas e aulas personalizadas para o mercado global.",
  openGraph: {
    title: "SmartXEnglish - Domine o Inglês Offshore e Técnico",
    description:
      "Especializados no ensino de inglês para profissionais offshore e técnicos. Prepare-se para IELTS, certificações marítimas e traduções técnicas. Entre em contato!",
    url: "https://www.smartxenglish.com",
    type: "website",
    images: [
      {
        url: "https://www.smartxenglish.com/assets/smartxenglish-banner.jpg",
        width: 1200,
        height: 630,
        alt: "SmartXEnglish - Inglês Offshore e Técnico",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@SmartXEnglish",
    title: "SmartXEnglish - Inglês Offshore, Técnico e Profissional",
    description:
      "Desenvolva seu inglês para certificações internacionais e destaque-se no mercado offshore. Prepare-se para IELTS e aprimore seu vocabulário técnico!",
    image: "https://www.smartxenglish.com/assets/smartxenglish-banner.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

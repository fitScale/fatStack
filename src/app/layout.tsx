import "./globals.css";

import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";
import AppContextProvider from "@/contexts/AppContext";

import localFont from "next/font/local";

const helvetica = localFont({
  src: "../../public/fonts/helvetica.otf",
  variable: "--helvetica",
});

const robuck = localFont({
  src: "../../public/fonts/robuck.otf",
  variable: "--robuck",
});

const archivo = Archivo({ subsets: ["latin"], variable: "--archivo" });
const inter = Inter({ subsets: ["latin"], variable: "--Inter" });

export const metadata = {
  title: "  PROSUPPS - FREE SAMPLES + SHAKER",
  description:
    "Limited time only! Get FREE samples & shaker, when you buy any pre-workout!",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${helvetica.variable}, ${robuck.variable}`}
    >
      <ApolloClientProvider>
        <body>{children}</body>
      </ApolloClientProvider>
    </html>
  );
}

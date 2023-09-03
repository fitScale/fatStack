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
const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata = {
  title: "PROSUPPS - 35% OFF THE FAT LOSS STACK",
  description: "Limited time only! 35% OFF THE FAT LOSS STACK",
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
      className={`${inter.variable} ${archivo.variable}  ${helvetica.variable}, ${robuck.variable}`}
    >
      <ApolloClientProvider>
        <body>{children}</body>
      </ApolloClientProvider>
    </html>
  );
}

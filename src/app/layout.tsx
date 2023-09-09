import "./globals.css";

import { Archivo } from "next/font/google";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";

import localFont from "next/font/local";
import Script from "next/script";

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
        <body>
          {children}
          <Analytics />
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1660807794213788');
fbq('track', 'PageView');
`,
            }}
          />
        </body>
      </ApolloClientProvider>
    </html>
  );
}

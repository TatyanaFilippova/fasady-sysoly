import type { Metadata, Viewport } from "next";
import "./globals.css";

import LocalFont from "next/font/local";
import StyledComponentsRegistry from "@/app/lib/registry";
import Providers from "@/components/progressBar/ProgressBar";
import { ReactNode } from "react";

const inter = LocalFont({
  src: [
    {
      path: "../../public/font/0_BlackerSansProVariableGX.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/0_BlackerSansProVariableGX.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/0_BlackerSansProVariableGX.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "Производство мебельных фасадов из МДФ | Высокое качество и быстрые сроки",
  description:
    "Производим качественные МДФ фасады для кухни и мебели на заказ. Широкий выбор цветов, покрытий (ПВХ, эмаль, шпон). Индивидуальные размеры, быстрые сроки изготовления.",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers> {children} </Providers>
          <div id="Modal"></div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import Header from "@/components/header/Header";
import { ViewTransitions } from "next-view-transitions";
import Providers from "./Providers";
import { CartProvider } from "./cartpage/_components/cartlogic";

export const rhd = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-rhd",
});

export const metadata: Metadata = {
  title: "deCube",
  description: "Because everything is better in cube form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <body className={`${rhd.className} antialiased`}>
            <Header />
            <Providers>
              <CartProvider>{children}</CartProvider>
            </Providers>
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}

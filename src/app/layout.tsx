import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";


const geistRoboto=localFont({
  src:"./fonts/Roboto-Regular.ttf",
  variable:"--font-geist-roboto",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "LandingPage-NoxCreation",
  description: "Prueba Tecnica de NoxCreation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistRoboto.className}>
        <Provider>
          <Header/>
          <main>
          {children}
          </main>
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}

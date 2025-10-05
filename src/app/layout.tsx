import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "E-Learning Platform",
  description: "E-Learning Platform composed by Cientheon Vietnam",
  icons: {
    icon: "/assets/images/logo-corporate.png",
  },
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}

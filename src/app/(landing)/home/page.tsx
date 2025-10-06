"use client";
import { EBackToTop } from "@/@shared/components/ui";
import { MainContent } from "./main-content";
import { Footer } from "./footer";
import { Header } from "./header";


export default function MobileAuth() {

  return (
    <main className="min-h-dvh bg-white text-[#111827]">
      {/* AppBar */}
      {/* Header */}
      <Header/>
      
      {/* Content container */}
      <MainContent/>

      {/* Back to top button */}
        <EBackToTop offset={300} />

      {/* Footer */}
      <Footer/>
    </main>
  );
}

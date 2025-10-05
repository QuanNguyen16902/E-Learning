import { ESidebar } from "@/@shared/components/ui/e-sidebar";
import { EToggleTheme } from "@/@shared/components/ui/e-toggle-theme";
import Image from "next/image";
import { useState } from "react";

export const Header = () => { 
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
          <header className="sticky top-0 z-10 flex h-12 md:h-16 items-center justify-between border-b border-gray-200 bg-white px-3 md:px-6">
        <button aria-label="menu" onClick={() => setOpenSidebar(true)} className="p-2 rounded-lg hover:bg-gray-100">
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <EToggleTheme />
        <div className="flex items-center gap-2">
          <div className="rounded-md px-2 py-0.5 text-xs md:text-sm">
            <Image src="/assets/images/logo-corporate.png" alt="logo" width={40} height={40}/>
          </div>
        </div>

        <button aria-label="search" className="p-2 rounded-lg hover:bg-gray-100">
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path d="m21 21-4.2-4.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
         <ESidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
      </header>
      
    );}
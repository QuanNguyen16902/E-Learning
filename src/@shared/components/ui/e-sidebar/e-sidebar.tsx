"use client";

import React, { useEffect } from "react";
import { ESidebarProps } from "./e-sidebar.type";
import { EChevron } from "../e-chevron";

export const ESidebar: React.FC<ESidebarProps> = ({
  className = "",
  onSignUp,
  onSignIn,
  categories = [
    { id: "tech", label: "Tech & Data" },
    { id: "biz", label: "Business & Management" },
    { id: "creative", label: "Creative & Design" },
    { id: "science", label: "Sciences & Education" },
    { id: "stem", label: "STEM & Emerging Fields" },
    { id: "health", label: "Health & Wellness" },
  ],
  onInviteFriends,
  onHelp,
  language = "English",
  onLanguageClick,
  onClose,
  open = false,
}) => {
  // ESC để đóng
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const overlayCls =
    "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 " +
    (open ? "opacity-100 visible" : "opacity-0 invisible");

  const sheetCls =
    [
      "fixed top-0 left-0 z-50 h-dvh w-72 max-w-[80%]",
      "bg-white dark:bg-[#141414] shadow-xl",
      "transform transition-transform duration-300 ease-in-out",
      open ? "translate-x-0" : "-translate-x-full",
      className,
    ].join(" ");

  const sectionBox = "px-2 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-white/5";

  return (
    <>
      {/* Overlay */}
      <div className={overlayCls} onClick={onClose} />

      {/* Sidebar sheet */}
      <aside
        className={sheetCls}
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 p-4">
          <h2 className="text-gray-900 dark:text-gray-100 font-semibold">Side bar</h2>
          <button
            onClick={onClose}
            aria-label="close"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto text-sm text-gray-900 dark:text-gray-100">
          {/* Auth actions */}
          <nav className="space-y-1">
            <button onClick={onSignUp} className={`${sectionBox} text-brand font-medium text-[15px]`}>
              Sign up
            </button>
            <button onClick={onSignIn} className={`${sectionBox} text-brand`}>
              Sign in
            </button>
          </nav>

          <hr className="my-3 border-t border-gray-200 dark:border-gray-800" />

          {/* Categories */}
          <ul className="space-y-1">
            {categories.map((it) => (
              <li key={it.id}>
                <button
                  onClick={it.onClick}
                  className={`w-full flex items-center justify-between ${sectionBox}`}
                >
                  <span className="truncate">{it.label}</span>
                  <EChevron direction="right" className="h-4 w-4 opacity-70" />
                </button>
              </li>
            ))}
          </ul>

          <hr className="my-3 border-t border-gray-200 dark:border-gray-800" />

          {/* Others */}
          <div className="space-y-1">
            <button onClick={onInviteFriends} className={`w-full text-left ${sectionBox}`}>
              Invite friends
            </button>
            <button onClick={onHelp} className={`w-full text-left ${sectionBox}`}>
              Help and Support
            </button>
          </div>

          {/* Language */}
          <div className="mt-3">
            <button
              onClick={onLanguageClick}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

/* icons */
function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" strokeWidth="2" />
    </svg>
  );
}

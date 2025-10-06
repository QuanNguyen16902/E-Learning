import React, { useState, useRef, useEffect } from "react";
import { EDropdownProps } from "./e-dropdown.type";
import { EChevron } from "../e-chevron";

export const EDropdown: React.FC<EDropdownProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div id={id} className={`flex flex-col gap-1 ${className}`} ref={ref}>
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          className="
            relative w-full border rounded-3xl px-3 pr-10
            h-10
            text-left flex items-center
            focus:outline-none focus:ring-2 focus:ring-brand
          "
        >
          <span className="truncate">{selected?.label ?? "Select…"}</span>

          {/* Chevron – bám vào button nhờ button `relative` */}
          <span
            className={`
              pointer-events-none absolute inset-y-0 right-2 flex items-center
              transition-transform duration-200 ${open ? "rotate-180" : ""}
            `}
          >
            <EChevron direction="down" size={15} />
          </span>
        </button>

        {/* Options (full width & trượt xuống) */}
        <div
          className={`
            absolute top-full left-0 right-0 w-full mt-1 z-20
            origin-top rounded-sm border bg-white shadow-lg
            overflow-auto max-h-60 transform-gpu will-change-transform
            transition-all duration-200 ease-out
            ${open
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none"}
          `}
        >
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => { onChange?.(opt.value); setOpen(false); }}
              className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                opt.value === value ? "bg-blue-50 text-blue-600 font-medium" : ""
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

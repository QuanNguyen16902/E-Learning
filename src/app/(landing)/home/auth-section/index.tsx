"use client";
import { useState } from "react";
import { SignInBlock } from "./sign-in-block";
import { SignUpBlock } from "./sign-up-block";

type Mode = "signin" | "signup";
const FADE_MS = 200; // khớp với CSS

export default function AuthSection() {
  const [mode, setMode] = useState<Mode>("signin");
  const [fading, setFading] = useState(false);

  // state form (giữ nguyên của bạn)
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [agree, setAgree] = useState(true);

  const switchTo = (m: Mode) => {
    if (m === mode) return;
    setFading(true);                    // fade-out
    setTimeout(() => {
      setMode(m);                       // đổi panel khi đã mờ
      setFading(false);                 // fade-in panel mới
    }, FADE_MS);
  };

  return (
    <div className="md:max-w-md md:ml-auto">
      {/* wrapper có fade (không overlay, chiều cao tự theo nội dung) */}
      <div className={`mt-4 md:mt-6 transition-opacity duration-200 ${fading ? "opacity-0" : "opacity-100"}`}>
        {mode === "signin" ? (
          <SignInBlock
            email={email}
            onEmail={setEmail}
            onToSignUp={() => switchTo("signup")}
          />
        ) : (
          <SignUpBlock
            fullName={fullName}
            onFullName={setFullName}
            email={email}
            onEmail={setEmail}
            agree={agree}
            onAgree={setAgree}
            onToSignIn={() => switchTo("signin")}
          />
        )}
      </div>
    </div>
  );
}



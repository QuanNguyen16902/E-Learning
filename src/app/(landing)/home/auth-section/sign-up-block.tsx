import { EButton, ECard, ECheckbox, ETextField } from "@/@shared/components/ui";
import { EDivider } from "@/@shared/components/ui/e-divider";
import { SocialButtons } from "./social-button";

export const SignUpBlock = ({
  fullName,
  onFullName,
  email,
  onEmail,
  agree,
  onAgree,
  onToSignIn,
}: {
  fullName: string;
  onFullName: (v: string) => void;
  email: string;
  onEmail: (v: string) => void;
  agree: boolean;
  onAgree: (v: boolean) => void;
  onToSignIn: () => void;
}) => {
  return (
    <>
       <h4 className="type-h4 md:type-h3 text-center md:text-left mt-4 md:mt-0">
         Start learning smarter today
      </h4>
       <div className="mt-4 md:mt-6 space-y-4">
      <ETextField
        placeholder="Your full name"
        value={fullName}
        onChange={(e) => onFullName(e.target.value)}
        className="h-11 md:h-12"
      />
      <ETextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => onEmail(e.target.value)}
        className="h-11 md:h-12"
      />
      <ECheckbox
        label="Send me updates on new programs, personalized learning paths, and study tips."
        checked={agree}
        onChange={onAgree}
      />
      <EButton
        className="h-11 md:h-12 w-full"
        onClick={() => alert(`Sign up: ${fullName} / ${email} / agree=${agree}`)}
      >
        Sign Up Free
      </EButton>

      <EDivider label="Other sign up options" />
      <SocialButtons />

      <p className="text-xs md:text-sm text-gray-500">
        By signing up, you agree to our{" "}
        <a className="underline" href="#">
          Terms of Service
        </a>{" "}
        and{" "}
        <a className="underline" href="#">
          Privacy Policy
        </a>
        .
      </p>

      <ECard className="bg-gray-50 dark:bg-[#171717]">
        <div className="text-center text-sm md:text-base">
          Already have an account?{" "}
          <button
            className="font-semibold text-brand hover:underline"
            onClick={onToSignIn}
          >
            Sign in
          </button>
        </div>
      </ECard>
    </div>
    </>
   
  );
}

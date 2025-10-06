import { ETextField, EButton, ECard, EDivider } from "@/@shared/components/ui";
import { SocialButtons } from "./social-button";

export const SignInBlock = ({
  email,
  onEmail,
  onToSignUp,
}: {
  email: string;
  onEmail: (v: string) => void;
  onToSignUp: () => void;
}) => {
  return (
    <>
        <h4 className="type-h4 md:type-h3 text-center md:text-left mt-4 md:mt-0">
         Sign in to continue your learning
      </h4>
      <div className="mt-4 md:mt-6 space-y-4">
      <ETextField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => onEmail(e.target.value)}
        className="h-11 md:h-12"
      />

      <EButton
        variant="primary"
        className="h-11 md:h-12 w-full"
        onClick={() => alert(`Sign in: ${email}`)}
      >
        Continue
      </EButton>

      <EDivider label="Other sign in options" />
      <SocialButtons />

      <ECard className="mt-2 bg-[#eef5ff] border-[#dbe9ff]">
        <div className="flex items-center justify-between">
          <span className="text-sm md:text-base text-gray-700">
            You don’t have an account?
          </span>
          <button
            className="text-sm md:text-base font-semibold text-brand hover:underline"
            onClick={onToSignUp}
          >
            Sign up
          </button>
        </div>
      </ECard>
    </div>
    </>
    
  );
}
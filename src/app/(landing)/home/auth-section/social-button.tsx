import Image from "next/image";

export const SocialButtons = () => {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      <button
        aria-label="Google"
        className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
      >
        <Image src="/assets/images/ic-google.png" alt="Google" width={40} height={40} />
      </button>
      <button
        aria-label="Apple"
        className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
      >
        <Image src="/assets/images/ic-apple.png" alt="Apple"  width={40} height={40}/>
      </button>
    </div>
  );
}
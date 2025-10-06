import AuthSection from "./auth-section";
import { Info } from "./info";

export const MainContent = () => {

  return (
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 md:py-10">
        {/* 2 cột trên desktop, 1 cột trên mobile */}
        <section className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-start">
          {/* Illustration */}
          <div className="relative mb-4 md:mb-0">
            {/* Mobile: tỉ lệ 5/3; Desktop: card ảnh cao hơn */}
            <div className="relative aspect-[5/3] md:aspect-[4/3] w-full overflow-hidden rounded-none md:rounded-2xl border md:border-gray-200">
              <img
                src="/assets/images/ic-banner.png"
                alt="Learning illustration"
              />
            </div>
          </div>

          {/* Auth block */}
          <AuthSection/>
            {/* Info block */}
          <Info/>
        </section>

       
      </div>
  );
}
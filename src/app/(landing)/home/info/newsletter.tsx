import { ETextField } from "@/@shared/components/ui";

export const Newsletter = () => {
    return (
         <section className="mt-4 md:mt-0">
          <h3 className="mt-3 md:text-base font-semibold">Newsletter</h3>

          <p className="mt-2 my-2 text-sm md:text-base text-gray-600 md:max-w-3xl">
            Be the first to get the lastest from us
          </p>
          <ETextField />
        </section>
    );
}
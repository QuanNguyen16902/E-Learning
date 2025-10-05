import { About } from "./about";
import { Contact } from "./contact";
import { Navigation } from "./navigation";
import { Newsletter } from "./newsletter";
import { Policy } from "./policy";

export const Info = () => {     
    return (    
  <section className="mt-8 md:mt-12">
          <div className="flex items-center gap-2 text-gray-900">
            <svg width="18" height="18" viewBox="0 0 24 24" className="md:w-5 md:h-5">
              <path d="M4 21V5a1 1 0 0 1 1-1h5v17H4Zm10 0V8h5a1 1 0 0 1 1 1v12h-6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M8 9h2M8 13h2M16 12h3M16 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h2 className="type-h6 md:type-h5">Cientheon Vietnam</h2>
          </div>

            <About/>
            <Navigation/>
            <Policy/>
            <Contact />
            <Newsletter/>
        </section>
    );
};
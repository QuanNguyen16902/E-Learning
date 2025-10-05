import { EButton } from "@/@shared/components/ui";
import Image from "next/image";

export const Footer = () => {
  return (
    //    <div className="min-h-[200vh] p-8 space-y-20">
    //   </div>
    <footer className=" dark:bg-gray-900 px-4 ">
        <div className="flex flex-row mb-2">
            <a href="https://www.facebook.com" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <Image className="me-2" src={'/assets/images/ic-facebook.png'} alt="Icon FB" width={30} height={30}/>
            </a>
            <a href="https://www.twitter.com" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <Image className="me-2" src={'/assets/images/ic-twitter.png'} alt="Icon FB" width={30} height={30}/>
            </a>
            <a href="https://www.linkedin.com" className="flex items-center" target="_blank" rel="noopener noreferrer">
                <Image className="me-2" src={'/assets/images/ic-linkedln.png'} alt="Icon FB" width={30} height={30}/>
            </a>
        </div>
        <div className="container mx-auto text-sm text-gray-400 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
    </footer>
  );
}
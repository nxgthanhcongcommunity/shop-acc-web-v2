import { FOOTER_COLUMNS, SOCIAL_ITEMS } from "../../constants";
import Logo from "../logo";
import FooterColumn from "./footerColumn";
import SocialItem from "./socialItem";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((item) => (
              <FooterColumn {...item} key={item.title} />
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              DblStore™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex gap-x-2 mt-4 sm:justify-center sm:mt-0">
            {SOCIAL_ITEMS.map((item) => (
              <SocialItem {...item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

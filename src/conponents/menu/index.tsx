import TitleButton from "../button/titleButton";
import ICONS from "../icons";

interface IMenuProps {
  onClick: any;
}

const Menu = (props: IMenuProps) => {
  const { onClick } = props;

  return (
    <div onClick={onClick}>
      <div
        id="mega-menu"
        className="items-center justify-between hidden w-full md:flex md:flex-col md:w-auto md:order-1 cursor-pointer"
      >
        <TitleButton>
          <ICONS.MENU />{" "} Danh mục
        </TitleButton>
      </div>
    </div>
  );
};

export default Menu;

/*

<div
              id="mega-menu-dropdown"
              className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
            >
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul
                  className="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Pro Version
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Playground
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Support Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

*/

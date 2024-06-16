interface IMenuProps {
  onClick: any;
}

const Menu = (props: IMenuProps) => {
  const { onClick } = props;

  return (
    <div onClick={onClick}>
      <div
        id="mega-menu"
        className="items-center justify-between hidden w-full md:flex md:flex-col md:w-auto md:order-1"
      >
        <button
          id="mega-menu-dropdown-button"
          data-dropdown-toggle="mega-menu-dropdown"
          className="flex items-center justify-between gap-x-2 w-full py-2 px-3 font-medium text-gray-400 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 "
        >
          <svg
            className="w-4 h-4 "
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>{" "}
          <span className="text-gray-900">Danh mục</span>
        </button>
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

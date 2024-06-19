import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";
import { useOutsideClick } from "../../hooks";
import CategoriesMenu from "../categories-menu";
import Logo from "../logo";
import Menu from "../menu";
import Notification from "../notification";
import Search from "../search";
import UserHeader from "../user-header";

const Header = () => {
  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 fixed left-0 top-0 w-full z-40">
      <div
        className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 "
        ref={dropDownRef}
      >
        <div className="flex items-center gap-x-12">
          <Logo />
          <Menu onClick={handleClick} />
        </div>
        <Search />
        <div className="flex items-center gap-x-4">
          <Link
            to={ROUTER.ACCOUNT_RECHARGE}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-10 flex items-center"
          >
            Nạp thẻ
          </Link>

          <Notification />

          <UserHeader />
        </div>
      </div>
      <CategoriesMenu isShow={isShow} onMouseLeave={handleMouseLeave} />
    </nav>
  );
};

export default Header;

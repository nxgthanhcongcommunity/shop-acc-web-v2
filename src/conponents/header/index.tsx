import { Link } from "react-router-dom";
import { BUTTONS, ICONS, MobileMenu } from "..";
import { ROUTER } from "../../constants";
import { useOutsideClick } from "../../hooks";
import TitleButton from "../button/titleButton";
import CategoriesMenu from "../categories-menu";
import Logo from "../logo";
import Notification from "../notification";
import Search from "../search";
import UserHeader from "../user-header";

const Header = () => {
  const [
    isDropdownVisible,
    dropDownRef,
    handleDropdownClick,
    handleMouseLeave,
  ] = useOutsideClick<HTMLDivElement>();

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 fixed left-0 top-0 w-full z-40">
      <div
        className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
        ref={dropDownRef}
      >
        <div className="flex items-center gap-x-12">
          <Logo />
          {/* Menu trigger with onClick handler */}
          <div
            onClick={handleDropdownClick}
            id="mega-menu"
            className="items-center justify-between hidden w-full md:flex md:flex-col md:w-auto md:order-1 cursor-pointer"
          >
            <TitleButton>
              <ICONS.MENU /> Danh mục
            </TitleButton>
          </div>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <div className="flex items-center gap-x-4">
          <Link to={ROUTER.ACCOUNT_RECHARGE}>
            <BUTTONS.PRIMARY>Nạp thẻ</BUTTONS.PRIMARY>
          </Link>
          <div className="hidden md:block">
            <Notification />
          </div>
          <div className="hidden md:block">
            <UserHeader />
          </div>
          <div className="md:hidden block">
            <MobileMenu />
          </div>
        </div>
      </div>
      {/* CategoriesMenu component with visibility control and mouse leave handler */}
      <CategoriesMenu
        isShow={isDropdownVisible}
        onMouseLeave={handleMouseLeave}
      />
    </nav>
  );
};

export default Header;

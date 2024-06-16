import { useOutsideClick } from "../../hooks";
import UserDropdown from "./userDropdown";

const UserHeader = () => {
  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  return (
    <div className="flex gap-x-2 relative" ref={dropDownRef}>
      <div
        className="flex gap-x-2 relative cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <h4 className="text-sm font-medium">Ng Thanh Cong</h4>
          <p className="text-sm">
            Số dư: <span>30.000</span>
          </p>
        </div>
        <img
          className="w-10 h-10 "
          src="https://shoptienzombie.vn/assets/frontend/theme_5/image/nam/anhdaidien.svg"
          alt=""
        />
      </div>
      {isShow && (
        <div
          className="absolute z-20 top-[calc(100%+10px)] right-0 w-96"
          onMouseLeave={handleMouseLeave}
        >
          <UserDropdown />
        </div>
      )}
    </div>

    // <Link
    //   to="/login"
    //   className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
    // >
    //   <span>
    //     <svg
    //       className="w-4 h-4"
    //       fill="currentColor"
    //       xmlns="http://www.w3.org/2000/svg"
    //       viewBox="0 0 448 512"
    //     >
    //       <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
    //     </svg>
    //   </span>
    // </Link>
  );
};

export default UserHeader;

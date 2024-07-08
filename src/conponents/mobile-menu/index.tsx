import { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, ICONS } from "..";
import { ROUTER } from "../../constants";
import Search from "../search";
import Account from "./account";

const MobileMenu = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div onClick={() => setIsShow((prev) => !prev)}>
        <IconButton>
          <ICONS.MENU />
        </IconButton>
      </div>
      <div
        className={` bg-white rounded-lg shadow dark:bg-gray-700 p-4 border fixed top-0 left-0 w-full h-full overflow-y-scroll
        ${isShow ? ` block` : ` hidden`} 
        `}
      >
        <div
          className="absolute right-4 top-4"
          onClick={() => setIsShow((prev) => !prev)}
        >
          <IconButton>
            <ICONS.CLOSE />
          </IconButton>
        </div>
        <div className="mb-8 mt-6">
          <h2 className="font-semibold text-md mb-4">Danh mục</h2>
          <div className="flex flex-col gap-y-4">
            <Link to={ROUTER.ACCOUNT_BALANCE}>
              <div className="flex gap-x-4 items-center justify-between">
                <IconButton>
                  <ICONS.CHART />
                </IconButton>
                <p className="grow text-sm">Nạp thẻ</p>
                <ICONS.ARROW_RIGHT />
              </div>
            </Link>
            <Link to={ROUTER.ACCOUNT_INVOICE}>
              <div className="flex gap-x-4 items-center justify-between">
                <IconButton>
                  <ICONS.ACCOUNT_CIRCLE />
                </IconButton>
                <p className="grow text-sm">Tin tức</p>
                <ICONS.ARROW_RIGHT />
              </div>
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-semibold text-md mb-4">Tìm kiếm</h2>
          <Search />
        </div>
        <div className="mb-8">
          <h2 className="font-semibold text-md mb-4">Tài khoản</h2>
          <Account />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

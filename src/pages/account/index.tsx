import { Outlet } from "react-router-dom";
import { Breadcrumb, UserDropdownContent } from "../../conponents";

const Account = () => {
  return (
    <>
      <div className="grow max-w-screen-xl mx-auto w-full">
        <Breadcrumb />
        <div className="grid md:grid-cols-[4fr_8fr] overflow-x-scroll">
          <div className="hidden md:block">
            <UserDropdownContent unLimitHeight />
          </div>
          <div className="p-4 md:p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;

import { Outlet } from "react-router-dom";
import { Breadcrumb, UserDropdownContent } from "../../conponents";

const Account = () => {
  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      <div className="grid grid-cols-[4fr_8fr]">
        <UserDropdownContent unLimitHeight />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Account;

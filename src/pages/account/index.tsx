import { Outlet } from "react-router-dom";
import { UserDropdownContent } from "../../conponents";
import PageContainer from "../pageContainer";

const Account = () => {
  return (
    <PageContainer isBreadcrumb>
      <div className="grid md:grid-cols-[4fr_8fr] overflow-x-scroll">
        <div className="hidden md:block">
          <UserDropdownContent unLimitHeight />
        </div>
        <div className="p-4 md:p-5">
          <Outlet />
        </div>
      </div>
    </PageContainer>
  );
};

export default Account;

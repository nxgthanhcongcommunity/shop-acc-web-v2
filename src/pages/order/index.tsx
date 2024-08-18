import { Outlet } from "react-router-dom";
import PageContainer from "../pageContainer";

const Order = () => {
  return (
    <PageContainer isBreadcrumb>
      <Outlet />
    </PageContainer>
  );
};

export default Order;

import { Outlet } from "react-router-dom";
import { UserDropdownContent } from "../../conponents";
import PageContainer from "../pageContainer";
import { Col, Row } from "antd";

const Account = () => {
  return (
    <PageContainer isBreadcrumb>
      <Row>
        <Col span={6}>
          <div className="hidden md:block">
            <UserDropdownContent unLimitHeight />
          </div>
        </Col>
        <Col span={18}>
          <div className="px-4 md:px-5">
            <Outlet />
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Account;

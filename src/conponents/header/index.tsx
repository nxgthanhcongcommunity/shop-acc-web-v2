import { Button, Dropdown, Image, Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { MobileMenu } from "..";
import { ROUTER } from "../../constants";
import Notification from "../notification";
import UserHeader from "../user-header";
import styled from "styled-components";

import {
  CreditCardOutlined,
  MenuOutlined,
  PicLeftOutlined,
} from "@ant-design/icons";
import Search, { SearchProps } from "antd/es/input/Search";

const StyledMenu = styled(Menu)`
  .ant-menu-submenu-title::after {
    border-bottom: none !important;
  }
`;

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "Nạp thẻ",
      icon: <CreditCardOutlined />,
      label: <Link to={ROUTER.ACCOUNT_RECHARGE}>Nạp thẻ</Link>,
    },
    {
      key: "Tin tức",
      icon: <PicLeftOutlined />,
      label: <Link to={ROUTER.NEWS}>Tin tức</Link>,
    },
  ];

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 fixed left-0 top-0 w-full z-40 h-20">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-x-12">
          <Link
            to={ROUTER.ROOT}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              preview={false}
              height={20}
              src="https://res.cloudinary.com/dntsyzdh3/image/upload/v1723905175/shop-acc/logoLyHuy_dckaud.png"
            />
          </Link>
          <Dropdown menu={{ items }}>
            <span>Danh mục</span>
          </Dropdown>
        </div>
        <div className="hidden md:block">
          <Search
            size="large"
            placeholder="Nhập để tìm kiếm"
            onSearch={onSearch}
            enterButton
            style={{
              height: "40px",
              width: "400px",
            }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Link to={ROUTER.ACCOUNT_RECHARGE}>
            <Button type="primary" size="large">
              Nạp thẻ
            </Button>
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
    </nav>
  );
};

export default Header;

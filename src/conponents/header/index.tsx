import { Button, Dropdown, Flex, MenuProps, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { ICONS, MobileMenu } from "..";
import { ROUTER } from "../../constants";
import Logo from "../logo";
import Notification from "../notification";
import UserHeader from "../user-header";

import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Search, { SearchProps } from "antd/es/input/Search";

const Header = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link to={ROUTER.ACCOUNT_RECHARGE}>
          <Flex
            align="baseline"
            style={{
              width: "150px",
            }}
          >
            <Space>
              <ICONS.RECHARGE />
              Nạp thẻ
            </Space>
          </Flex>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to={ROUTER.NEWS}>
          <Flex
            align="baseline"
            style={{
              width: "150px",
            }}
          >
            <Space>
              <ICONS.NEWSPAPER />
              Tin tức
            </Space>
          </Flex>
        </Link>
      ),
    },
  ];

  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 fixed left-0 top-0 w-full z-40">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <div className="flex items-center gap-x-12">
          <Logo />
          <Dropdown
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: [""],
            }}
          >
            <Button icon={<MenuOutlined />}>Menu</Button>
          </Dropdown>
        </div>
        <div className="hidden md:block">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{
              width: "500px",
            }}
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Link to={ROUTER.ACCOUNT_RECHARGE}>
            <Button type="primary">Nạp thẻ</Button>
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

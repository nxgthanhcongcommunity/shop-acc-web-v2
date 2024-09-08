import { Button, Flex, Image } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "..";
import { ROUTER } from "../../constants";
import Notification from "../notification";
import UserHeader from "../user-header";

import { CreditCardOutlined, PicLeftOutlined } from "@ant-design/icons";

const Header = () => {
  const location = useLocation();

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
          {/* <Dropdown menu={{ items }}>
            <span>Danh mục</span>
          </Dropdown> */}
          <div>
            <Flex>
              {/* {items.map((s) => (
                <Button
                  key={s.key}
                  icon={s.icon}
                  type="text"
                  iconPosition={`start`}
                >
                  {s.label}
                </Button>
              ))} */}
              <Link to={ROUTER.ACCOUNT_RECHARGE}>
                <Button
                  ghost
                  icon={<CreditCardOutlined />}
                  type={
                    location.pathname === ROUTER.ACCOUNT_RECHARGE
                      ? "primary"
                      : "text"
                  }
                  iconPosition={`start`}
                >
                  Nạp thẻ
                </Button>
              </Link>
              {/* <Link to={ROUTER.NEWS}>
                <Button
                  ghost
                  icon={<PicLeftOutlined />}
                  type={location.pathname === ROUTER.NEWS ? "primary" : "text"}
                  iconPosition={`start`}
                >
                  Tin tức
                </Button>
              </Link> */}
            </Flex>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
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

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Flex, MenuProps, Typography } from "antd";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";
import { useSelector } from "../../stores/hooks";
import IconButton from "../button/iconButton";
import ICONS from "../icons";
import UserDropdownContent from "./userDropdownContent";

const UserHeader = () => {
  const identity = useSelector((states) => states.user);

  if (!identity) {
    return (
      <Link to={ROUTER.LOGIN}>
        <IconButton>
          <ICONS.ACCOUNT />
        </IconButton>
      </Link>
    );
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <UserDropdownContent />,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
        {identity && (
          <>
            <Flex vertical>
              <Typography.Text>{`${identity.familyName} ${identity.givenName}`}</Typography.Text>
              <Typography.Text>
                Số dư: <span>{identity.amount}</span>
              </Typography.Text>
            </Flex>
            <Avatar shape="square" size="large" icon={<UserOutlined />} />
          </>
        )}
      </Flex>
    </Dropdown>
  );
};

export default UserHeader;

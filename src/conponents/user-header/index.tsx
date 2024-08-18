import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks";
import UserDropdown from "./userDropdown";
import { useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";
import ICONS from "../icons";
import { IAccount } from "../../stores/features/authSlice";
import IconButton from "../button/iconButton";
import { ROUTER } from "../../constants";
import { Avatar, Dropdown, Flex, MenuProps, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import UserDropdownContent from "./userDropdownContent";

const UserHeader = () => {
  const user = useSelector((state: RootState) => state.user);
  if (user.isLogged) {
    return <UserHeaderLogged user={user} />;
  }

  return (
    <Link to={ROUTER.LOGIN}>
      <IconButton>
        <ICONS.ACCOUNT />
      </IconButton>
    </Link>
  );
};

const UserHeaderLogged = (props: any) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <UserDropdownContent />,
    },
  ];

  const { user } = props;
  const { entity }: { entity: IAccount } = user;

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Flex gap={8} align="center" style={{ cursor: "pointer" }}>
        <Flex vertical>
          <Typography.Text>{entity.givenName}</Typography.Text>
          <Typography.Text>
            Số dư: <span>30.000</span>
          </Typography.Text>
        </Flex>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Flex>
    </Dropdown>
  );
};

export default UserHeader;

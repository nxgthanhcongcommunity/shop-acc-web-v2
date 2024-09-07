import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, Typography } from "antd";
import { SORT_ITEMS } from "../../constants";

const ShopHeader = () => {
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

  const items: MenuProps["items"] = SORT_ITEMS.map(
    ({ title, column, direction }) => ({
      label: title,
      key: `${column}-${direction}`,
    })
  );

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="flex justify-between">
      <Typography.Title level={5}>33 sản phẩm</Typography.Title>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            Sắp xếp theo
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default ShopHeader;

import { Select, Typography } from "antd";
import { SORT_ITEMS } from "../../constants";

const ShopHeader = (props: any) => {
  const { selectedCondition, setSelectedCondition } = props;

  const items = SORT_ITEMS.map(({ title, column, direction }) => ({
    label: title,
    value: `${column}-${direction}`,
  }));

  const handleChange = (value: string) => {
    setSelectedCondition(value);
  };

  return (
    <div className="flex justify-between">
      <Typography.Title level={5}>33 sản phẩm</Typography.Title>
      <Select
        defaultValue={selectedCondition}
        style={{ width: 200 }}
        onChange={handleChange}
        options={items}
      />
    </div>
  );
};

export default ShopHeader;

import { Divider } from "antd";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SectionTitle, ShopHeader } from "../conponents";
import CardItem from "../conponents/section/cardItem";
import { ROUTER, SORT_ITEMS } from "../constants";
import { useSelector } from "../stores/hooks";
import { useGetProductsByKeysQuery } from "../stores/services/master-data-api";
import PageContainer from "./pageContainer";

const Shop = () => {
  const { searchText } = useSelector((states) => states.app);

  const [searchParams] = useSearchParams();

  const [selectedCondition, setSelectedCondition] = useState(
    `${SORT_ITEMS[0].column}-${SORT_ITEMS[0].direction}`
  );

  const { data } = useGetProductsByKeysQuery({
    categoryCode: searchParams.get("categoryCode"),
    column: selectedCondition.split("-")[0],
    direction: selectedCondition.split("-")[1],
  });

  console.log(data);

  if (data == null) {
    return null;
  }

  return (
    <PageContainer isBreadcrumb>
      <SectionTitle
        title={searchParams.get("categoryCode") || searchText}
        tagTitle="VIP"
      />
      <Divider />
      <ShopHeader
        selectedCondition={selectedCondition}
        setSelectedCondition={setSelectedCondition}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.records.map((product: any) => {
          return (
            <CardItem
              isActived={product.currentQuantity > 0}
              key={product.code}
              href={`${ROUTER.PRODUCT}?productCode=${product.code}`}
              imgId={product.mainFileCLDId}
              title={product.name}
              listParagraph={[
                <p key={"Giá"} className="text-sm font-medium text-gray-700">
                  Giá: {product.price}
                </p>,
                <p
                  key={"Số lượng"}
                  className="text-sm font-medium text-gray-700"
                >
                  Số lượng: {product.currentQuantity}
                </p>,
                <p
                  key={"Gem/Chono"}
                  className="text-sm font-medium text-gray-700"
                >
                  Gem/Chono: {product.gemChono}
                </p>,
              ]}
            />
          );
        })}
      </div>
      <div className="h-12"></div>
    </PageContainer>
  );
};

export default Shop;

import { useSearchParams } from "react-router-dom";
import { SectionTitle, ShopHeader } from "../conponents";
import Tag from "../conponents/tag";
import { ROUTER } from "../constants";
import { useGetProductsByKeysQuery } from "../stores/services/master-data-api";
import PageContainer from "./pageContainer";
import { useSelector } from "../stores/hooks";
import CardItem from "../conponents/section/cardItem";
import { Divider } from "antd";

const Shop = () => {
  const { searchText } = useSelector((states) => states.app);

  const [searchParams] = useSearchParams();

  const { isError, isLoading, data } = useGetProductsByKeysQuery({
    categoryCode: searchParams.get("categoryCode"),
    searchText,
  });

  if (
    isLoading ||
    isError ||
    data.records == null ||
    data.records.length === 0
  ) {
    return null;
  }

  return (
    <PageContainer isBreadcrumb>
      <div className="my-4 flex justify-start gap-x-3">
        {searchText.length > 0 ? (
          <div className="flex items-baseline">
            Tìm kiếm: <SectionTitle title={searchText} tagTitle="VIP" />
          </div>
        ) : (
          <SectionTitle
            title={searchParams.get("categoryCode") || searchText}
            tagTitle="VIP"
          />
        )}
      </div>
      <Divider />
      <ShopHeader />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-1">
        {data.records.map((product: any) => {
          return (
            <CardItem
              isActived={product.quantity.currentQuantity > 0}
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
                  Số lượng: {product.quantity.currentQuantity}
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
      {/* <Section banner={undefined} /> */}
      <div className="h-12"></div>
    </PageContainer>
  );
};

export default Shop;

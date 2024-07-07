import { useSearchParams } from "react-router-dom";
import { Breadcrumb, CardItem, SectionTitle, ShopHeader } from "../conponents";
import { ROUTER } from "../constants";
import { useGetCategoryByCodeQuery } from "../stores/services/master-data-api";
import Tag from "../conponents/tag";

const Shop = () => {
  const [searchParams] = useSearchParams();

  const {
    isError,
    isLoading,
    data: record,
  } = useGetCategoryByCodeQuery("" + searchParams.get("categoryCode"));
  if (isError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  if (record == null || record.length === 0) {
    return null;
  }

  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      <div className="mt-4 md:mt-4 mb-2 flex justify-start gap-x-3">
        <SectionTitle title={record.name} tagTitle="VIP" />-
        <Tag tagTitle="100 sản phẩm" />
      </div>
      <ShopHeader />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {record.products.map((product: any) => {
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
    </div>
  );
};

export default Shop;

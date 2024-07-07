import { useSearchParams } from "react-router-dom";
import { Breadcrumb, CardItem, SectionTitle, ShopHeader } from "../conponents";
import { ROUTER } from "../constants";
import { useGetCategoryByCodeQuery } from "../stores/services/master-data-api";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      <div className="mt-12">
        <SectionTitle title={record.name} tagTitle="VIP" />
      </div>
      <div className="py-2">
        <ShopHeader total={record.products.length} />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {record.products.map((product: any) => {
          return (
            <CardItem
              // key={record.code}
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

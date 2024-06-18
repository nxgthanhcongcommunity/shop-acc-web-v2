import { useLocation, useSearchParams } from "react-router-dom";
import {
  Breadcrumb,
  SectionTitle,
  ShopHeader,
  CardItem,
  Section,
} from "../conponents";
import { useEffect, useState } from "react";
import { useGetCategoryByCodeQuery } from "../stores/services/master-data-api";
import { ROUTER } from "../constants";

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
        {record.products.map((product: any) => (
          <CardItem
            key={product.code}
            href={`${ROUTER.PRODUCT}?productCode=${product.code}`}
            imgId={product.mainFileCLDId}
            title={product.name}
            listParagraph={[
              <p className="text-sm font-medium text-gray-700">
                Giá: {product.price}
              </p>,
              <p className="text-sm font-medium text-gray-700">
                Số lượng: {product.quantity.currentQuantity}
              </p>,
              <p className="text-sm font-medium text-gray-700">
                Gem/Chono: {product.gemChono}
              </p>,
            ]}
          />
        ))}
      </div>
      {/* <Section banner={undefined} /> */}
      <div className="h-12"></div>
    </div>
  );
};

export default Shop;

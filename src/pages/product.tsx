import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  Breadcrumb,
  ProductGallery,
  Section,
  SectionTitle,
} from "../conponents";
import { useGetProductByCodeQuery } from "../stores/services/master-data-api";
import ReviewModal from "../conponents/review-modal";
import { useState } from "react";
import { useSelector } from "../stores/hooks";
import { RootState } from "../stores";
import { ROUTER } from "../constants";

interface IProductInfoItemProps {
  title: string;
  value: string | number;
}
export const ProductInfoItem = (props: IProductInfoItemProps) => {
  const { title, value } = props;

  return (
    <div className="flex gap-x-4 items-center justify-between pl-3">
      <p className="grow font-medium">{title}:</p>
      <span className="text-slate-600">{value}</span>
    </div>
  );
};

const Product = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const location = useLocation();

  const [searchParams] = useSearchParams();
  const [isShowModal, setIsShowModal] = useState(false);

  const {
    isError,
    isLoading,
    data: record,
  } = useGetProductByCodeQuery("" + searchParams.get("productCode"));
  if (isError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  if (record == null || record.length === 0) {
    return null;
  }

  const { product, relatedProducts } = record;

  const handleBuyClick = () => {
    if (auth.isLogged === false) {
      navigate(
        `${ROUTER.LOGIN}?redirect-from=${location.pathname}${location.search}`
      );
    }
    setIsShowModal(true);
  };

  let childCdlIds = [];

  try {
    childCdlIds = JSON.parse(product.childsFilesCLDId);
  } catch (ex) {
    console.error(ex);
  }

  const cdlIds = [product.mainFileCLDId, ...childCdlIds];

  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      <div className="my-12 grid grid-cols-[60%_40%] gap-x-4">
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ProductGallery cdlIds={cdlIds} />
        </div>
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <SectionTitle title={product.name} tagTitle="VIP" />
          <p className="text-md font-bold">Mã số: #{product.code}</p>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border mt-8">
            <h2 className="font-semibold text-md mb-4">Thông tin tài khoản</h2>
            <div className="flex flex-col gap-y-4">
              <ProductInfoItem
                title={"Loại tài khoản"}
                value={product.category.name}
              />
              <ProductInfoItem title={"Server"} value={product.server} />
              <ProductInfoItem title={"Đăng nhập"} value={product.loginType} />
              <ProductInfoItem
                title={"Hệ điều hành"}
                value={product.operatingSystem}
              />
              <ProductInfoItem title={"Gem/Chono"} value={product.gemChono} />
              <ProductInfoItem title={"Mô tả"} value={product.descriptions} />
            </div>
          </div>

          <div className="mt-4 p-6 bg-gray-100  rounded-lg shadow dark:bg-gray-800 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold">{product.price} vnđ</span>
            <span className="text-md ">rẻ vô đối</span>
          </div>
          <div className="mt-4">
            <button
              onClick={handleBuyClick}
              type="button"
              className="block w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      {/* <Section /> */}
      {/* {isShowModal && <ReviewModal setIsShowModal={setIsShowModal} />} */}
      <ReviewModal
        product={product}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </div>
  );
};

export default Product;

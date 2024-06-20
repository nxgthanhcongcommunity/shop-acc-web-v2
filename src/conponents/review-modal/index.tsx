import { useNavigate } from "react-router-dom";
import invoiceApi from "../../api/invoiceApi";
import { ProductInfoItem } from "../../pages/product";
import { RootState } from "../../stores";
import { useSelector } from "../../stores/hooks";
import ICONS from "../icons";

interface IReviewModalProps {
  product: any;
  isShowModal: boolean;
  setIsShowModal: any;
}

const ReviewModal = (props: IReviewModalProps) => {
  const { product, isShowModal, setIsShowModal } = props;
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const invoice = {
      totalAmount: product.price,
      accountCode: auth.entity?.code,
    };

    const invoiceDetails = [
      {
        productId: product.id,
        quantity: 1,
        unitPrice: product.price,
        totalPrice: product.price * 1,
      },
    ];

    const { succeed, data } = await invoiceApi.CreateInvoice({
      invoice,
      invoiceDetails,
    });

    if (succeed && data) {
      navigate(`/order/received?code=${data.code}`);
    } else {
      alert("server error, return");
    }
  };

  return isShowModal ? (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex={-1}
      aria-hidden="true"
      className={
        "flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgba(0,0,0,0.4)]"
        // + (isShowModal ? " flex" : " hidden")
      }
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Xác nhận thông tin đơn hàng
            </h3>
            <button
              onClick={() => setIsShowModal(false)}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
            >
              <ICONS.CLOSE />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
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
          {/* Modal footer */}
          <div className="flex items-center justify-end  p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-x-4">
            <button
              onClick={() => setIsShowModal(false)}
              data-modal-hide="static-modal"
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Hủy bỏ
            </button>
            <button
              onClick={handlePayment}
              data-modal-hide="static-modal"
              type="button"
              className="w-48 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ReviewModal;

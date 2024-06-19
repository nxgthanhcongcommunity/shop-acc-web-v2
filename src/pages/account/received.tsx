import { useEffect, useState } from "react";
import { vnpayTransactionApi } from "../../api";
import { paramsToObject } from "../../utils";

interface IParams {
  vnp_Amount: string | null;
  vnp_BankCode: string | null;
  vnp_OrderInfo: string | null;
  vnp_ResponseCode: string | null;
  vnp_TransactionStatus: string | null;
  vnp_TransactionNo: string | null;
  vnp_PayDate: string | null;
  vnp_TxnRef: string | null;
}

const Received = () => {

  const [params, setParams] = useState<IParams>();
  const [isSucceed, setIsSucceed] = useState(false);

  useEffect(() => {
    (async () => {
      const paramsObj = paramsToObject(window.location.search);
      const { succeed, data } =
        await vnpayTransactionApi.GetReturnResult(paramsObj);

      if (!succeed) return;
      setIsSucceed(data.code == "00");
      setParams(data.vnp_Params);
    })();
  }, []);

  const handleFakeIPN = () => {
    console.log(
      "http://localhost:4003/api/v1/vnpay-transaction/ipn" +
      window.location.search,
    );
  };

  if (params == null) return <p>loading...</p>;
  if (!isSucceed) return <>có lỗi xải ra....</>;


  return (

    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
      <h2 className="mb-6 text-xl font-medium text-hightLight">
        Bạn đã nạp thành công:{" "}
        <span className="text-3like">params.vnp_Amount vnđ</span>
      </h2>
      <div className="flex items-stretch gap-x-10 bg-gray-100 p-8 rounded-lg">
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Mã giao dịch: </p>
          <div className="h-3"></div>
          <p>params.vnp_TxnRef</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngày giao dịch: </p>
          <div className="h-3"></div>
          <p>params.vnp_PayDate</p>
        </div>
        <div className="boder-white w-[1px] border border-l border-dashed"></div>
        <div className="text-sm font-medium">
          <p className="uppercase text-hightLight">Ngân hàng: </p>
          <div className="h-3"></div>
          <p>params.vnp_BankCode</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="mx-auto w-1/2">
          <button
            onClick={handleFakeIPN}
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            {" "}
            Tại môi trường test, vui lòng click thêm nút này
          </button>
        </div>
      </div>
    </div>
  );
};

export default Received;

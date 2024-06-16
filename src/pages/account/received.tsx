const Received = () => {
  return (
    <div className="p-4 md:p-5">
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
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              {" "}
              Tại môi trường test, vui lòng click thêm nút này
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Received;

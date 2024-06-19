const Info = () => (
  <div className="grow max-w-screen-xl mx-auto w-full">
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
      <div className="flex gap-x-4">
        <a
          href="/"
          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
        >
          <img
            className="w-10 h-10 "
            src="https://shoptienzombie.vn/assets/frontend/theme_5/image/nam/anhdaidien.svg"
            alt=""
          />
        </a>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-semibold text-md">Ng Thanh Cong</h2>
          <p className="font-medium text-xs">
            Số dư: <span className="text-blue-800">30 điểm</span>
          </p>
          <p className="font-medium text-xs">
            Mã: <span className="text-blue-800">ACC-ADSD</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Info;

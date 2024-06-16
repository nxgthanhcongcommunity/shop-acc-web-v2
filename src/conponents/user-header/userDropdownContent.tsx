import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";
import ICONS from "../icons";

interface IUserDropdownContentProps {
  unLimitHeight?: boolean;
}

const UserDropdownContent = (props: IUserDropdownContentProps) => {
  const { unLimitHeight } = props;

  return (
    <div
      className={`p-4 md:p-5 flex flex-col gap-y-4 ${unLimitHeight ? "" : "h-96"}`}
    >
      <div
        className={`grid gap-y-4 ${unLimitHeight ? "" : "overflow-y-scroll"} `}
      >
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
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <div className="flex gap-x-4 items-center justify-between">
            <a
              href="/"
              className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
            >
              <span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
                </svg>
              </span>
            </a>
            <p className="grow">Thông tin tài khoản</p>
            <span className="text-slate-600">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <h2 className="font-semibold text-md mb-4">Giao dịch</h2>
          <div className="flex items-center justify-between">
            <div className="flex justify-center flex-col items-center">
              <Link to={ROUTER.RECHARGE}>
                <span className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center">
                  <span>
                    <ICONS.RECHARGE />
                  </span>
                </span>
                <span className="text-sm mt-1">Nạp tiền</span>
              </Link>
            </div>

            <div className="flex justify-center flex-col items-center">
              <a
                href="/"
                className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
              >
                <span>
                  <ICONS.RECHARGE />
                </span>
              </a>
              <span className="text-sm mt-1">Rút vật phẩm</span>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <h2 className="font-semibold text-md mb-4">Lịch sử</h2>

          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center justify-between">
              <a
                href="/"
                className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
              >
                <span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                  </svg>
                </span>
              </a>
              <p className="grow">Biến động số dư</p>
              <span className="text-slate-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
            </div>
            <div className="flex gap-x-4 items-center justify-between">
              <a
                href="/"
                className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
              >
                <span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                  </svg>
                </span>
              </a>
              <p className="grow">Biến động số dư</p>
              <span className="text-slate-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
            </div>
            <div className="flex gap-x-4 items-center justify-between">
              <a
                href="/"
                className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
              >
                <span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z" />
                  </svg>
                </span>
              </a>
              <p className="grow">Biến động số dư</p>
              <span className="text-slate-600">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <div className="flex gap-x-4 items-center justify-between">
            <a
              href="/"
              className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
            >
              <span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>
              </span>
            </a>
            <p className="grow">Đăng xuất</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownContent;

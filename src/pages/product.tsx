import {
  Breadcrumb,
  ProductSlider,
  Section,
  SectionTitle,
} from "../conponents";

const Product = () => {
  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      <div className="my-12 grid grid-cols-[60%_40%] gap-x-4">
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ProductSlider />
        </div>
        <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <SectionTitle title="asdasd" tagTitle="VIP" />
          <p className="text-md font-bold">Mã số: #RY1278181</p>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border mt-2">
            <h2 className="font-semibold text-md mb-4">Thông tin acc</h2>
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

          <div className="mt-4 p-6 bg-gray-100  rounded-lg shadow dark:bg-gray-800 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold">300.000 vnđ</span>
            <span className="text-md ">rẻ vô đối</span>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="block w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default Product;

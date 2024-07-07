import Tag from "../tag";

const ShopHeader = () => {
  return (
    <div className="flex gap-x-4 items-baseline justify-end">
      <ul className="flex gap-x-1 items-center ">
        <li>
          <button
            type="button"
            className="py-1 px-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Ngẫu nhiên
          </button>
        </li>
        <li>
          <button
            type="button"
            className="py-1 px-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Mới nhất
          </button>
        </li>
        <li>
          <button
            type="button"
            className="py-1 px-2 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cũ nhất
          </button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Từ thấp đến cao
          </button>
        </li>
        <li>
          <button
            type="button"
            className="p-1 mb-2 text-sm  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Từ cao đến thấp
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShopHeader;

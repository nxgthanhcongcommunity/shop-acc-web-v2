const ShopHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="text-md font-semibold">
        <span className="text-blue-700">19</span> sản phẩm
      </h4>
      <div className="flex gap-x-4 items-baseline">
        <p className="text-md font-semibold">Sắp xếp theo:</p>
        <ul className="flex gap-x-1 items-center">
          {[1, 2, 3, 4].map(() => (
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Alternative
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopHeader;

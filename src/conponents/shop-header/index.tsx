import { useState } from "react";
import { SORT_ITEMS } from "../../constants";

const ShopHeader = () => {
  const [activedIndex, setActivedIndex] = useState(0);

  return (
    <div className="flex gap-x-4 items-baseline justify-end">
      <ul className="flex gap-x-1 items-center ">
        {SORT_ITEMS.map((record, index) => (
          <li key={record.title} onClick={() => setActivedIndex(index)}>
            <button
              type="button"
              className={
                `
                py-2 px-3 mb-2 text-xs  text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700` +
                (index === activedIndex &&
                  " !bg-gray-100 !text-blue-700 !dark:text-white !dark:bg-gray-700")
              }
            >
              {record.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopHeader;

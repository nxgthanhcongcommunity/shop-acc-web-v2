import { Link } from "react-router-dom";

const CardItem = () => {
  return (
    <Link
      to="/shop"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="rounded-md overflow-hidden mb-4">
        <img
          src="https://cdn3.upanh.info/upload/server-sw3/images/gio-vang-dot-kich.gif"
          alt=""
        />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Link>
  );
};

export default CardItem;

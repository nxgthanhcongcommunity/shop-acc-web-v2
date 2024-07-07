import ICONS from "../icons";

const Search = () => {
  return (
    <form className="w-80 mx-auto block">
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="outline-none block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-1 bottom-1 top-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
        >
          <ICONS.MAGNIFYING_GLASS />
        </button>
      </div>
    </form>
  );
};

export default Search;

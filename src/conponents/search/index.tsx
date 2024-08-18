import { useState } from "react";
import BUTTONS from "../button";
import ICONS from "../icons";
import { useDispatch } from "../../stores/hooks";
import { setAppSearchText } from "../../stores/features/appSlice";

const Search = () => {
  /* states */
  const [searchText, setSearchText] = useState("");

  /* side hooks */
  const dispatch = useDispatch();

  /* handlers */
  const handleSearchSumbit = () => {
    dispatch(setAppSearchText(searchText));
  };

  return (
    <div className="w-80 mx-auto relative">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        id="default-search"
        className="outline-none block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />

      <div className="absolute end-1 bottom-1 top-1">
        <BUTTONS.PRIMARY
          style={{
            height: "100%",
            width: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleSearchSumbit}
        >
          <ICONS.MAGNIFYING_GLASS />
        </BUTTONS.PRIMARY>
      </div>
    </div>
  );
};

export default Search;

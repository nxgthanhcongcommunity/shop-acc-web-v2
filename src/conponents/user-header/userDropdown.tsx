import ICONS from "../icons";
import UserDropdownContent from "./userDropdownContent";

const UserDropdown = () => {
  return (
    <div className="relative  w-full max-w-md max-h-full">
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Tài khoản
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crypto-modal"
          >
            <ICONS.CLOSE />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <UserDropdownContent />
      </div>
    </div>
  );
};

export default UserDropdown;

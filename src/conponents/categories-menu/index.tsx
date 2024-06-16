import ICONS from "../icons";

interface ICategoriesMenuProps {
  isShow: boolean;
  onMouseLeave: any;
}

const CategoriesMenu = (props: ICategoriesMenuProps) => {
  const { isShow, onMouseLeave } = props;

  return (
    <div
      className={`overflow-hidden ease-in-out duration-1000 ${isShow ? "max-h-screen" : "max-h-0"}`}
      onMouseLeave={onMouseLeave}
    >
      <ul className="flex justify-between items-center max-w-screen-lg mx-auto py-2 ">
        <li>
          <a
            href="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="text-slate-600">
              <ICONS.RECHARGE />
            </span>
            <span className="ms-3 font-medium">Nạp thẻ</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="text-slate-600">
              <ICONS.GAME />
            </span>
            <span className="ms-3 font-medium">Acc reroll</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="text-slate-600">
              <ICONS.GAME />
            </span>
            <span className="ms-3 font-medium">Acc trên 50k</span>
          </a>
        </li>
        <li>
          <a
            href="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <span className="text-slate-600">
              <ICONS.NEWSPAPER />
            </span>
            <span className="ms-3 font-medium">Tin tức</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesMenu;

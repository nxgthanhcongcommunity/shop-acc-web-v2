import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks";
import UserDropdown from "./userDropdown";
import { useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";
import ICONS from "../icons";
import { IAccount } from "../../stores/features/authSlice";

const UserHeader = () => {
  const auth = useSelector((state: RootState) => state.auth);
  if (auth.isLogged) {
    return <UserHeaderLogged auth={auth} />;
  }

  return <UserHeaderUnLogged />;
};

const UserHeaderLogged = (props: any) => {
  const { auth } = props;
  const { entity }: { entity: IAccount } = auth;

  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  return (
    <div className="flex gap-x-2 relative" ref={dropDownRef}>
      <div
        className="flex gap-x-2 relative cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <h4 className="text-sm font-medium">{entity.givenName}</h4>
          <p className="text-sm">
            Số dư: <span>30.000</span>
          </p>
        </div>
        <img className="w-10 h-10 rounded-full" src={entity.photo} alt="" />
      </div>
      {isShow && (
        <div className="absolute z-20 top-[calc(100%+10px)] right-0 w-96">
          <UserDropdown />
        </div>
      )}
    </div>
  );
};

const UserHeaderUnLogged = () => {
  return (
    <Link
      to="/login"
      className="text-slate-600 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 h-10 w-10 flex items-center justify-center"
    >
      <span>
        <ICONS.ACCOUNT />
      </span>
    </Link>
  );
};

export default UserHeader;

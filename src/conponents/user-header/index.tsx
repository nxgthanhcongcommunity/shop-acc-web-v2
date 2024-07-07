import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks";
import UserDropdown from "./userDropdown";
import { useSelector } from "../../stores/hooks";
import { RootState } from "../../stores";
import ICONS from "../icons";
import { IAccount } from "../../stores/features/authSlice";
import IconButton from "../button/iconButton";
import { ROUTER } from "../../constants";

const UserHeader = () => {
  const user = useSelector((state: RootState) => state.user);
  if (user.isLogged) {
    return <UserHeaderLogged user={user} />;
  }

  return (
    <Link to={ROUTER.LOGIN}>
      <IconButton>
        <ICONS.ACCOUNT />
      </IconButton>
    </Link>
  );
};

const UserHeaderLogged = (props: any) => {
  const { user } = props;
  const { entity }: { entity: IAccount } = user;

  const [isShow, dropDownRef, handleClick, handleMouseLeave] =
    useOutsideClick<HTMLDivElement>();

  return (
    <div className="flex gap-x-2 relative" ref={dropDownRef}>
      <div
        className="flex gap-x-2 relative cursor-pointer"
        onClick={handleClick}
      >
        <div className="md:block hidden">
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

export default UserHeader;

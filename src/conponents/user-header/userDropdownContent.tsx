import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "..";
import { ROUTER } from "../../constants";
import { removeUserInfo } from "../../stores/features/userSlice";
import { useDispatch } from "../../stores/hooks";
import ICONS from "../icons";

interface IUserDropdownContentProps {
  unLimitHeight?: boolean;
}

const UserDropdownContent = (props: IUserDropdownContentProps) => {
  const { unLimitHeight } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUserInfo());
    navigate(ROUTER.ROOT);
  };

  return (
    <div
      className={`p-4 md:p-5 flex flex-col gap-y-4 ${unLimitHeight ? "" : "h-96"}`}
    >
      <div
        className={`grid gap-y-4 ${unLimitHeight ? "" : "overflow-y-scroll"} `}
      >
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <Link to={ROUTER.ACCOUNT}>
            <div className="flex gap-x-4">
              <img
                className="w-10 h-10 mt-1"
                src="https://shoptienzombie.vn/assets/frontend/theme_5/image/nam/anhdaidien.svg"
                alt=""
              />
              <div className="flex flex-col gap-y-2">
                <h2 className="font-semibold text-md">Ng Thanh Cong</h2>
                <p className="font-medium text-xs">
                  Số dư: <span className="text-blue-800">30 điểm</span>
                </p>
                <p className="font-medium text-xs">
                  Mã: <span className="text-blue-800">ACC-ADSD</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <h2 className="font-semibold text-md mb-4">Giao dịch</h2>
          <div className="flex items-center justify-between">
            <Link to={ROUTER.ACCOUNT_RECHARGE}>
              <div className="flex justify-center flex-col items-center">
                <IconButton>
                  <ICONS.RECHARGE />
                </IconButton>
                <span className="text-sm mt-1">Nạp tiền</span>
              </div>
            </Link>
            <Link to={ROUTER.ACCOUNT_RECHARGE}>
              <div className="flex justify-center flex-col items-center">
                <IconButton>
                  <ICONS.RECHARGE />
                </IconButton>
                <span className="text-sm mt-1">Rút vật phẩm</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <h2 className="font-semibold text-md mb-4">Lịch sử</h2>

          <div className="flex flex-col gap-y-4">
            <Link to={ROUTER.ACCOUNT_BALANCE}>
              <div className="flex gap-x-4 items-center justify-between">
                <IconButton>
                  <ICONS.CHART />
                </IconButton>
                <p className="grow text-sm">Lịch sử giao dịch</p>
                <ICONS.ARROW_RIGHT />
              </div>
            </Link>
            <Link to={ROUTER.ACCOUNT_INVOICE}>
              <div className="flex gap-x-4 items-center justify-between">
                <IconButton>
                  <ICONS.ACCOUNT_CIRCLE />
                </IconButton>
                <p className="grow text-sm">Lịch sử mua hàng</p>
                <ICONS.ARROW_RIGHT />
              </div>
            </Link>
          </div>
        </div>
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
          <div
            className="flex gap-x-4 items-center justify-between cursor-pointer"
            onClick={handleLogout}
          >
            <IconButton>
              <ICONS.LOGOUT />
            </IconButton>
            <p className="grow text-sm">Đăng xuất</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDropdownContent;

import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";
import { useSelector } from "../../stores/hooks";

const Info = () => {
  const identity = useSelector((states) => states.user);

  return (
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4 border">
      {identity && (
        <Link to={ROUTER.ACCOUNT}>
          <div className="flex gap-x-4">
            <img className="w-10 h-10 mt-1" src={identity.photo} alt="" />
            <div className="flex flex-col gap-y-2">
              <h2 className="font-semibold text-md">{`${identity.familyName} ${identity.givenName}`}</h2>
              <p className="font-medium text-xs">
                Số dư: <span className="text-blue-800">{identity.amount}</span>
              </p>
              <p className="font-medium text-xs">
                Mã: <span className="text-blue-800">{identity.code}</span>
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Info;

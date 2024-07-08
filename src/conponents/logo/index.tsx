import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";
import { selectMaster } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";
import CdlImage from "../cdl-image";

const Logo = () => {
  const masterData = useSelector(selectMaster);
  if (masterData.loading) {
    return <p>Loading...</p>;
  }

  const {
    entity: { logoUrl, shopName },
  } = masterData;

  return (
    <Link
      to={ROUTER.ROOT}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <CdlImage id={logoUrl} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {shopName}
      </span>
    </Link>
  );
};

export default Logo;

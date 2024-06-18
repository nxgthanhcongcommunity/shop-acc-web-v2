import { Link } from "react-router-dom";
import { selectMaster } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";
import CdlImage from "../cdl-image";
import { ROUTER } from "../../constants";

const Logo = () => {
  const masterData = useSelector(selectMaster);
  if (masterData == null) {
    return <p>Loading...</p>;
  }

  const { logoUrl, shopName } = masterData.entity;

  console.log(masterData.entity);

  return (
    <Link
      to={ROUTER.ROOT}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <CdlImage w={12} h={12} id={logoUrl} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {shopName}
      </span>
    </Link>
  );
};

export default Logo;

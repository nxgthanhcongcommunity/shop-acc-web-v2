import { Link } from "react-router-dom";
import { selectMaster } from "../../stores/features/masterSlice";
import { useSelector } from "../../stores/hooks";
import CdlImage from "../cdl-image";
import { ROUTER } from "../../constants";
import { useEffect, useState } from "react";

interface ILogoState {
  logoUrl: string;
  shopName: string;
}

const Logo = () => {
  const [states, setStates] = useState<ILogoState | null>(null);
  const masterData = useSelector(selectMaster);

  useEffect(() => {
    if (masterData.entity != null) {
      const { logoUrl, shopName } = masterData.entity;
      setStates({ logoUrl, shopName });
    }
  }, [masterData.loading, masterData.entity]);

  if (states == null) {
    return <p>Loading...</p>;
  }

  return (
    <Link
      to={ROUTER.ROOT}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <CdlImage w={140} id={states.logoUrl} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        {states.shopName}
      </span>
    </Link>
  );
};

export default Logo;

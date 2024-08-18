import { Image } from "antd";
import { Link } from "react-router-dom";
import { ROUTER } from "../../constants";

const Logo = () => {
  return (
    <Link
      to={ROUTER.ROOT}
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <Image
        preview={false}
        height={30}
        src="https://res.cloudinary.com/dntsyzdh3/image/upload/v1723905175/shop-acc/logoLyHuy_dckaud.png"
      />
    </Link>
  );
};

export default Logo;

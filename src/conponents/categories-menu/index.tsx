import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CATEGORIES_MENU } from "../../constants";
import TitleButton from "../button/titleButton";

interface ICategoriesMenuProps {
  isShow: boolean;
  onMouseLeave: any;
}

const CategoriesMenu = (props: ICategoriesMenuProps) => {
  const { isShow, onMouseLeave } = props;
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  const handleMouseLeave = () => {
    onMouseLeave();
    setIsHovered(false);
  };

  return (
    <div
      className={`overflow-hidden duration-1000 ${
        isShow || isHovered ? "max-h-screen" : "max-h-0"
      }`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <ul className="flex items-center gap-x-8 max-w-screen-lg mx-auto py-3">
        {CATEGORIES_MENU.map((cateConfig) => (
          <Link key={cateConfig.title} to={cateConfig.href}>
            <TitleButton bg isActived={cateConfig.href === location.pathname}>
              {cateConfig.icon}
              {cateConfig.title}
            </TitleButton>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMenu;

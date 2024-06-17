import { useState } from "react";
import { CATEGORIES_MENU } from "../../constants";
import CategoryItem from "./categoryItem";

interface ICategoriesMenuProps {
  isShow: boolean;
  onMouseLeave: any;
}

const CategoriesMenu = (props: ICategoriesMenuProps) => {
  const { isShow, onMouseLeave } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    onMouseLeave();
    setIsHovered(false);
  };

  return (
    <div
      className={`overflow-hidden ease-in-out duration-1000 ${isShow || isHovered ? "max-h-screen" : "max-h-0"}`}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
    >
      <ul className="flex justify-between items-center max-w-screen-lg mx-auto py-2 ">
        {CATEGORIES_MENU.map((cateConfig) => (
          <CategoryItem {...cateConfig} key={cateConfig.title} />
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMenu;

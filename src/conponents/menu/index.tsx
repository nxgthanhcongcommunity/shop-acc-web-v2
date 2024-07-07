import TitleButton from "../button/titleButton";
import ICONS from "../icons";

interface IMenuProps {
  onClick: any;
}

const Menu = (props: IMenuProps) => {
  const { onClick } = props;

  return (
    <div onClick={onClick}>
      <div
        id="mega-menu"
        className="items-center justify-between hidden w-full md:flex md:flex-col md:w-auto md:order-1 cursor-pointer"
      >
        <TitleButton>
          <ICONS.MENU /> Danh mục
        </TitleButton>
      </div>
    </div>
  );
};

export default Menu;

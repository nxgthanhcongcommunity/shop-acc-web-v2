import { Link, useLocation } from "react-router-dom";
import TitleButton from "../button/titleButton";

interface IBreadcrumbItemProps {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const BreadcrumbItem = (props: IBreadcrumbItemProps) => {
  const { path, icon, title } = props;
  const location = useLocation();
  const isActived = path == location.pathname;

  return (
    <Link to={path} >
      <TitleButton isActived={isActived}>
        {icon}
        {title}
      </TitleButton>
    </Link>
  );
};

export default BreadcrumbItem;

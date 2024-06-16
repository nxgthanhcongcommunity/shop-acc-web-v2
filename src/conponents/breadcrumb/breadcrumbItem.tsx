import { Link, useLocation } from "react-router-dom";

interface IBreadcrumbItemProps {
  path: string;
  title: string;
  icon: React.ReactNode;
}

const BreadcrumbItem = (props: IBreadcrumbItemProps) => {
  const { path, icon, title } = props;
  const location = useLocation();

  console.log(location);
  console.log(path);

  const lastItem = location.pathname.split("/").pop();

  return (
    <Link
      to={path}
      className={`gap-x-2 inline-flex items-center text-sm font-medium  hover:text-blue-600 dark:text-gray-400 dark:hover:text-white ${path.includes("" + lastItem) ? "text-blue-600" : "text-gray-700"}`}
    >
      {icon}
      {title}
    </Link>
  );
};

export default BreadcrumbItem;

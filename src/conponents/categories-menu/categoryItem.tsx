import { Link } from "react-router-dom";

interface ICategoryItemProps {
  href: string;
  icon: React.ReactNode;
  title: string;
}

const CategoryItem = (props: ICategoryItemProps) => {
  const { href, icon, title } = props;

  return (
    <Link
      to={href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <span className="text-slate-600">{icon}</span>
      <span className="ms-3 font-medium">{title}</span>
    </Link>
  );
};

export default CategoryItem;

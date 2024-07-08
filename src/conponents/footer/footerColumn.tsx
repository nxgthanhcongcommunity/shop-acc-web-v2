import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface IFooterColumnProps {
  title: string;
  icon?: ReactNode;
  items: {
    icon?: ReactNode;
    title: string;
    href: string;
  }[];
}

const FooterColumn = (props: IFooterColumnProps) => {
  const { title, icon, items } = props;

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {items.map((item) => (
          <li className="mb-4" key={item.title}>
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;

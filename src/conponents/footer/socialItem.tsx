import { ReactNode } from "react";

interface ISocialItemProps {
  href: string;
  icon: ReactNode;
  title: string;
}

const SocialItem = (props: ISocialItemProps) => {
  const { href, icon, title } = props;

  return (
    <a
      href={href}
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      {icon}
      <span className="sr-only">{title}</span>
    </a>
  );
};

export default SocialItem;

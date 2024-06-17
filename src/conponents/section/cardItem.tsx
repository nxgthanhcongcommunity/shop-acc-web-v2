import { Link } from "react-router-dom";
import { CdlImage } from "..";
import { ReactNode } from "react";

interface ICardItemProps {
  href: string;
  imgId: string;
  title: string;
  listParagraph: ReactNode[];
}

const CardItem = (props: ICardItemProps) => {
  const { href, imgId, title, listParagraph } = props;

  return (
    <Link
      to={href}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="rounded-md overflow-hidden mb-4">
        <CdlImage id={imgId} />
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {listParagraph.map((item) => item)}
    </Link>
  );
};

export default CardItem;

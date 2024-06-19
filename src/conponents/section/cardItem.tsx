import { Link } from "react-router-dom";
import { CdlImage } from "..";
import { ReactNode } from "react";

interface ICardItemProps {
  href: string;
  imgId: string;
  title: string;
  listParagraph: ReactNode[];
  isActived: boolean;
}

const CardItem = (props: ICardItemProps) => {
  const { href, imgId, title, listParagraph, isActived } = props;

  return (
    <Link to={href} onClick={e => {
      if (isActived == false) {
        e.preventDefault();
      }
    }}>
      <div className="pb-12 block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="rounded-md overflow-hidden mb-4">
          <CdlImage id={imgId} />
        </div>
        <h5 className="mb-1 text-xl font-medium tracking-tight text-gray-800 dark:text-white">
          {title}
        </h5>
        {listParagraph.map((item) => item)}
      </div>
    </Link>
  );
};

export default CardItem;

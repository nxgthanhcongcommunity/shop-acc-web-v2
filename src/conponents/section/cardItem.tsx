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

  const preventDefaultConditionCheck = (e: any) => {
    if (isActived === false) {
      e.preventDefault();
    }
  };

  return (
    <Link to={href} onClick={preventDefaultConditionCheck}>
      <div className="pb-8 md:pb-12 block max-w-sm p-3 md:p-4 bg-white border border-gray-200 rounded-md md:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-full">
        <div className="rounded-md overflow-hidden mb-4">
          <CdlImage twClass="h-[160px] w-full object-cover" id={imgId} />
        </div>
        <h5 className="md:mb-1 text-md md:text-xl font-medium tracking-tight text-gray-800 dark:text-white">
          {title}
        </h5>
        {listParagraph.map((item) => item)}
      </div>
    </Link>
  );
};

export default CardItem;

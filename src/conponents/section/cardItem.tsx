import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CdlImage } from "..";

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
      <Card
        cover={<CdlImage twClass="h-[160px] w-full object-cover" id={imgId} />}
      >
        <Meta title={title} description={listParagraph.map((item) => item)} />
      </Card>
    </Link>
  );
};

export default CardItem;

import { ROUTER } from "../../constants";
import { IBanner } from "../../models";
import { useGetCategoriesByBannerCodeQuery } from "../../stores/services/master-data-api";
import CardItem from "./cardItem";
import SectionTitle from "./sectionTitle";

interface ISectionProps {
  banner: IBanner;
}

const Section = (props: ISectionProps) => {
  const { banner } = props;
  const { data: records = [] } = useGetCategoriesByBannerCodeQuery(banner.code);

  if (records.length === 0) {
    return <></>;
  }

  return (
    <section className="mt-16">
      <SectionTitle title={banner.name} tagTitle={banner.tag} />
      <div className="mt-4 grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-2">
        {(records ?? []).map((record: any) => {
          const countOfProducts = record.products.reduce(
            (accumulator: number, currentValue: any) =>
              accumulator + currentValue.quantity.currentQuantity,
            0
          );
          return (
            <CardItem
              key={record.code}
              isActived={countOfProducts > 0}
              href={`${ROUTER.SHOP}?categoryCode=${record.code}`}
              imgId={record.mainFileCLDId}
              title={record.name}
              listParagraph={[
                <span key={"Số tài khoản"} className="text-sm text-gray-600">
                  Số tài khoản: {countOfProducts}
                </span>,
              ]}
            />
          );
        })}
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default Section;

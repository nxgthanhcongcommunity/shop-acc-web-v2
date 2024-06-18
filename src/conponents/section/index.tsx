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

  const {
    isError,
    isLoading,
    data: records,
  } = useGetCategoriesByBannerCodeQuery(banner.code);
  if (isError) {
    return null;
  }

  if (isLoading) {
    return null;
  }

  if (records == null || records.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <SectionTitle title={banner.name} tagTitle={banner.tag} />
      <div className="grid grid-cols-4 gap-4">
        {records.map((record: any) => (
          <CardItem
            href={`${ROUTER.SHOP}?categoryCode=${record.code}`}
            imgId={record.mainFileCLDId}
            title={record.name}
            listParagraph={[
              <span className="text-sm text-gray-600">
                Số tài khoản:{" "}
                {record.products.reduce(
                  (accumulator: number, currentValue: any) =>
                    accumulator + currentValue.quantity.currentQuantity,
                  0
                )}
              </span>,
            ]}
          />
        ))}
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </section>
  );
};

export default Section;

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
            href={`${ROUTER.SHOP}?code=${record.code}`}
            imgId={record.mainFileCLDId}
            title={record.name}
            listParagraph={[]}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;

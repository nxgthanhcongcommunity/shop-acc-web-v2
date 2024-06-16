import CardItem from "./cardItem";
import SectionTitle from "./sectionTitle";

const Section = () => {
  return (
    <section className="mt-16">
      <SectionTitle title="Acc vip" tagTitle="VIP" />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <CardItem />
        ))}
      </div>
    </section>
  );
};

export default Section;

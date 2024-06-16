import {
  Breadcrumb,
  SectionTitle,
  ShopHeader,
  CardItem,
  Section,
} from "../conponents";

const Shop = () => {
  return (
    <div className="grow max-w-screen-xl mx-auto w-full">
      <Breadcrumb />
      <div className="mt-12">
        <SectionTitle title="Acc vip" tagTitle="VIP" />
      </div>
      <ShopHeader />
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <CardItem />
        ))}
      </div>
      <Section />
    </div>
  );
};

export default Shop;

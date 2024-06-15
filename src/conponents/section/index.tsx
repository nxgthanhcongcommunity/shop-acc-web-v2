import CardItem from "./cardItem";

const Section = () => {
  return (
    <section className="mt-16">
      <h1 className="flex items-center text-4xl font-extrabold dark:text-white mb-4">
        Flowbite
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold me-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2 uppercase">
          VIP
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <CardItem />
        ))}
      </div>
    </section>
  );
};

export default Section;

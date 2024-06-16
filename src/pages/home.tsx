import { HomeCarousel, Section } from "../conponents";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-6">
      <div className="rounded-2xl overflow-hidden h-96">
        <HomeCarousel />
      </div>
      <Section />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Section />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Section />
      <div className="h-16"></div>
    </div>
  );
};

export default Home;

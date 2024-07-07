import React, { useEffect, useState } from "react";
import { HomeCarousel, Section } from "../conponents";
import { selectMaster } from "../stores/features/masterSlice";
import { useSelector } from "../stores/hooks";

const Home = () => {
  const masterData = useSelector(selectMaster);

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (masterData.entity == null) return;

    const { banners } = masterData.entity;
    setBanners(banners);
  }, [masterData.loading, masterData.entity]);

  return (
    <div className="max-w-screen-xl mx-auto pt-6 px-4">
      <HomeCarousel />

      {banners &&
        banners.map((banner: any, index: number) => (
          <React.Fragment key={banner.code}>
            <Section banner={banner} />
          </React.Fragment>
        ))}
      <div className="h-16"></div>
    </div>
  );
};

export default Home;

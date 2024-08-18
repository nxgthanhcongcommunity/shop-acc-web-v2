import React, { useEffect, useState } from "react";
import { HomeCarousel, Section } from "../conponents";
import { selectMaster } from "../stores/features/masterSlice";
import { useSelector } from "../stores/hooks";
import PageContainer from "./pageContainer";
import { IBanner } from "../models";

const Home = () => {
  const masterData = useSelector(selectMaster);

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    if (masterData.entity == null) return;

    const { banners } = masterData.entity;
    setBanners(banners);
  }, [masterData.loading, masterData.entity]);

  return (
    <PageContainer>
      <div className="h-6"></div>
      <HomeCarousel />

      {banners &&
        banners.map((banner: IBanner) => (
          <Section key={banner.code} banner={banner} />
        ))}
      <div className="h-16"></div>
    </PageContainer>
  );
};

export default Home;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { useSelector } from "../../stores/hooks";
import { selectMaster } from "../../stores/features/masterSlice";
import CdlImage from "../cdl-image";

const HomeCarousel = () => {
  const masterData = useSelector(selectMaster);
  if (masterData == null) {
    return <p>Loading...</p>;
  }

  if (masterData.entity == null) {
    return <p>Loading...</p>;
  }

  const { entity } = masterData;
  const { sliders } = entity;

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliders &&
          sliders.map((item: any) => (
            <SwiperSlide>
              <CdlImage id={item.cdlId} twClass="h-full w-full object-cover" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;

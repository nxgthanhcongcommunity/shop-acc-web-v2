// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { useSelector } from "../../stores/hooks";
import { selectMaster } from "../../stores/features/masterSlice";
import CdlImage from "../cdl-image";

const HomeCarousel = () => {
  const masterData = useSelector(selectMaster);
  if (masterData == null) {
    return <p>Loading...</p>;
  }
  const { entity } = masterData;
  const { sliders } = entity;

  return (
    <div className="relative h-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliders &&
          sliders.map((item: any) => (
            <SwiperSlide>
              <CdlImage id={item.cdlId} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default HomeCarousel;

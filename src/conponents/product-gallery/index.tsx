import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CdlImage from "../cdl-image";
import "./styles.css";

interface IProductGalleryProps {
  cdlIds: string[],
}

const ProductGallery = (props: IProductGalleryProps) => {

  const { cdlIds } = props;
  const sliderImages = cdlIds.map(item => ({
    original: item,
    thumbnail: item,
    renderThumbInner: (item: any) => {
      try {
        return (
          <CdlImage w={3000} h={3000} id={item.original} />
        )
      } catch (ex) {
        return <>ex</>
      }
    },
    renderItem: (item: any) => {
      try {
        return (
          <CdlImage w={3000} h={3000} id={item.original} />
        )
      } catch (ex) {
        return <>ex</>
      }
    }
  }))

  return (
    <div className="">
      <ImageGallery
        additionalClass=""
        items={sliderImages}
        showPlayButton={false}
      />
    </div>
  )
};

export default ProductGallery;

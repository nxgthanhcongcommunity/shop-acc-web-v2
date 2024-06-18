import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dntsyzdh3",
  },
});

interface ICdlImageProps {
  id: string;
  w?: number;
  h?: number;
}

// const CdlImage = (props: ICdlImageProps) => {
//   let { w = 255, h = 255, id } = props;

//   if (id == null) {
//     id = "shop-acc/x0hrnha2aq9xgseidnfb";
//   }
//   const myImage = cld.image(id);

//   // Resize to 250 x 250 pixels using the 'fill' crop mode.
//   myImage.resize(fill().width(w).height(h));

//   return <AdvancedImage cldImg={myImage} />;
// };

const CdlImage = (props: ICdlImageProps) => {
  let { w = 255, h = 255, id } = props;
  return <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" width={w} height={h} />;
};

export default CdlImage;

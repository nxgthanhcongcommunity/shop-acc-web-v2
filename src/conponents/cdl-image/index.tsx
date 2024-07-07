import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dntsyzdh3",
  },
});

interface ICdlImageProps {
  id: string;
  twClass?: string;
  w?: number;
}

const CdlImage = (props: ICdlImageProps) => {
  let { w, twClass, id } = props;

  if (id == null) {
    id = "shop-acc/x0hrnha2aq9xgseidnfb";
  }

  const myImage = cld.image(id);

  let url = "";
  if (w && w > 0) {
    url = myImage.resize(fill().width(w)).toURL();
  } else {
    url = myImage.resize(fill()).toURL();
  }

  return <img src={url} className={twClass} alt="..." />;
};

// const CdlImage = (props: ICdlImageProps) => {
//   let { w = 255, h = 255, id } = props;
//   return <img src="https://static.vecteezy.com/system/resources/previews/005/720/408/non_2x/crossed-image-icon-picture-not-available-delete-picture-symbol-free-vector.jpg" width={w} height={h} />;
// };

export default CdlImage;

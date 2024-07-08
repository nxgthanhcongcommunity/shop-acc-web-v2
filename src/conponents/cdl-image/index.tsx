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
}

const CdlImage = (props: ICdlImageProps) => {
  const { twClass, id = "shop-acc/x0hrnha2aq9xgseidnfb" } = props;

  const url = cld.image(id).resize(fill()).toURL();
  return <img src={url} className={twClass} alt="..." />;
};

export default CdlImage;

import { FaSquareFacebook, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { links } from "@/data/links";
const iconClassName =
  "m-4 hover:stroke-none hover:fill-masti-beige stroke-white fill-none stroke-[10px] text-white text-5xl md:text-7xl hover:!text-masti-beige hover:cursor-pointer duration-300 hover:scale-110";
const Contact = () => {
  return (
    <div className="bg-masti-red-200 flex items-center justify-center py-4 divide-x-8 divide-masti-red-100">
      <a href={links.facebook} target="_blank" rel="noreferrer">
        <FaSquareFacebook className={iconClassName} />
      </a>
      <a href={`mailto:${links.email}`} target="_blank" rel="noreferrer">
        <FaEnvelope className={iconClassName} />
      </a>
      <a href={links.instagram} target="_blank" rel="noreferrer">
        <FaInstagram className={iconClassName} />
      </a>
    </div>
  );
};

export default Contact;

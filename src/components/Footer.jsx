import { FaSquareFacebook, FaInstagram, FaEnvelope } from "react-icons/fa6";
import Circle from "./Circle";
const Footer = () => {
  return (
    <div className="bg-masti-beige relative overflow-hidden h-[40vh] md:h-[70vh]">
      <Circle
        color="#EDCE92"
        className="absolute left-0 -translate-x-1/4 -bottom-0 translate-y-1/2 w-2/3 md:w-1/2"
      />
      <Circle
        color="#EDCE92"
        className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 w-1/2 md:w-1/4"
      />
      <img
        className="absolute bottom-10 left-0 w-1/3 md:w-1/6"
        src="logo.svg"
      />
      <div className="absolute right-3 bottom-3 flex">
        <div className="flex flex-col border-l-4 border-masti-red-200 pl-3">
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              className="text-masti-red-200 mb-2  duration-300 hover:scale-110"
              size={50}
            />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <FaEnvelope
              className="text-masti-red-200 mb-2  duration-300 hover:scale-110"
              size={50}
            />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <FaSquareFacebook
              className="text-masti-red-200  duration-300 hover:scale-110"
              size={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

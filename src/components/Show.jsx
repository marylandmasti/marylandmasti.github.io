import Circle from "./Circle";
import { show } from "@/data/about";

const Show = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch w-full">
      <div className="flex w-full md:w-3/4">
        <div className="bg-masti-red-200 w-1/6 md:w-1/12 relative">
          <p className="whitespace-nowrap font-anton text-masti-beige rotate-90 text-4xl md:text-5xl lg:text-6xl xl:text-7xl absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2">
            THE SHOW
          </p>
        </div>
        <div className="bg-masti-red-100 relative overflow-hidden flex flex-col w-5/6 md:w-11/12">
          <Circle
            className="absolute right-0 translate-x-1/2"
            color="#F77F00"
          />
          <div className="w-fit self-end my-5">
            <p className="w-full relative text-2xl md:text-4xl font-anton text-masti-red-100 bg-white text-right m-0 mb-2 py-2 pl-12 md:pl-24 pr-4">
              {show.title}
            </p>
            <div className="w-full h-2 bg-masti-red-300 relative" />
          </div>
          <p className="relative text-base md:text-xl font-poppins text-white self-center w-9/12 mb-5">
            {show.text}
          </p>
        </div>
      </div>
      <div className="bg-masti-beige relative overflow-hidden flex  w-full md:w-1/3">
        <Circle className="absolute left-0 -translate-x-1/2" color="#FFFFFF" />
        <img
          src="/image3.png"
          className="relative place-self-center self-center w-full"
        />
      </div>
    </div>
  );
};

export default Show;

import { show } from "@/data/about";

const Raas = () => {
  return (
    <div className="relative w-full flex-col md:flex-row flex items-stretch md:h-[500px]">
      <div className="hidden md:block w-2/3 absolute right-0 top-3">
        <p className="w-full text-2xl md:text-4xl font-anton bg-masti-red-300 text-white py-2 pl-4">
          {show.title}
        </p>
        <div className="w-full h-2 bg-masti-red-100 relative" />
      </div>
      <img src={show.image} className="w-full md:w-1/2 object-cover h-full" />
      <div className="h-full flex flex-col w-full md:w-1/2 bg-masti-red-200 justify-end items-end">
        <div className="md:hidden block -mt-5 w-fit">
          <p className=" text-2xl md:text-4xl font-anton bg-masti-red-300 text-white py-2 pl-4">
            {show.title}
          </p>
          <div className=" h-2 bg-masti-red-100 relative" />
        </div>
        <p className="text-base md:text-xl font-poppins text-white m-5">
          {show.text}
        </p>
      </div>
    </div>
  );
};

export default Raas;

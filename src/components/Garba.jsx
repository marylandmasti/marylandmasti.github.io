import { garba } from "@/data/about";
import Circle from "./Circle";
const Garba = () => {
  return (
    <div className="w-full flex flex-col relative overflow-hidden">
      <Circle
        className="absolute left-0 -translate-x-1/4 bottom-0 translate-y-1/4"
        color="#FEF2E5"
      />
      <div className="relativew-fit self-start my-5 w-11/12 md:w-1/3">
        <p className=" text-2xl md:text-4xl font-anton bg-masti-red-100 text-masti-beige text-right m-0 mb-2 px-4 py-2">
          {garba.title}
        </p>
        <div className=" h-2 bg-masti-red-300 " />
      </div>
      <div className="relative flex self-center w-2/3">
        <div className="h-16 w-2 bg-masti-beige mr-3 mt-2" />
        <p className=" text-base md:text-xl font-poppins text-masti-red-200 self-center w-11/12 mb-5">
          {garba.text}
        </p>
      </div>
    </div>
  );
};

export default Garba;

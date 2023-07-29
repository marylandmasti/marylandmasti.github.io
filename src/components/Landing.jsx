import Circle from "./Circle";

const Landing = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-masti-red-300 flex justify-center items-center h-[50vh] md:h-[90vh] overflow-hidden">
      <Circle
        className="absolute opacity-30 top-0 -translate-y-1/2 w-1/3"
        color="#A51222"
      />
      <Circle
        className="absolute opacity-30 bottom-0 translate-y-1/2 w-1/3"
        color="#A51222"
      />
      <Circle
        className="absolute opacity-30 left-0 -translate-x-1/2 w-1/2"
        color="#A51222"
      />
      <Circle
        className="absolute opacity-30 right-0 translate-x-1/2 w-1/2"
        color="#A51222"
      />
      <div className="relative w-2/3 md:w-1/2 flex flex-col">
        <img className="w-1/2 md:w-1/3" src="/logo.svg" />
        <p className="m-0 text-white font-anton text-4xl md:text-8xl border-b-4 border-masti-red-200 w-fit self-center">
          Maryland Masti
        </p>
        <p className="m-0 text-white font-poppins text-lg md:text-2xl font-extralight self-end text-right">
          The Most Anticipated Raas Competition
        </p>
        <p className="m-0 text-white font-poppins font-bold text-right text-lg md:text-2xl self-end">
          Show SOLD OUT! Join us at the after party
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://kchinna.github.io"
          className=" duration-300 hover:scale-110 font-anton bg-masti-beige text-masti-red-200 self-center text-cl md:text-3xl no-underline px-8 py-2 my-2 md:my-5"
        >
          AFTER PARTY
        </a>
      </div>
    </div>
  );
};

export default Landing;

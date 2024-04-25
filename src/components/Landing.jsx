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
        <img className="w-1/2 md:w-1/3 mx-auto" src="/testudo.png" />
        <p className="m-0 text-white font-anton text-4xl md:text-8xl border-b-4 border-masti-red-200 w-fit self-center">
          Maryland Masti
        </p>
        <p className="m-0 text-white font-poppins text-lg md:text-2xl font-extralight self-center text-right">
          Check out our upcoming Looney&apos;s Event on May 2nd!
        </p>

        <p className="m-0 text-white font-poppins font-bold text-right text-lg md:text-2xl self-center">
          <img className="w-1/4 md:w-1/2 mx-auto" src="MM18.jpeg" />
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="MM-Looneys.ics"
          className=" duration-300 hover:scale-110 font-anton bg-masti-beige text-masti-red-200 self-center text-cl md:text-3xl no-underline px-8 py-2 my-2 md:my-5"
        >
          Add to Calendar
        </a>
      </div>
    </div>
  );
};

export default Landing;

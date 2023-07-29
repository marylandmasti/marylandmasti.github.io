const Title = ({ title }) => {
  return (
    <div className="ml-4 pl-4 bg-masti-beige text-anton">
      <p className="font-anton bg-masti-red-300 text-white text-3xl md:text-5xl mb-0 pl-4 py-2">
        {title}
      </p>
    </div>
  );
};

export default Title;

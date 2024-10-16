// eslint-disable-next-line react/prop-types
const Boton = ({ name }) => {
  return (
    <button className="inline-block px-4 py-2 font-semibold text-white transition-all duration-300 border-2 rounded-md bg-gray-950 border-gray-950 hover:bg-gray-700 hover:text-gray-950 Laptop:px-5 Laptop:py-3 Laptop:text-xl active:scale-90">
      {name}
    </button>
  );
};

export default Boton;

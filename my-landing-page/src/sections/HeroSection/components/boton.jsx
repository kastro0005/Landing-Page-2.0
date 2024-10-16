import { Link as ScrollLink } from "react-scroll";

// eslint-disable-next-line react/prop-types
const Boton = ({ name, section }) => {
  return (
    <ScrollLink
      smooth={true}
      to={section}
      className="inline-block px-4 py-2 font-semibold text-white transition-all duration-300 border-2 rounded-md cursor-pointer bg-gray-950 border-gray-950 hover:bg-gray-700 hover:text-gray-950 Laptop:px-5 Laptop:py-3 Laptop:text-xl active:scale-90">
      {name}
    </ScrollLink>
  );
};

export default Boton;

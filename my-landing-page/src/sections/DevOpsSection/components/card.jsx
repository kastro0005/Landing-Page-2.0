// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="z-20 flex items-start py-4">
      <div className="relative p-1 px-3 mt-3 mr-4 text-xl font-bold bg-gray-300 border border-gray-500 rounded-md ">
        {id}
      </div>
      <div className="flex flex-col gap-1 ">
        <h3 className="text-3xl font-semibold ">{title}</h3>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  );
};

export default Card;

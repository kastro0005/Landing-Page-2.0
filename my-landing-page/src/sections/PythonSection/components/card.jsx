// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-500 rounded-full">
        {id}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200">{content}</p>
      </div>
    </div>
  );
};

export default Card;
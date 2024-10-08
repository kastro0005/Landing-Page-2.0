// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white bg-opacity-90 rounded-lg shadow backdrop-blur-sm">
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

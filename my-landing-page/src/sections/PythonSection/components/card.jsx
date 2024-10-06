// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center w-8 h-8 mr-4 text-white bg-blue-600 rounded-full">
        {id}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;

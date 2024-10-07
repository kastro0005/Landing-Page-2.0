// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="flex items-center">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;

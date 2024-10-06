// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;

// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="">
      <h3 className="mb-4 text-3xl font-semibold">{title}</h3>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default Card;

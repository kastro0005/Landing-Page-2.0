// eslint-disable-next-line react/prop-types
const Card = ({ icon: Icon, title, content }) => {
  return (
    <div className="z-20 flex flex-col items-start p-6">
      <Icon className="mb-4 text-blue-600 w-14 h-14" />
      <h3 className="mb-4 text-3xl font-semibold">{title}</h3>
      <p className="text-2xl">{content}</p>
    </div>
  );
};

export default Card;

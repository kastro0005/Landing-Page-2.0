// eslint-disable-next-line react/prop-types
/**const Card = ({ icon, title, content }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      {icon}
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p>{content}</p>
    </div>
  );
};*/

const Card = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white bg-opacity-90 rounded-lg shadow backdrop-blur-sm">
      <Icon className="w-8 h-8 mb-4 text-blue-600" />
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;

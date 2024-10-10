// eslint-disable-next-line react/prop-types
const Card = ({ id, title, content }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center px-10 py-16 mr-4 text-4xl text-black font-bold bg-violet-200 rounded-md [clip-path:polygon(100%_0,_100%_80%,_50%_100%,_0_80%,_0_0,_50%_20%)] border border-gray-400">
        {id}
      </div>
      <div className="flex flex-col gap-4 pb-8">
        <h3 className="text-3xl font-semibold ">{title}</h3>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  );
};

export default Card;

// eslint-disable-next-line react/prop-types
const Card = ({ title, content }) => {
  return (
    <div className="flex items-center">
      <div>
        <details open>
          <summary className="mb-4 text-3xl font-semibold">{title}</summary>
          <p className="p-2 ml-2 text-2xl border-l border-gray-400">
            {content}
          </p>
        </details>
      </div>
    </div>
  );
};

export default Card;

export const CarMake = ({ title, model }) => {
  return (
    <div>
      <div className="text-4xl font-bold font-Ubuntu mb-2">{title}</div>
      <div className="text-gray-400 text-base font-Ubuntu font-semibold">
        {model}
      </div>
    </div>
  );
};

export const DetailCard = ({ icon, mainHeader, subHeader, detail }) => {
  return (
    <div className="w-56 p-2 border rounded-3xl bg-gray-100">
      <div className="flex justify-between">
        <div className="w-12 h-12 border p-3 rounded-full bg-white">
          <img src={icon}></img>
        </div>
        <div className="grid place-items-center mr-3">
          <p className="text-gray-400 text-xl font-QuickSand font-semibold">
            {mainHeader}
          </p>
        </div>
      </div>
      <div className="mt-4 mb-2">
        <div className="">
          <p className="text-gray-400 text-base font-QuickSand font-semibold">
            {subHeader}
          </p>
        </div>
        <div>
          <p className="text-black text-base font-QuickSand font-bold">
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};

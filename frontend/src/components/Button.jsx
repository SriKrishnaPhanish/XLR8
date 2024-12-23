export const Button = ({ text }) => {
  return (
    <a
      href="#_"
      className="m-1 mb-3 py-3 w-40 flex items-center text-xl justify-center border border-gray-300 text-black bg-gray-100 rounded-full font-semibold font-QuickSand hover:bg-black hover:text-white"
    >
      {text}
    </a>
  );
};

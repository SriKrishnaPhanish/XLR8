import { Button } from "./Button";

export const TopBar = () => {
  return (
    <div className="flex justify-center mt-6">
      <div></div>
      <div className="flex">
        <Button text={"Models"} />
        <Button text={"Service"} />
        <Button text={"Experience"} />
        <Button text={"Shop"} />
        <Button text={"Purchase"} />
        <Button text={"Configurate"} />
      </div>
      <div></div>
    </div>
  );
};

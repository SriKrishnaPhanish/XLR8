import { Button } from "./Button";
import { CarMake } from "./CarMake";

export const LeftComp = () => {
  return (
    <div className="w-1/4">
      <CarMake title={"Mercedes - Benz"} model={"AMG C 63 S Coupe - 2023"} />
      <div className="mt-10">
        <Button text={"Performance"} />
        <Button text={"Design"} />
        <Button text={"Safety"} />
        <Button text={"Luxury"} />
      </div>
    </div>
  );
};

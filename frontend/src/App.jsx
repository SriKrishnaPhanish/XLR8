import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";
import { TopBar } from "./components/TopBar";
import { DetailCard } from "./components/DetailCard";
import { Carousel } from "./components/Carousel";
import { CarMake } from "./components/CarMake";
import { LeftComp } from "./components/LeftComp";
import Car from "./images/car.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pl-6">
        <TopBar />
        <div className="flex">
          <LeftComp />
          <div
            className="flex bg-cover bg-no-repeat w-3/4 mt-20"
            style={{
              backgroundImage: `url(${Car})`,
              backgroundSize: "auto ",
            }}
          ></div>
        </div>
        <Carousel />
      </div>
    </>
  );
}

export default App;

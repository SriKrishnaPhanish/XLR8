import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";
import { TopBar } from "./components/TopBar";
import { DetailCard } from "./components/DetailCard";
import { Carousel } from "./components/Carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TopBar />
        <Carousel />
      </div>
    </>
  );
}

export default App;

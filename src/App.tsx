import "./App.css";
import bsod from "./assets/bsod.png";
import { useEffect } from "react";
import Homepage from "./Components/homepage";
import Lockscreen from "./Components/lockscreen";
import Bootloader from "./Components/UnitComponents/bootloader";

function App() {
  useEffect(() => {
    const t = setTimeout(() => {
      const bootHelper = document.querySelector(".boothelper");
      if (bootHelper) {
        (bootHelper as HTMLElement).style.display = "none";
      }
    }, 3000);
    () => clearTimeout(t);
  }, []);

  return (
    <div className="select-none">
      <div className="boothelper">
        <Bootloader />
      </div>
      <img src={bsod} alt="BSOD" className="bsod" />
      <Lockscreen />
      <Homepage />
    </div>
  );
}

export default App;

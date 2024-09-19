import "./App.css";
import bsod from "./assets/bsod.png";
import { lazy, Suspense, useEffect, useState } from "react";
const Homepage = lazy(() => import("./Components/homepage"));
const Lockscreen = lazy(() => import("./Components/lockscreen"));
import Bootloader from "./Components/UnitComponents/bootloader";
function App() {
  const [showContent, setshowContent] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      setshowContent(true);
    }, 3000);
    () => clearTimeout(t);
  }, []);
  if (!showContent) return <Bootloader />;
  return (
    <Suspense fallback={<Bootloader />}>
      <div className="select-none">
        <img src={bsod} alt="BSOD" className="bsod" />
        <Lockscreen />
        <Homepage />
      </div>
    </Suspense>
  );
}

export default App;

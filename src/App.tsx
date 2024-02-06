import "./App.css";
import Homepage from "./Components/homepage";
import Lockscreen from "./Components/lockscreen";
import { useState } from "react";
function App() {
  const [lockscreen, setLockscreen] = useState(true);
  return (
    <div>
      <Lockscreen />
      <Homepage />
    </div>
  );
}

export default App;

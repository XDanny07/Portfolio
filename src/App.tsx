import "./App.css";
import Homepage from "./Components/homepage";
import Lockscreen from "./Components/lockscreen";

function App() {
  return (
    <div className="select-none">
      <Lockscreen />
      <Homepage />
    </div>
  );
}

export default App;

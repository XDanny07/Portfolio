import gsap from "gsap";
import Taskbar from "./UnitComponents/taskbar";
import Winpopup from "./UnitComponents/winpopup";
import Winexplorer from "./UnitComponents/winexplorer";
const Homepage = () => {
  return (
    <div className="homepage bg-img w-[100vw] h-[100vh]">
      <p>Homepage</p>
      <button
        onClick={() => {
          gsap.to(".lscreen", { opacity: 1, display: "block", duration: 0.5 });
        }}
        className="lock"
      >
        lock
      </button>
      <Winpopup />
      <Winexplorer />
      <Taskbar />
    </div>
  );
};

export default Homepage;

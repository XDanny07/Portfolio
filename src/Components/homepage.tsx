import Taskbar from "./UnitComponents/taskbar";
import Winpopup from "./UnitComponents/winpopup";
import Winexplorer from "./UnitComponents/winexplorer";
import Resume from "./UnitComponents/resume";
import Desktopicons from "./UnitComponents/desktopicons";
const Homepage = () => {
  return (
    <div className="homepage bg-img w-[100vw] h-[100vh]">
      <Desktopicons />
      {/* <button
        onClick={() => {
          gsap.to(".lscreen", { opacity: 1, display: "block", duration: 0.5 });
        }}
        className="lock"
      >
        lock
      </button> */}
      <Resume />
      <Winpopup />
      <Winexplorer />
      <Taskbar />
    </div>
  );
};

export default Homepage;

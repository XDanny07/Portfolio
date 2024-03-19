import gsap from "gsap";
import Taskbar from "./UnitComponents/taskbar";
import Winpopup from "./UnitComponents/winpopup";
const Homepage = () => {
  return (
    <div className="bg-img w-[100vw] h-[100vh]">
      <p>Homepage</p>
      <button
        onClick={() => {
          gsap.to(".lscreen", { opacity: 1, display: "block", duration: 0.5 });
        }}
        className="lock"
      >
        lock
      </button>
      {/* <Winpopup /> */}
      {/* <Taskbar /> */}
    </div>
  );
};

export default Homepage;

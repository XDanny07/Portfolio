import gsap from "gsap";
import Taskbar from "./UnitComponents/taskbar";
const Homepage = () => {
  return (
    <div className="bg-luffy w-[100vw] h-[100vh]">
      <p>Homepage</p>
      <button
        onClick={() => {
          gsap.to(".lscreen", { opacity: 1, display: "block", duration: 0.5 });
        }}
        className="lock"
      >
        lock
      </button>
      <Taskbar />
    </div>
  );
};

export default Homepage;

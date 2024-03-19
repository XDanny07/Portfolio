import windows from "../../assets/windows.avif";
import edge from "../../assets/edge.png";
import file from "../../assets/fold.avif";
import vs from "../../assets/vs.png";
function Taskbar() {
  const iconhover = "p-[0.7rem] cursor-pointer";
  return (
    <div className="taskbar  flex align-center justify-center gap-4 absolute bottom-0 backdrop-blur-3xl w-full h-[3.5rem]">
      <img className={iconhover} src={windows} alt="" />
      <img className={iconhover} src={file} alt="" />
      <img className={iconhover} src={edge} alt="" />
      <img className={iconhover} src={vs} alt="" />
    </div>
  );
}

export default Taskbar;

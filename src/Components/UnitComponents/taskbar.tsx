import windows from "../../assets/windows.png";
import edge from "../../assets/edge.png";
import file from "../../assets/file.png";
import vs from "../../assets/vs.png";
function Taskbar() {
  return (
    <div className="taskbar flex align-center gap-4 absolute bottom-0 bg-gradient-to-b backdrop-blur-3xl w-full h-[2.9rem]">
      <img className="" src={windows} alt="" />
      <img src={file} alt="" />
      <img src={edge} alt="" />
      <img src={vs} alt="" />
    </div>
  );
}

export default Taskbar;

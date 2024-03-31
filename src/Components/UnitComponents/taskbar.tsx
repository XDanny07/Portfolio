import windows from "../../assets/windows.avif";
import edge from "../../assets/edge.png";
import file from "../../assets/fold.avif";
import vs from "../../assets/vs.png";
import { winclicked, explorer_clicked } from "../actions";
import { useSelector, useDispatch } from "react-redux";

function Taskbar() {
  const dispatch = useDispatch();
  const clicked = useSelector((state: any) => state.showwinpopup);
  const iconhover = "p-[0.7rem] cursor-pointer";

  return (
    <div className="taskbar  flex align-center justify-center gap-4 absolute bottom-0 backdrop-blur-3xl w-full h-[3.5rem]">
      <img
        className={iconhover}
        src={windows}
        alt=""
        onClick={() => {
          dispatch(winclicked());
        }}
      />
      <img
        className={iconhover}
        src={file}
        alt=""
        onClick={() => dispatch(explorer_clicked(true))}
      />
      <img className={iconhover} src={edge} alt="" />
      <img className={iconhover} src={vs} alt="" />
    </div>
  );
}

export default Taskbar;

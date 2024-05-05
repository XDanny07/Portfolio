import windows from "../../assets/windows.avif";
import edge from "../../assets/edge.png";
import file from "../../assets/fold.avif";
import vs from "../../assets/vs.png";
import { winclicked, explorer_clicked } from "../actions";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function Taskbar() {
  const dispatch = useDispatch();
  const img_class =
    "w-[3.3rem] p-[0.6rem] hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md";

  return (
    <div className="taskbar flex items-center  justify-center gap-4 absolute bottom-0 backdrop-blur-3xl w-full h-[3.5rem]">
      <div className={img_class + " cursor-pointer"}>
        <img
          src={windows}
          alt=""
          onClick={() => {
            dispatch(winclicked());
          }}
        />
      </div>
      <NavLink
        to={"./Quick_Access"}
        className={img_class}
        onClick={() => dispatch(explorer_clicked(true))}
      >
        <img src={file} alt="" />
      </NavLink>
      <NavLink to={""} className={img_class}>
        <img src={edge} alt="" />
      </NavLink>
      <NavLink to={""} className={img_class}>
        <img src={vs} alt="" />
      </NavLink>
    </div>
  );
}

export default Taskbar;

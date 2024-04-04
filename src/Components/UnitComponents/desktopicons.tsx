import ThisPC from "../../assets/icons/Desktop/this_pc.ico";
import word_ico from "../../assets/icons/recommended/word.png";
import { resume_clicked } from "../actions";
import { useDispatch } from "react-redux";

function Desktopicons() {
  const dispatch = useDispatch();
  const img_class =
    "desktop-icons fit-contain w-[50px] h-[50px] cursor-pointer";
  const icon_div_class =
    "flex flex-col items-center gap-1 cursor-pointer hover:bg-white/[0.15] hover:backdrop-blur-[1px] hover:text-white p-2 rounded-md w-[80px] h-[80px] justify-center";
  return (
    <div className="desktop-icons-container flex flex-col w-max p-5 gap-4 justify-center">
      <div className={icon_div_class}>
        <img className={img_class} src={ThisPC} alt="" />
        <span>This PC</span>
      </div>
      <div
        className={icon_div_class}
        onClick={() => dispatch(resume_clicked(true))}
      >
        <img className={img_class} src={word_ico} alt="" />
        <span className="wrap">Resume</span>
      </div>
    </div>
  );
}
export default Desktopicons;

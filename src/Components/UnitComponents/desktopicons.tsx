import ThisPC from "../../assets/icons/Desktop/this_pc.ico";
import word_ico from "../../assets/icons/recommended/word.png";
import trash_ico from "../../assets/icons/Desktop/recycle-bin-full.png";
import folder_ico from "../../assets/icons/folder/folder.png";
import links_ico from "../../assets/icons/links/links.png";
import nfsmw_ico from "../../assets/NFSMW_icon.ico";
import { trash_clicked } from "../actions";
import { resume_clicked } from "../actions";
import { useDispatch } from "react-redux";
import { explorer_clicked } from "../actions";
import { error_triggered } from "../actions";
import { NavLink } from "react-router-dom";
function Desktopicons() {
  const dispatch = useDispatch();
  const ico_name_class = "wrap text-center";
  const img_class =
    "desktop-icons fit-contain w-[50px] h-[50px] cursor-pointer";
  const icon_div_class =
    "flex flex-col items-center gap-1 cursor-pointer hover:bg-white/[0.15] hover:backdrop-blur-[1px] hover:text-white p-2 rounded-md w-[80px] h-[80px] justify-center";
  return (
    <div className="desktop-icons-container max-h-[98%] flex flex-col flex-wrap w-max p-5 gap-4 justify-center">
      <NavLink
        to={"./This_PC"}
        onClick={() => dispatch(explorer_clicked(true))}
        className={icon_div_class}
      >
        <img className={img_class} src={ThisPC} alt="" />
        <span className={ico_name_class}>This PC</span>
      </NavLink>
      <div
        className={icon_div_class}
        onClick={() => dispatch(resume_clicked(true))}
      >
        <img className={img_class} src={word_ico} alt="" />
        <span className={ico_name_class}>Resume</span>
      </div>
      <NavLink
        to={"/Desktop/Tools"}
        className={icon_div_class}
        onClick={() => dispatch(explorer_clicked(true))}
      >
        <img className={img_class} src={folder_ico} alt="" />
        <span className={ico_name_class}>Tools</span>
      </NavLink>

      <NavLink
        to={"/Desktop/Projects"}
        className={icon_div_class}
        onClick={() => dispatch(explorer_clicked(true))}
      >
        <img className={img_class} src={folder_ico} alt="" />
        <span className={ico_name_class}>Projects</span>
      </NavLink>
      <NavLink
        to={"/Desktop/Links"}
        className={icon_div_class}
        onClick={() => dispatch(explorer_clicked(true))}
      >
        <img className={img_class} src={links_ico} alt="" />
        <span className={ico_name_class}>Links</span>
      </NavLink>
      <div
        className={icon_div_class}
        onClick={() => dispatch(trash_clicked(true))}
      >
        <img className={img_class} src={trash_ico} alt="" />
        <span className={ico_name_class}>Trash</span>
      </div>
      <div
        className={icon_div_class}
        onClick={() =>
          dispatch(
            error_triggered({
              stat: true,
              title: "Overflow",
              msg: "Your System Ran Out Of Memory",
            })
          )
        }
      >
        <img className={img_class} src={nfsmw_ico} alt="" />
        <span className={ico_name_class}>NFS MW</span>
      </div>
    </div>
  );
}
export default Desktopicons;

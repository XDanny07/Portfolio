import { NavLink } from "react-router-dom";
import word_ico from "../../../../assets/icons/recommended/word.png";
import folder_ico from "../../../../assets/icons/folder/folder.png";
import links_ico from "../../../../assets/icons/links/links.png";
import NFSMW_ico from "../../../../assets/NFSMW_icon.ico";
import { resume_clicked } from "../../../actions";
import { useDispatch } from "react-redux";
function Explorer_desktop() {
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md cursor-pointer";
  const dispatch = useDispatch();
  return (
    <div className="text-sm m-1 ml-2">
      <div className="mb-4">Name</div>
      <div className="flex flex-col gap-2">
        <div
          className={`flex items-center gap-2 p-1 ${hover_class} rounded-sm`}
          onClick={() => dispatch(resume_clicked(true))}
        >
          <img src={word_ico} className="w-[1.3rem]" alt="" />
          <p>Resume</p>
        </div>
      </div>
      <NavLink
        to="/Desktop/Tools"
        className={`flex items-center gap-2 p-1 ${hover_class} rounded-sm`}
      >
        <img src={folder_ico} className="w-[1.3rem]" alt="" />
        <p>Tools</p>
      </NavLink>
      <NavLink
        to="/Desktop/Projects"
        className={`flex items-center gap-2 p-1 ${hover_class} rounded-sm`}
      >
        <img src={folder_ico} className="w-[1.3rem]" alt="" />
        <p>Projects</p>
      </NavLink>
      <NavLink
        to="/Desktop/Links"
        className={`flex items-center gap-2 p-1 ${hover_class} rounded-sm`}
      >
        <img src={links_ico} className="w-[1.3rem]" alt="" />
        <p>Links</p>
      </NavLink>
      <div className="flex flex-col gap-2">
        <div
          className={`flex items-center gap-2 p-1 ${hover_class} rounded-sm`}
        >
          <img src={NFSMW_ico} className="w-[1.3rem]" alt="" />
          <p>NFS MW</p>
        </div>
      </div>
    </div>
  );
}

export default Explorer_desktop;

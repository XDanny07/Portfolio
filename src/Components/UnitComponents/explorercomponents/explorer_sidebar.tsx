import quick_acc_ico from "../../../assets/icons/quickaccess/quickaccess.png";
import desktop_ico from "../../../assets/icons/Desktop/desktop.png";
import documents_ico from "../../../assets/icons/documents/documents_small.png";
import download_ico from "../../../assets/icons/downloads/downloads_small.png";
import picture_ico from "../../../assets/icons/pictures/pictures.png";
import this_pc_ico from "../../../assets/icons/this-pc/this-pc.png";
import videos_ico from "../../../assets/icons/videos/videos.png";
import music_ico from "../../../assets/icons/music/music.png";
import local_c_ico from "../../../assets/icons/drives/c.png";
import local_ico from "../../../assets/icons/drives/d.png";
import { error_triggered } from "../../actions";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
function Explorer_sidebar() {
  const img_class = "w-[1.2rem]";
  const p_class = "text-sm";
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md";
  const drive_err = {
    stat: true,
    title: "Account Security",
    msg: ``,
  };
  const dispatch = useDispatch();
  const [quickshow, setQuickshow] = useState(true);
  const [thisshow, setthisshow] = useState(true);
  return (
    <div className="w-[22%] h-full bg-[#191919] mt-[-0.2px] border-[#3B3A38] border-r-[0.1rem]">
      <div className="quick_access">
        <div className={`flex items-center ${hover_class}`}>
          <RiArrowDropDownLine
            className={`text-xl text-gray-600 cursor-pointer ${
              quickshow ? "rotate-270" : "-rotate-90"
            }`}
            onClick={() => setQuickshow(!quickshow)}
          />
          <NavLink
            to={"/Quick_Access"}
            className={`w-full flex gap-2 items-center py-[0.2rem]`}
          >
            <img src={quick_acc_ico} className={img_class} alt="" />
            <p className={`${p_class}`}> Quick Access</p>
          </NavLink>
        </div>
        {quickshow && (
          <div className="quick_access_dropdown py-2 flex flex-col ">
            <NavLink
              to={"/Desktop"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={desktop_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Desktop</p>
            </NavLink>
            <NavLink
              to={"/Downloads"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={download_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Downloads</p>
            </NavLink>
            <NavLink
              to={"/Documents"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={documents_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Documents</p>
            </NavLink>
            <NavLink
              to={"/Pictures"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={picture_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Pictures</p>
            </NavLink>
            <NavLink
              to={"/Videos"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={videos_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Videos</p>
            </NavLink>
            <NavLink
              to={"/Music"}
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={music_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Music</p>
            </NavLink>
          </div>
        )}
      </div>
      <div className={`flex items-center  ${hover_class}`}>
        <RiArrowDropDownLine
          className={`text-xl text-gray-600 cursor-pointer ${
            thisshow ? "rotate-270" : "-rotate-90"
          }`}
          onClick={() => setthisshow(!thisshow)}
        />
        <NavLink
          to={"./This_PC"}
          className={`w-full flex gap-2 items-center py-[0.2rem]`}
        >
          <img src={this_pc_ico} className={img_class} alt="" />
          <p className={`${p_class}`}>This PC</p>
        </NavLink>
      </div>
      {thisshow && (
        <div className="this_pc_dropdown py-2 flex flex-col">
          <NavLink
            to={"./This_PC/Disk_C"}
            onClick={() =>
              dispatch(
                error_triggered({
                  ...drive_err,
                  msg: "C:\\ is not accessible",
                })
              )
            }
            className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
          >
            <img src={local_c_ico} className={img_class} alt="" />
            <p className={`${p_class}`}>Disk (C:)</p>
          </NavLink>
          <NavLink
            to={"./This_PC/Disk_D"}
            onClick={() =>
              dispatch(
                error_triggered({
                  ...drive_err,
                  msg: "D:\\ is not accessible",
                })
              )
            }
            className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
          >
            <img src={local_ico} className={img_class} alt="" />
            <p className={`${p_class}`}>Disk (D:)</p>
          </NavLink>
          <NavLink
            to={"./This_PC/Disk_E"}
            onClick={() =>
              dispatch(
                error_triggered({
                  ...drive_err,
                  msg: "E:\\ is not accessible",
                })
              )
            }
            className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
          >
            <img src={local_ico} className={img_class} alt="" />
            <p className={`${p_class}`}>Disk (E:)</p>
          </NavLink>
          <NavLink
            to={"./This_PC/Disk_F"}
            onClick={() =>
              dispatch(
                error_triggered({
                  ...drive_err,
                  msg: "F:\\ is not accessible",
                })
              )
            }
            className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
          >
            <img src={local_ico} className={img_class} alt="" />
            <p className={`${p_class}`}>Disk (F:)</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}
export default Explorer_sidebar;

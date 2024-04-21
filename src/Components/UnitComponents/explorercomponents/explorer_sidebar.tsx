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
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
function Explorer_sidebar() {
  const img_class = "w-[1.2rem]";
  const p_class = "text-sm";
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md";
  const [quickshow, setQuickshow] = useState(true);
  const [thisshow, setthisshow] = useState(true);
  return (
    <div className="w-[22%] h-full bg-[#191919] mt-[-0.2px] border-[#3B3A38] border-r-[0.1rem]">
      <div className="quick_access" onClick={() => setQuickshow(!quickshow)}>
        <div className={`flex gap-2 items-center py-[0.2rem] ${hover_class}`}>
          <RiArrowDropDownLine
            className={`text-xl text-gray-600 ${
              quickshow ? "rotate-270" : "-rotate-90"
            }`}
          />
          <img src={quick_acc_ico} className={img_class} alt="" />
          <p className={`${p_class}`}> Quick Access</p>
        </div>

        {quickshow && (
          <div className="quick_access_dropdown py-2 flex flex-col ">
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={desktop_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Desktop</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={download_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Downloads</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={documents_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Documents</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={picture_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Pictures</p>
            </div>
          </div>
        )}
      </div>
      <div className="this_pc" onClick={() => setthisshow(!thisshow)}>
        <div className={`flex gap-2 items-center py-[0.2rem] ${hover_class}`}>
          <RiArrowDropDownLine
            className={`text-xl text-gray-600 ${
              thisshow ? "rotate-270" : "-rotate-90"
            }`}
          />
          <img src={this_pc_ico} className={img_class} alt="" />
          <p className={`${p_class}`}>This PC</p>
        </div>

        {thisshow && (
          <div className="this_pc_dropdown py-2 flex flex-col">
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={desktop_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Desktop</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={download_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Downloads</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={documents_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Documents</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={picture_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Pictures</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={videos_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Videos</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={music_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Music</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={local_c_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Disk (C:)</p>
            </div>
            <div
              className={`flex gap-2 items-center px-12 py-[0.3rem] ${hover_class}`}
            >
              <img src={local_ico} className={img_class} alt="" />
              <p className={`${p_class}`}>Disk (D:)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Explorer_sidebar;

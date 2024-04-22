import desktop_ico from "../../../../assets/icons/Desktop/desktop.png";
import documents_ico from "../../../../assets/icons/documents/documents.png";
import download_ico from "../../../../assets/icons/downloads/downloads.png";
import picture_ico from "../../../../assets/icons/pictures/pictures.png";
import videos_ico from "../../../../assets/icons/videos/videos.png";
import music_ico from "../../../../assets/icons/music/music.png";
import Disk_C from "../../../../assets/icons/drives/c.png";
import Disk_D from "../../../../assets/icons/drives/d.png";
import { useDispatch } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillPinAngleFill } from "react-icons/bs";
function Explorer_thispc() {
  const dispatch = useDispatch();
  const img_class = "w-[3.5rem]";
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md cursor-pointer";
  return (
    <div className="mt-3 ml-2 font-light">
      <div className="flex items-center gap-4">
        <RiArrowDropDownLine className="text-3xl m-0 text-gray-600" />
        <p className="text-nowrap">Folders (6)</p>
        <hr className="w-full border-gray-700" />
      </div>
      <div className="text-sm ml-8 grid grid-cols-3 gap-y-6 justify-between">
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={desktop_ico} className={img_class} alt="" />
          <div>
            <p>Desktop</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={download_ico} className={img_class} alt="" />
          <div>
            <p>Downloads</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={documents_ico} className={img_class} alt="" />
          <div>
            <p>Documents</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={picture_ico} className={img_class} alt="" />
          <div>
            <p>Pictures</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={videos_ico} className={img_class} alt="" />
          <div>
            <p>Videos</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
        <div className={`flex items-center gap-2 p-1 ${hover_class}`}>
          <img src={music_ico} className={img_class} alt="" />
          <div>
            <p>Music</p>
            <p>Recent Places</p>
            <BsFillPinAngleFill className="text-gray-500" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-2">
        <RiArrowDropDownLine className="text-3xl m-0 text-gray-600" />
        <p className="text-nowrap">Devices And Drives</p>
        <hr className="w-full border-gray-700" />
      </div>
      <div className="grid grid-cols-2">
        <div
          className={`ml-8 text-sm flex items-center gap-2 p-1 ${hover_class} rounded-md`}
        >
          <img src={Disk_C} className="w-[3.2rem]" alt="" />
          <div>
            <p>Disk (C:)</p>
            <div className="w-[11rem] h-[1rem] bg-white">
              <div className="h-full bg-[#26A0DA] w-[4rem]"></div>
            </div>
            <p>276 GB free of 476 GB</p>
          </div>
        </div>
        <div
          className={`ml-8 text-sm flex items-center gap-2 p-1 ${hover_class} rounded-md`}
        >
          <img src={Disk_D} className="w-[3.2rem]" alt="" />
          <div>
            <p>Disk (D:)</p>
            <div className="w-[11rem] h-[1rem] bg-white">
              <div className="h-full bg-[#26A0DA] w-[5rem]"></div>
            </div>
            <p>128 GB free of 226 GB</p>
          </div>
        </div>
        <div
          className={`ml-8 text-sm flex items-center gap-2 p-1 ${hover_class} rounded-md`}
        >
          <img src={Disk_D} className="w-[3.2rem]" alt="" />
          <div>
            <p>Disk (E:)</p>
            <div className="w-[11rem] h-[1rem] bg-white">
              <div className="h-full bg-[#26A0DA] w-[2rem]"></div>
            </div>
            <p>211 GB free of 226 GB</p>
          </div>
        </div>
        <div
          className={`ml-8 text-sm flex items-center gap-2 p-1 ${hover_class} rounded-md`}
        >
          <img src={Disk_D} className="w-[3.2rem]" alt="" />
          <div>
            <p>Disk (F:)</p>
            <div className="w-[11rem] h-[1rem] bg-white">
              <div className="h-full bg-red-600 w-[92%]"></div>
            </div>
            <p>434 GB free of 478 GB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explorer_thispc;

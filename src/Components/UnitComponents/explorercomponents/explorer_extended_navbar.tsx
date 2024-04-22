import pluscircle_ico from "../../../assets/explorer_custom_icons/pluscircle.png";
import menu_ico from "../../../assets/explorer_custom_icons/menu.png";
import dots_ico from "../../../assets/explorer_custom_icons/dots.png";
import delete_ico from "../../../assets/explorer_custom_icons/delete.png";
import rename_ico from "../../../assets/explorer_custom_icons/rename.png";
import share_ico from "../../../assets/explorer_custom_icons/share.png";
import clipboard_ico from "../../../assets/explorer_custom_icons/clipboard.png";
import updown_ico from "../../../assets/explorer_custom_icons/updown.png";
import scissor_ico from "../../../assets/explorer_custom_icons/scissors.png";
import { MdKeyboardArrowDown } from "react-icons/md";
function Explorer_extended_navbar() {
  const img_class =
    "w-[2rem] object-cover cursor-pointer p-[0.3rem] rounded-md";
  const hover_class = "hover:bg-white/[0.15] hover:backdrop-blur-[1px]";
  return (
    <div className="bg-[#191919] flex items-center px-2 py-[0.4rem] mt-[-1px] border-[#3B3A38] border-b-[0.1rem]">
      <div
        className={`flex items-center gap-1 px-2 py-2 ${hover_class} rounded-md`}
      >
        <img
          className="w-[2rem] object-cover cursor-pointer p-1 rounded-md"
          src={pluscircle_ico}
          alt=""
        />
        <p>New</p>
        <MdKeyboardArrowDown />
      </div>
      <hr className="border-l border-gray-500 h-6 mx-4" />
      <div className="flex items-center gap-6">
        <img
          className={`${img_class} ${hover_class}`}
          src={scissor_ico}
          alt=""
        />
        <img
          className={`${img_class} ${hover_class}`}
          src={clipboard_ico}
          alt=""
        />
        <img
          className={`${img_class} ${hover_class}`}
          src={rename_ico}
          alt=""
        />
        <img className={`${img_class} ${hover_class}`} src={share_ico} alt="" />
        <img
          className={`${img_class} ${hover_class}`}
          src={delete_ico}
          alt=""
        />
        <img
          className={`${img_class} ${hover_class}`}
          src={updown_ico}
          alt=""
        />
      </div>
      <hr className="border-l border-gray-500 h-6 mx-4" />
      <div>
        <img className={`${img_class} ${hover_class}`} src={dots_ico} alt="" />
      </div>
    </div>
  );
}
export default Explorer_extended_navbar;

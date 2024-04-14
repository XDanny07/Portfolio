import quick_acc_ico from "../../../assets/icons/quickaccess/quickaccess.png";
import { LiaGreaterThanSolid } from "react-icons/lia";
function Explorer_sidebar() {
  const img_class = "w-[1.3rem]";
  return (
    <div className="w-[22%] h-full bg-[#191919] mt-[-0.2px]">
      <div className="flex  gap-2 items-center">
        <LiaGreaterThanSolid />
        <img src={quick_acc_ico} className={img_class} alt="" />
        <p> Quick Access</p>
      </div>
    </div>
  );
}
export default Explorer_sidebar;

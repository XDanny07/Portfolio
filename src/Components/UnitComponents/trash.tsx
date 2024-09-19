import { useSelector, useDispatch } from "react-redux";
import useDragger from "../../hooks/useDragger";
import useAnim from "../../hooks/useAnim";
import trash_ico from "../../assets/icons/Desktop/recycle-bin-full.png";
import { trash_clicked } from "../actions";
// import angular_ico from "../../assets/icons/Desktop/angularjs-original.svg";

function Trash() {
  // const img_class = "fit-contain w-[50px] h-[50px] cursor-pointer";
  // const icon_div_class =
  "flex flex-col items-center gap-1 cursor-pointer hover:bg-white/[0.15] hover:backdrop-blur-[1px] hover:text-white p-2 rounded-md w-[80px] h-[80px] justify-center";

  const clicked = useSelector((state: any) => state.showtrash);
  const dispatch = useDispatch();
  useDragger("tab_trashbin", "trashbin");
  useAnim("trashbin", clicked);
  return (
    <div
      id="trashbin"
      className="hidden absolute top-[10%] rounded-lg w-[800px] h-[450px] cursor-pointer bg-transparent backdrop-blur-3xl"
    >
      <div
        id="tab_trashbin"
        className="w-[100%] h-[29px] rounded-t-lg bg-[#18110D] flex justify-between items-center text-white text-sm cursor-pointer"
      >
        <div className="px-2 font-bold flex items-center gap-2">
          <img src={trash_ico} className="w-[1.1rem]" alt="" />
          <p>Recycle Bin</p>
        </div>
        <div className="text-lg flex">
          <span className="hover:bg-[#232427] px-2">&#8722; </span>
          <span className="hover:bg-[#232427] px-2">&#x25A2;</span>
          <span
            className="hover:bg-red-700 px-2 rounded-tr-lg"
            onClick={() => dispatch(trash_clicked(false))}
          >
            &#x2715;
          </span>
        </div>
      </div>
      <div
        className="p-4
      "
      >
        {/* <div className={icon_div_class}>
          <img className={img_class} src={angular_ico} alt="" />
          <p>Angular</p>
        </div> */}
      </div>
    </div>
  );
}
export default Trash;

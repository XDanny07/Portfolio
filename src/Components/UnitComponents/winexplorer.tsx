import { useSelector, useDispatch } from "react-redux";
import useDragger from "../../hooks/useDragger";
import useAnim from "../../hooks/useAnim";
import { explorer_clicked } from "../actions";
import thispc from "../../assets/icons/Desktop/this_pc.ico";
import Explorer_navbar from "./explorercomponents/explorer_navbar";
import Explorer_extended_navbar from "./explorercomponents/explorer_extended_navbar";
import Explorer_sidebar from "./explorercomponents/explorer_sidebar";
import Explorer_content from "./explorercomponents/explorer_content";
function Winexplorer() {
  const clicked = useSelector((state: any) => state.showWinExplorer);
  const dispatch = useDispatch();
  useDragger("tab_winexplorer", "winexplorer");
  useAnim("winexplorer", clicked);
  return (
    <div
      id="winexplorer"
      className="hidden absolute top-[10%] rounded-lg w-[1000px] h-[600px] cursor-pointer bg-transparent backdrop-blur-3xl overflow-hidden"
    >
      <div
        id="tab_winexplorer"
        className="w-[100%] h-[29px] rounded-t-lg bg-[#18110D] flex justify-between items-center text-white text-sm cursor-pointer"
      >
        <div className="px-4 font-bold flex items-center gap-2 bg-[#262628] py-[0.3rem] rounded-t-lg">
          <img src={thispc} className="w-[1.1rem]" alt="" />
          <p>This PC</p>
        </div>
        <div className="text-lg flex">
          <span className="hover:bg-[#232427] px-2">&#8722; </span>
          <span className="hover:bg-[#232427] px-2">&#x25A2;</span>
          <span
            className="hover:bg-red-700 px-2 rounded-tr-lg"
            onClick={() => dispatch(explorer_clicked(false))}
          >
            &#x2715;
          </span>
        </div>
      </div>
      <div className="relative h-full ">
        <Explorer_navbar />
        <Explorer_extended_navbar />
        <div className="flex h-full">
          <Explorer_sidebar />
          <Explorer_content />
        </div>
      </div>
    </div>
  );
}
export default Winexplorer;

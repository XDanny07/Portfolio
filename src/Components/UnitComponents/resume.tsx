import useDragger from "../../hooks/useDragger";
import useAnim from "../../hooks/useAnim";
import { useSelector, useDispatch } from "react-redux";
import { resume_clicked } from "../actions";
import word_ico from "../../assets/icons/recommended/word.png";
function Resume() {
  const clicked = useSelector((state: any) => state.showResume);
  const dispatch = useDispatch();
  useDragger("tab_resume", "resume_container");
  useAnim("resume_container", clicked);
  return (
    <div
      id="resume_container"
      className="hidden absolute top-[10%] rounded-lg w-[800px] h-[450px] cursor-pointer bg-transparent backdrop-blur-3xl"
    >
      <div
        id="tab_resume"
        className="w-[100%] h-[29px] rounded-t-lg bg-[#18110D] flex justify-between items-center text-white text-sm cursor-pointer"
      >
        <div className="px-2 font-bold flex items-center gap-2">
          <img src={word_ico} className="w-[1.1rem]" alt="" />
          <p>Resume</p>
        </div>
        <div className="text-lg flex">
          <span className="hover:bg-[#232427] px-2">&#8722; </span>
          <span className="hover:bg-[#232427] px-2">&#x25A2;</span>
          <span
            className="hover:bg-red-700 px-2 rounded-tr-lg"
            onClick={() => dispatch(resume_clicked(false))}
          >
            &#x2715;
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Resume;

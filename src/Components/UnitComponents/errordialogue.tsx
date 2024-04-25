import { error_triggered } from "../actions";
import error_ico from "../../assets/icons/error/error.png";
import { useDispatch, useSelector } from "react-redux";
import errorsound from "../../assets/sounds/Windows_Error.mp3";
import useDragger from "../../hooks/useDragger";
import useAnim from "../../hooks/useAnim";
import { useEffect } from "react";

function Errordialogue() {
  const dispatch = useDispatch();
  const error_audio = new Audio(errorsound);
  const error = useSelector((state: any) => state.showerrordiag);
  useDragger("tab_errorbox", "errorbox");
  useAnim("errorbox", error.stat);
  useEffect(() => {
    if (error.stat) error_audio.play();
  }, [error.stat]);
  return (
    <div
      id="errorbox"
      className="z-[500] hidden absolute flex flex-col top-[30%] left-[42%] max-w-[25%] shadow-lg errorbox bg-white text-black rounded-md overflow-wrap"
    >
      <div
        id="tab_errorbox"
        className="error_title flex items-center justify-between bg-gray-200 rounded-t-md  cursor-pointer"
      >
        <p className="p-1">{error.title}</p>
        <span
          onClick={() => {
            dispatch(error_triggered({ ...error, stat: false }));
          }}
          className="text-md rounded-tr-md px-5 py-1 hover:bg-red-500 px-2"
        >
          &#x2715;
        </span>
      </div>
      <div className="relative error_msg py-5 px-3 gap-3 flex ">
        <img className="w-[2rem]" src={error_ico} alt="" />
        <p className="text-wrap">{error.msg}</p>
      </div>
      <div className="error_footer p-2 flex justify-end">
        <button
          className="border border-gray-300  px-7 rounded-sm hover:bg-blue-50 hover:border-blue-500"
          onClick={() => {
            dispatch(error_triggered({ ...error, stat: false }));
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default Errordialogue;

import { FaArrowRightLong } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { lock } from "../actions/index.tsx";
import { useDispatch } from "react-redux";
import userico from "../../assets/user.png";
import gsap from "gsap";
function Signin() {
  const dispatch = useDispatch();
  const [showpass, setShowpass] = useState(false);
  const enter = async (e: any) => {
    if (e.key === "Enter" || e === "Enter") {
      gsap.to(".lscreen", { opacity: 0, display: "none", duration: 0.5 });
      await new Promise((r) => setTimeout(r, 500));
      dispatch(lock(false));
    }
  };
  return (
    <div className="flex flex-col items-center gap-5">
      <img className="rounded-full w-[13rem]" src={userico} alt="usericon" />

      <span className="text-2xl font-bold">Visitor</span>
      <div className="relative mt-6">
        <input
          className=" outline-transparent focus:outline-0 font-bold border-0 focus:border-b-[3px] focus:border-blue-500 p-2 bg-gray-800 rounded-sm h-[2rem] outline-none w-[320px]"
          placeholder="Enter Anything"
          type={showpass ? "text" : "password"}
          onKeyDownCapture={(e) => enter(e)}
        />
        {!showpass ? (
          <IoEyeOutline
            onClick={() => setShowpass(!showpass)}
            className="cursor-pointer  transition-all hover:text-blue-600 text-slate-400 absolute right-6 top-0 m-2"
          />
        ) : (
          <IoEyeOffOutline
            onClick={() => setShowpass(!showpass)}
            className="cursor-pointer  transition-all hover:text-blue-600 text-slate-400 absolute right-6 top-0 m-2"
          />
        )}
        <FaArrowRightLong
          onClick={() => enter("Enter")}
          className="cursor-pointer hover:scale-[1.4] transition-all hover:text-blue-600 text-slate-400 absolute right-0 top-0 m-2"
        />
      </div>
    </div>
  );
}

export default Signin;

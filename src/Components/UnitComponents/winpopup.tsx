import edge from "../../assets/edge.png";
import vs from "../../assets/vs.png";
import userico from "../../assets/user.png";
import explorer_ico from "../../assets/icons/explorer/explorer.png";
import pictures_ico from "../../assets/icons/pictures/pictures.png";
import videos_ico from "../../assets/icons/videos/videos.png";
import { useSelector, useDispatch } from "react-redux";
import { IoPowerOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explorer_clicked } from "../actions";
import { reset_winclicked } from "../actions";
import { NavLink } from "react-router-dom";
function Winpopup() {
  const clicked = useSelector((state: any) => state.showwinpopup);
  const img_class = "w-[2.4rem] ";
  const p_class = "text-wrap";
  var power = false;
  const dispatch = useDispatch();
  useGSAP(() => {
    console.log(clicked);
    gsap.to(".winpop", {
      y: clicked ? -100 : 450,
      duration: 0.05,
      ease: "power4.out",
    });
  }, [clicked]);

  const icons_div =
    "p-2 rounded-md flex flex-col align-center  items-center bg-transparent hover:backdrop-blur-3xl cursor-pointer ";
  return (
    <div className="winpop w-[35%] text-white shadow-md absolute bottom-[-6%] left-[41.8%]  transition-all">
      <div className="rounded-t-xl mb-[-1px] flex gap-8 flex-col align-center justify-content-between bg-blend bg-slate-900/[0.6] backdrop-blur-3xl text-white  p-8">
        <input
          placeholder="Search"
          className="w-full bg-stone-800 rounded-full p-1 px-5 border-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          type="text"
        />
        <div className="flex justify-between items-center">
          <h3>Pinned</h3>
          <p className="bg-transparent backdrop-blur-3xl px-3 py-1 rounded-md">
            All apps <span className="ml-2">{">"}</span>
          </p>
        </div>
        <div>
          <div className="icons flex align-center gap-10 flex-wrap">
            <div
              className={icons_div}
              onClick={() => dispatch(explorer_clicked(true))}
            >
              <img className={img_class} src={explorer_ico} alt="" />
              <p className={p_class}>Explorer</p>
            </div>
            <NavLink
              to={"/Pictures"}
              className={icons_div}
              onClick={() => dispatch(explorer_clicked(true))}
            >
              <img src={pictures_ico} className={img_class} alt="" />
              <p className={p_class}>Pictures</p>
            </NavLink>
            <NavLink
              to={"/Videos"}
              className={icons_div}
              onClick={() => dispatch(explorer_clicked(true))}
            >
              <img src={videos_ico} className={img_class} alt="" />
              <p className={p_class}>Videos</p>
            </NavLink>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3>Recommended</h3>
            <p className="bg-transparent backdrop-blur-3xl px-3 py-1 rounded-md">
              More <span className="ml-2">{">"}</span>
            </p>
          </div>
          <div className="icons flex align-center gap-10 flex-wrap">
            <div className={icons_div}>
              <img src={edge} className={img_class} alt="" />
              <p>Edge</p>
            </div>
            <div className={icons_div}>
              <img src={vs} className={img_class} alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-slate-900/[0.7] backdrop-blur-xl rounded-b-xl py-3 px-11">
        <div className="flex gap-4 w-full items-center  cursor-pointer">
          <img className="w-[6%] rounded-full" src={userico} alt="" />
          <p>Omkar</p>
        </div>
        <div className="relative bg-transparent hover:backdrop-blur-3xl rounded-md">
          <div className="power_options hidden z-3 absolute flex flex-col p-1 bg-gray-800 w-fit text-nowrap top-[-40px] left-[-50px] rounded-md">
            <div className="flex hover:bg-gray-700 rounded-md cursor-pointer items-center gap-2 border-gray-500 border-b-2 p-2">
              <IoSettingsOutline />
              <p>Sign-in options</p>
            </div>
            <div className="flex hover:bg-gray-700 rounded-md cursor-pointer items-center gap-2 p-2 mt-1">
              <GoMoon />
              <p>Sleep</p>
            </div>
            <div
              onClick={async () => {
                gsap.to(".lscreen", {
                  opacity: 1,
                  display: "block",
                  duration: 0.5,
                });
                gsap.to(".power_options", { display: "none", duration: 0 });
                gsap.to(".power_options", { translateY: 0, duration: 0 });
                await new Promise((r) => setTimeout(r, 400));
                power = false;
                dispatch(reset_winclicked(false));
              }}
              className="flex hover:bg-gray-700 rounded-md cursor-pointer items-center gap-2 p-2 "
            >
              <CiLock />
              <p>Lock</p>
            </div>
          </div>
          <IoPowerOutline
            onClick={() => {
              power = !power;
              if (power) {
                gsap.to(".power_options", {
                  display: "block",
                  scale: 1,
                  opacity: 1,
                  translateY: -95,
                  duration: 0.2,
                });
              } else {
                gsap.to(".power_options", { display: "none", duration: 0 });
                gsap.to(".power_options", { translateY: 0, duration: 0 });
              }
            }}
            className="text-[3rem] p-3 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}
export default Winpopup;

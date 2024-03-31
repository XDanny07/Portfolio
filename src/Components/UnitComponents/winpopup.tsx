import edge from "../../assets/edge.png";
import vs from "../../assets/vs.png";
import userico from "../../assets/user.png";
import { useSelector } from "react-redux";
import { IoPowerOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Winpopup() {
  const clicked = useSelector((state: any) => state.showwinpopup);

  useGSAP(() => {
    console.log(clicked);
    gsap.to(".winpop", {
      y: clicked ? 0 : 450,
      duration: 0.05,
      ease: "power4.out",
    });
  }, [clicked]);

  const icons_div = "flex flex-col align-center justify-center text-center";
  return (
    <div className="winpop w-[35%] text-white absolute bottom-[8%] left-[41.8%]  transition-all">
      <div className="rounded-t-xl flex flex-col align-center justify-content-between bg-blend bg-slate-900/[0.6] backdrop-blur-3xl text-white  p-8">
        <input
          placeholder="Search"
          className="w-full bg-stone-800 rounded-full p-1"
          type="text"
        />
        <div>
          <h3>Pinned</h3>
          <div className="icons flex align-center gap-10 flex-wrap">
            <div className={icons_div}>
              <img src={edge} alt="" />
              <p>Edge</p>
            </div>
            <div className={icons_div}>
              <img src={vs} alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3>Recommended</h3>
          <div className="icons flex align-center gap-10 flex-wrap">
            <div className={icons_div}>
              <img src={edge} alt="" />
              <p>Edge</p>
            </div>
            <div className={icons_div}>
              <img src={vs} alt="" />
              <p>VS Code</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-slate-900/[0.7] backdrop-blur-xl rounded-b-xl p-5 px-11">
        <div className="flex gap-4 items-center">
          <img className="w-[5%] rounded-full" src={userico} alt="" />
          <p>User</p>
        </div>
        <IconContext.Provider value={{ size: "25px" }}>
          <IoPowerOutline />
        </IconContext.Provider>
      </div>
    </div>
  );
}
export default Winpopup;

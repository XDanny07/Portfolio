import { IconContext } from "react-icons";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
function Explorer_navbar() {
  const loc = useLocation();
  const path = loc.pathname.split("/");
  console.log(path);
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-md";
  return (
    <div className="explorer_navbar mt-[-1px] flex items-center gap-2 bg-[#262628] p-2 border-[#3B3A38] border-b-[0.1rem]">
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ color: "white", size: "2em" }}>
          <IoIosArrowRoundBack className={`${hover_class}`} />
          <IoIosArrowRoundForward className={`${hover_class}`} />
          <IoIosArrowRoundUp className={`${hover_class}`} />
        </IconContext.Provider>
        <IoReload className={`${hover_class} text-3xl p-1`} />
      </div>
      <div className="explorer-path w-[60%] h-[10%] bg-[#353130] p-1 rounded-md">
        <div className="flex items-center gap-2">
          <HiOutlineComputerDesktop className="text-xl ml-2" />
          <div className="flex">
            {path.map((p, index) => {
              if (p.length > 0) {
                return (
                  <div className="flex items-center" key={index}>
                    <RiArrowDropDownLine className="text-2xl m-0 -rotate-90" />
                    <p>{p}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="explorer-search w-[15rem] h-[10%] bg-[#353130] p-1 px-2 rounded-md">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Explorer_navbar;

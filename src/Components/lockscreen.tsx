import Dateclock from "./UnitComponents/dateclock";
import Signin from "./UnitComponents/signin";
import Lockscreensicons from "./UnitComponents/lockscreensicons";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Lockscreen() {
  const [click, setClick] = useState(false);
  useGSAP(() => {
    if (!click) return;

    gsap.to(".helpblur", {
      backdropFilter: "blur(10px)",
      duration: 0.5,
    });
    gsap.to(".signin , .icons", {
      y: 0,
      opacity: 1,
      duration: 0,
    });
    gsap.from(".signin , .icons", {
      opacity: 0,
      duration: 0.7,
    });
  }, [click]);
  return (
    <div>
      <div
        className="bg-lock w-[100vw] h-[100vh]"
        onClick={async () => {
          if (click) return;
          gsap.to(".dateclock , .icons", {
            y: -80,
            opacity: 0,
            duration: 0.2,
          });
          await new Promise((r) => setTimeout(r, 400));
          setClick(true);
        }}
      >
        <p className="helpblur w-[100%] h-[100%]"></p>
      </div>
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {!click ? (
          <div className="dateclock">
            <Dateclock />
          </div>
        ) : (
          <div className="signin">
            <Signin />
          </div>
        )}
      </div>
      <div className="icons absolute p-4 bottom-0 right-0">
        <Lockscreensicons />
      </div>
    </div>
  );
}
export default Lockscreen;

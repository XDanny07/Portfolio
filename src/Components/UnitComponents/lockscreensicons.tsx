import { HiBattery50 } from "react-icons/hi2";
import { CiWifiOn } from "react-icons/ci";
import { IoPowerOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function Lockscreensicons() {
  return (
    <div className="flex gap-4">
      <IconContext.Provider value={{ size: "25px" }}>
        <CiWifiOn />
        <HiBattery50 />
        <IoPowerOutline />
      </IconContext.Provider>
    </div>
  );
}
export default Lockscreensicons;

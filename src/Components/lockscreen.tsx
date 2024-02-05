import Dateclock from "./UnitComponents/dateclock";
import Signin from "./UnitComponents/signin";
function Lockscreen() {
  return (
    <>
      <div className="bg-stone-900 w-[100vw] h-[100vh]">
        <Dateclock />
        <Signin />
      </div>
    </>
  );
}
export default Lockscreen;

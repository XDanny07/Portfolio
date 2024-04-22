import vscode_ico from "../../../../assets/vs.png";
import ps_ico from "../../../../assets/icons/photoshop/photoshop.png";
function Explorer_tools() {
  const img_class = "w-[1.3rem]";
  return (
    <div className="text-sm m-1 ml-2">
      <div className="mb-4">Name</div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <img src={vscode_ico} alt="" className={img_class} />
          <p>Visual Studio Code</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={ps_ico} alt="" className={img_class} />
          <p>Photoshop</p>
        </div>
      </div>
    </div>
  );
}

export default Explorer_tools;

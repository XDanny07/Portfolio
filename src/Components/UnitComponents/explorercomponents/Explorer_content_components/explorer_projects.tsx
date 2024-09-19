import { FaGithub } from "react-icons/fa";

function Explorer_projects() {
  const hover_class =
    "hover:bg-white/[0.15] hover:backdrop-blur-[1px] rounded-sm cursor-pointer";
  return (
    <div className="text-sm m-1 ml-2">
      <div className="mb-4">Name</div>
      <div className="flex flex-col gap-2">
        <div className={`flex flex-col gap-2 ${hover_class}`}>
          <a
            href="https://github.com/XDanny07/PictoPals"
            target="new"
            className="flex items-center gap-3"
          >
            <FaGithub className="text-xl" />
            <p>Picto-Pals</p>
          </a>
        </div>
        <div className={`flex flex-col gap-2 ${hover_class}`}>
          <a
            href="https://github.com/XDanny07/BizHub"
            target="new"
            className="flex items-center gap-3"
          >
            <FaGithub className="text-xl" />
            <p>BizHub</p>
          </a>
        </div>
        <div className={`flex flex-col gap-2 ${hover_class}`}>
          <a
            href="https://github.com/XDanny07/DocMe"
            target="new"
            className="flex items-center gap-3"
          >
            <FaGithub className="text-xl" />
            <p>DocMe</p>
          </a>
        </div>
        <div className={`flex flex-col gap-2 ${hover_class}`}>
          <a
            href="https://github.com/XDanny07/Portfolio"
            target="new"
            className="flex items-center gap-3"
          >
            <FaGithub className="text-xl" />
            <p>Portfolio</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Explorer_projects;

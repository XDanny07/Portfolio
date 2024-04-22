import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import discord_ico from "../../../../assets/icons/discord/discord.png";
function Explorer_links() {
  return (
    <div className="text-sm m-1 ml-2">
      <div className="mb-4">Name</div>
      <div className="flex flex-col gap-2">
        <a
          href="https://www.linkedin.com/in/ombangar"
          target="new"
          className="flex items-center gap-3"
        >
          <FaLinkedin className="text-xl text-blue-500" />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/XDanny07"
          target="new"
          className="flex items-center gap-3"
        >
          <FaGithub className="text-xl" />
          <p>Github</p>
        </a>
        <NavLink to={"./"} className="flex items-center gap-3">
          <img src={discord_ico} className="w-[1.3rem] mr-[-1px]" />
          <p>Discord</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Explorer_links;

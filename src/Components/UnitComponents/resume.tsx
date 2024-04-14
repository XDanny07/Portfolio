import useDragger from "../../hooks/useDragger";
import useAnim from "../../hooks/useAnim";
import { useSelector, useDispatch } from "react-redux";
import { resume_clicked } from "../actions";
import word_ico from "../../assets/icons/recommended/word.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Resume() {
  const clicked = useSelector((state: any) => state.showResume);
  const dispatch = useDispatch();
  useDragger("tab_resume", "resume_container");
  useAnim("resume_container", clicked);
  return (
    <div
      id="resume_container"
      className="hidden absolute top-[10%] rounded-lg w-[1200px] h-[450px] bg-stone-900 overflow-hidden overflow-y-scroll scrollview-disable"
    >
      <div
        id="tab_resume"
        className="sticky top-0 left-0 right-0 w-[100%] h-[29px] rounded-t-lg bg-[#18110D] flex justify-between items-center text-white text-sm cursor-pointer cursor-pointer"
      >
        <div className="px-2 font-bold flex items-center gap-2">
          <img src={word_ico} className="w-[1.1rem]" alt="" />
          <p>Resume</p>
        </div>
        <div className="text-lg flex">
          <span className="hover:bg-[#232427] px-2">&#8722; </span>
          <span className="hover:bg-[#232427] px-2">&#x25A2;</span>
          <span
            className="hover:bg-red-700 px-2 rounded-tr-lg"
            onClick={() => dispatch(resume_clicked(false))}
          >
            &#x2715;
          </span>
        </div>
      </div>
      <div className="resume select-auto flex flex-col gap-4 bg-white w-[85%] px-[100px] py-[60px] mx-auto mt-[8%] text-black mt-[10%] mb-[10%] rounded-sm">
        <div className="personal-section ">
          <h1 className="text-3xl font-bold text-center">Omkar Bangar</h1>
          <div className="flex align-center justify-around underline">
            <div className="flex items-center gap-1">
              <FaPhoneAlt />
              <a className="text-md">+91 9766600801</a>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail />
              <a className="text-md" href="mailto:ombangar0@gmail.com">
                ombangar0@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaLinkedin />
              <a
                className="text-md"
                target="new"
                href="https://www.linkedin.com/in/ombangar"
              >
                linkedin.com/in/ombangar
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub />
              <a
                className="text-md"
                target="new"
                href="https://github.com/XDanny07"
              >
                github.com/XDanny07
              </a>
            </div>
          </div>
        </div>
        <div className="education-section">
          <p className="text-lg font-medium">Education</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <div className="flex justify-between">
              <p className="text-md font-medium">
                Lovely Professional University
              </p>
              <p>Expected 25 July</p>
            </div>
            <div className="flex justify-between">
              <p className="text-md italic">
                Bachelor of Technology in Computer Science & Engineering (CGPA:
                8.58 / 10.00)
              </p>
              <p className="text-md italic">Jalandhar, Punjab </p>
            </div>
          </div>
        </div>
        <div className="achievements-section">
          <p className="text-lg font-medium">Achievements</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <ol>
              <li>
                • Ranked AIR 2156 in CodeKaze-Sep’23 out of 50k+ participants.
              </li>
              <li>
                • Solved over 200+ questions on multiple coding platforms.
              </li>
              <li>
                • Ranked 8th/500+ in Grokking The Coding : Intra University
                Coding Contest.
              </li>
              <li>
                • Idea shortlisted for Smart India Hackathon 2023 screening
                round.
              </li>
              <li>• Infineon Hackathon : Defend The Kingdom Runner Up 2024</li>
            </ol>
          </div>
        </div>
        <div className="projects-section">
          <p className="text-lg font-medium">Projects</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <div className="web-development">
              <p className="text-md font-medium">
                Web Development{" "}
                <span className="text-sm font-normal italic">
                  | React.js, Angular, Node.js, Express.js, MongoDB, TailwindCSS
                </span>
              </p>
              <ol className="mx-4">
                <li>
                  • <span className="font-medium">KanoonKeHaath :</span> An
                  E-Portal For Providing Legal Services
                </li>
                <li>
                  • <span className="font-medium">Movie BookingWebsite :</span>
                  Frontend application used to replicate an movie booking
                  website using Angular and Bootstrap.
                </li>
              </ol>
            </div>
            <div className="Python mt-4">
              <p className="text-md font-medium">
                Python{" "}
                <span className="text-sm font-normal italic">
                  | Tkinter, Customtkinter, Turtle, MySQL, JSON
                </span>
              </p>
              <ol className="mx-4">
                <li>
                  •{" "}
                  <span className="font-medium">Book Management Systems :</span>{" "}
                  A LMS system that would allow users to create theri own
                  accounts, view available books, rent books, etc.
                </li>
                <li>
                  •
                  <span className="font-medium">
                    Snake Game , Ping Pong Game :
                  </span>{" "}
                  Simple games made using the turtle library.{" "}
                </li>
                <li>
                  • <span className="font-medium">PasswordManager :</span> A
                  program that allows users to store passwords for different
                  platforms and also generate strong passwords.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="technical-section">
          <p className="text-lg font-medium">Technical Skills</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <div className="flex gap-2">
              <p className="text-md font-medium">Languages :</p>
              <p className="text-md">C, C++, Python, JavaScript, Java</p>
            </div>
            <div className="flex gap-2">
              <p className="text-md font-medium">Web Technologies : </p>
              <p className="text-md">
                React.js, Node.js, Angular, Django, Express.js, Javascript,
                TailwindCSS, GSAP, jQuery, Bootstrap5
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-md font-medium">Concepts :</p>
              <p className="text-md">
                Operating System, Database And Management System, Computer
                Networks
              </p>
            </div>
          </div>
        </div>
        <div className="certifications-section">
          <p className="text-lg font-medium">Certifications</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <ol className="font-medium">
              <li>• Data Structures And Algorithms Essentials</li>
              <li>• Competitive Programming Essentials</li>
            </ol>
          </div>
        </div>
        <div className="hobbies-section">
          <p className="text-lg font-medium">Hobbies</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <ol>
              <li>• Playing Computer and Mobile Games </li>
              <li>• Surfing Internet </li>
              <li>• WorkingOut </li>
              <li>• Dancing </li>
              <li>• Cooking</li>
            </ol>
          </div>
        </div>
        <div className="languages-section">
          <p className="text-lg font-medium">Languages</p>
          <hr className="mb-1 border-gray-700" />
          <div className="mx-4">
            <ol>
              <li>• Hindi - Native</li>
              <li>• English - Fluent</li>
              <li>• Marathi - Native</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;

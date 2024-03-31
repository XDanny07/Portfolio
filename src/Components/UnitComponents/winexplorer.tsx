import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

function Winexplorer() {
  const clicked = useSelector((state: any) => state.showWinExplorer);
  const tabRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<Boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    if (!tabRef.current) return;
    const tab = tabRef.current;
    const homepagetab = document.querySelector(".homepage") as HTMLElement;
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = tab.offsetLeft;
      coords.current.lastY = tab.offsetTop;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const diffX = e.clientX - coords.current.startX + coords.current.lastX;
      const diffY = e.clientY - coords.current.startY + coords.current.lastY;

      tab.style.left = `${diffX}px`;
      tab.style.top = `${diffY}px`;
    };

    tab.addEventListener("mousedown", onMouseDown);
    tab.addEventListener("mouseup", onMouseUp);
    homepagetab.addEventListener("mousemove", onMouseMove);

    const cleanup = () => {
      tab.removeEventListener("mousedown", onMouseDown);
      tab.removeEventListener("mouseup", onMouseUp);
      homepagetab.removeEventListener("mousemove", onMouseMove);
    };
    return cleanup;
  });

  useGSAP(() => {
    gsap.to(".winexplorer", {
      display: clicked ? "block" : "none",
    });
  }, [clicked]);
  return (
    <div
      ref={tabRef}
      className="winexplorer w-[50%] h-[50%] cursor-pointer bg-transparent backdrop-blur-3xl border border-2 absolute transition-all"
    >
      <div className="w-[100%] h-[8%] bg-black"></div>
    </div>
  );
}
export default Winexplorer;

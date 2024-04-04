import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function useAnim(id: string, state: any) {
  useGSAP(() => {
    if (state) {
      const tl = gsap.timeline();
      tl.from(`#${id}`, {
        scale: 0.6,
        duration: 0.2,
      }).to(`#${id}`, {
        display: "block",
        duration: 0.2,
        opacity: 1,
        scale: 1,
      });
    } else {
      gsap.to(`#${id}`, {
        display: "none",
        scale: 0.9,
        duration: 0.1,
        opacity: 0,
      });
    }
  }, [state]);
}
export default useAnim;

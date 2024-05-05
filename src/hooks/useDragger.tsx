import { useEffect, useRef } from "react";

function useDragger(from: string, id: string): void {
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
    const fromElement = document.getElementById(`${from}`) as HTMLDivElement;
    const target = document.getElementById(`${id}`) as HTMLDivElement;
    if (!target) throw new Error("Element not found");
    const container = target.parentElement as HTMLElement;
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = () => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const diffX = e.clientX - coords.current.startX + coords.current.lastX;
      const diffY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.left = `${diffX}px`;
      target.style.top = `${diffY}px`;
    };

    fromElement.addEventListener("mousedown", onMouseDown);
    fromElement.addEventListener("mouseup", onMouseUp);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);

    const cleanup = () => {
      fromElement.removeEventListener("mousedown", onMouseDown);
      fromElement.removeEventListener("mouseup", onMouseUp);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
    };
    return cleanup;
  }, [id]);
}

export default useDragger;

import { foo } from "pokered.ts";
import { useEffect, useRef, type Ref } from "react";
import "./app.css";

function App() {
  const test: Ref<string> = useRef("");
  const canvas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    foo()().then((images) => {
      let i = 0;
      Object.entries(images).forEach((element) => {
        if (element[0].includes("char")) {
          const ctx = canvas.current?.getContext("2d");
          if (ctx) {
            ctx.drawImage(element[1], i, 0);
            i += element[1].width;
          }
        }
      });
    });
  }, []);
  return (
    <>
      <div>
        <canvas ref={canvas} />
      </div>
      <div>{test.current}</div>
    </>
  );
}

export default App;

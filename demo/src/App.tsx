import { createGame } from "pokered.ts";
import { useEffect, useRef, type Ref } from "react";
import "./app.css";

function App() {
  const test: Ref<string> = useRef("");
  const canvas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvas.current) {
      createGame(canvas.current).then((x) => {
        x.drawImage("pokemon-front-zapdos");
      });
    }
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

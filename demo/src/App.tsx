import { createGame } from "pokered.ts";
import { useEffect, useRef } from "react";
import "./app.css";

function App() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    if (canvas.current) {
      createGame({
        screen: canvas.current,
      }).then((x) => {
        x.start();
      });
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="column">
          <canvas ref={canvas} className="pixel-canvas" />
        </div>
        <div className="column"></div>
      </div>
    </>
  );
}

export default App;

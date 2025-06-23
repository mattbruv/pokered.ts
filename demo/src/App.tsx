import { createGame } from "pokered.ts";
import { useEffect, useRef } from "react";
import "./app.css";

function App() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const debugCanvas = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (canvas.current && debugCanvas.current) {
      createGame(canvas.current, debugCanvas.current).then((x) => {
        x.drawImage("pokemon-front-zapdos");
      });
    }
  }, []);
  return (
    <>
      <div className="container">
        <div className="column">
          <canvas ref={canvas} className="pixel-canvas" />
        </div>
        <div className="column">
          <canvas ref={debugCanvas} className="pixel-canvas" />
        </div>
      </div>
    </>
  );
}

export default App;

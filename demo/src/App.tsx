// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { Box, Flex, MantineProvider } from "@mantine/core";

import { createGame, type DebugCallbacks, type DebugState } from "pokered.ts";
import { useEffect, useRef, useState } from "react";

import "./app.css";
import GameDebugPanel from "./Debug";

function App() {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [debugCallbacks, setDebugCallbacks] = useState<DebugCallbacks | null>(
    null
  );
  const [debugState, setDebugState] = useState<DebugState | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    if (canvas.current) {
      createGame({
        screen: canvas.current,
        debug: {
          onDebugStateChange(newState) {
            setDebugState(newState);
          },
        },
      }).then((game) => {
        setDebugCallbacks(game.getDebugCallbacks());
        game.start();
      });
    }
  }, []);
  return (
    <MantineProvider>
      <Flex direction="row" h="100vh" w="100vw">
        <Box p={"sm"} w="50%" h="100%">
          <canvas ref={canvas} className="pixel-canvas" />
        </Box>
        <Box p={"sm"} w="50%" h="100%">
          {debugCallbacks && debugState && (
            <GameDebugPanel callbacks={debugCallbacks} state={debugState} />
          )}
        </Box>
      </Flex>
      <div className="container">
        <div className="column"></div>
      </div>
    </MantineProvider>
  );
}

export default App;

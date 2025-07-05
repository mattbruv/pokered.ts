// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import { Box, Flex, MantineProvider } from "@mantine/core";

import { createGame } from "pokered.ts";
import { useEffect, useRef } from "react";

import "./app.css";
import GameDebugPanel from "./Debug";

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
    <MantineProvider>
      <Flex direction="row" h="100vh" w="100vw">
        <Box p={"sm"} w="50%" h="100%">
          <canvas ref={canvas} className="pixel-canvas" />
        </Box>
        <Box p={"sm"} w="50%" h="100%">
          <GameDebugPanel />
        </Box>
      </Flex>
      <div className="container">
        <div className="column"></div>
      </div>
    </MantineProvider>
  );
}

export default App;

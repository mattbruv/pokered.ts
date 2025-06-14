import { foo } from "pokered.ts";

function App() {
  const bar = foo();
  return (
    <>
      <div>Hi world</div>
      <div>{bar["pokemon-back-alakazamb"]}</div>
    </>
  );
}

export default App;

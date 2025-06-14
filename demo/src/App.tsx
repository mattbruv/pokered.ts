import { foo } from "pokered.ts";

function App() {
  const bar = foo(1, -2);
  return (
    <>
      <div>Hi world</div>
      <div>{bar}</div>
    </>
  );
}

export default App;

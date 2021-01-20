import { useContext } from "react";
import { context } from "./components/provider";
import "./App.css";
import C from "./components/C";
import B from "./components/B";

function App() {
  const { name, count, setCount } = useContext(context);
  return (
    <div className="App">
      <h1
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </h1>
      <C />
      <hr />
      <B />
    </div>
  );
}

export default App;

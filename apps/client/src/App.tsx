import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "antd";

function App() {
  // const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreeting);
  }, []);

  return (
    <div className="App bg-black">
      <Button>hi</Button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{greeting}</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

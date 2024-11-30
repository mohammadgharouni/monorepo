import { Progress } from "antd";
import { lazy, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DentoRoutes } from "./core/constants/routes";

const Login = lazy(() => import("./components/pages/login"));
function App() {
  // const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreeting);
  }, []);
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <div className="App bg-black">
        <Routes>
          {isLoggedIn ? (
            <Route path="*" element={<Navigate to={"/"} replace />} />
          ) : (
            <>
              <Route path={DentoRoutes.login.create()} element={Login} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

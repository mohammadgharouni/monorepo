import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DentoRoutes } from "./core/constants/routes";

const Login = lazy(() => import("./components/pages/login"));
const Register = lazy(() => import("./components/pages/register"));
function App() {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {isLoggedIn ? (
            <Route path="*" element={<Navigate to={"/"} replace />} />
          ) : (
            <>
              <Route path={DentoRoutes.login.create()} element={<Login />} />
              <Route
                path={DentoRoutes.register.create()}
                element={<Register />}
              />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

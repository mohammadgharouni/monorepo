import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DentoRoutes } from "./core/constants/routes";
import useAuthStore from "@/core/store/auth";

const Login = lazy(() => import("./components/pages/login"));
const Register = lazy(() => import("./components/pages/register"));
const Dashboard = lazy(() => import("./components/pages/dashboard"));

function App() {
  const { accessToken } = useAuthStore();
  const isLoggedIn = !!accessToken;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {isLoggedIn ? (
            <>
              <Route
                path={DentoRoutes.dashboard.create()}
                element={<Dashboard />}
              />

              <Route
                path="*"
                element={
                  <Navigate to={DentoRoutes.dashboard.create()} replace />
                }
              />
            </>
          ) : (
            <>
              <Route path={DentoRoutes.login.create()} element={<Login />} />
              <Route
                path={DentoRoutes.register.create()}
                element={<Register />}
              />

              <Route
                path="*"
                element={<Navigate to={DentoRoutes.login.create()} replace />}
              />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

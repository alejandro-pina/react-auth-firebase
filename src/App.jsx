import { Routes, Route } from "react-router-dom";
import {
  HOME,
  LOGIN,
  PRIVATE,
  PRIVATEPATH,
  PROFILE,
  REGISTER,
} from "./config/routes/paths";

import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";
import Profile from "./pages/Profile";
import Private from "./pages/Private";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/404";

import "./assets/css/root.css";
import "./assets/css/styles.css";

const App = () => {
  return (
    <Routes>
      <Route index path={HOME} element={<Home />} />
      <Route element={<PublicRoute />}>
        <Route path={LOGIN} element={<Login />} />
        <Route path={REGISTER} element={<Register />} />
      </Route>

      <Route path={PRIVATEPATH} element={<PrivateRoute />}>
        <Route path={PRIVATE} element={<Private />} />
        <Route path={PROFILE} element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

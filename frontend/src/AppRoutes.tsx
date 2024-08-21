import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./auth/ProtectedRoute";
import MainPage from "./pages/MainPage";
import PayrollPage from "./pages/PayrollPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={isLoggedIn ? <MainPage /> : <HomePage />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/:userId/payroll" element={<PayrollPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

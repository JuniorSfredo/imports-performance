import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import RegisterDetailsPage from "../pages/auth/RegisterDetailsPage";
import { RegisterFlow } from "../pages/auth/RegisterFlow";
import { Unauthorized } from "../pages/unauthorized/Unauthorized";
import { RegisterDetailsGuard } from "./guards/RegisterGuard";
import { HomePage } from "../pages/home/Home";
import { LoginGuard } from "./guards/LoginGuard";
import { Services } from "../pages/services/Services";
import { RequestServicePage } from "../pages/request-service/RequestServicePage";
import { RegisterVehiclePage } from "../pages/register-vehicle/RegisterVehiclePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<RegisterFlow />}>
        <Route
          path="/auth/login"
          element={
            <LoginGuard>
              <AuthPage />
            </LoginGuard>
          }
        />
        <Route
          path="/auth/login/register"
          element={
            <RegisterDetailsGuard>
              <RegisterDetailsPage />
            </RegisterDetailsGuard>
          }
        />
      </Route>
      <Route path="/services" element={<Services />} />
      <Route path="/services/request-service" element={<RequestServicePage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/register-vehicle" element={<RegisterVehiclePage />} />
    </Routes>
  );
};

export default AppRoutes;

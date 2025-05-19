import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validateRefreshToken } from "../../api/services/validateRefreshToken";
import { SpinnerLoading } from "../../components/spinner-loading/SpinnerLoading";

export const LoginGuard = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const response = await validateRefreshToken();

      if (response.status === 200 && response.success) {
        setIsAuthenticated(true);
        navigate("/");
        setLoading(false);
        return;
      } else {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
    }

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <>
        <SpinnerLoading></SpinnerLoading>
      </>
    );
  }

  return <>{!isAuthenticated && children}</>;
};

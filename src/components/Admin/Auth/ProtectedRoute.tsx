import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { getSessionRequest } from "../../../services/authService";

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await getSessionRequest();
        setIsAuthenticated(!!session);
      } catch (error) {
        console.error("خطا در بررسی ورود کاربر:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkSession();
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
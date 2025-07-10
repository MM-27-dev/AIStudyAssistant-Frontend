/* eslint-disable no-unused-vars */
// src/HOC/WithAuth.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setUser, clearUser, setLoading } from "../Redux/userSlice";
import { AuthService } from "../Services/authServices";

export default function WithAuth({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(setLoading(true));
      let attempts = 0;

      const tryFetch = async () => {
        try {
          const response = await AuthService.getCurrentUser(); // axios returns parsed JSON
          console.log("User Details", response.data.data);
          dispatch(setUser(response.data.data)); // directly use response.data
          return true;
        } catch (err) {
          if (err.response?.status === 401 || err.response?.status === 403) {
            return false;
          }
          console.error("Unexpected error:", err);
          return false;
        }
      };

      const tryRefreshToken = async () => {
        try {
          await AuthService.getRefreshToken();
          return true;
        } catch (err) {
          console.warn("Token refresh failed:", err);
          return false;
        }
      };

      let success = await tryFetch();

      while (!success && attempts < 3) {
        attempts++;
        const refreshed = await tryRefreshToken();
        if (!refreshed) break;
        success = await tryFetch();
      }

      if (!success) {
        dispatch(clearUser());
        navigate("/login", { replace: true });
      }
    };

    fetchUser();
  }, [location.pathname, dispatch, navigate]);

  if (loading) return <div>Loading...</div>;

  return <>{children}</>;
}

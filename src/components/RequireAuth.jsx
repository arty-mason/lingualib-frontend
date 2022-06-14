import React from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth(props) {
  const isLoggedIn = false;
  if (isLoggedIn) {
    return props.children;
  }
  return <Navigate to="/login" replace />;
}

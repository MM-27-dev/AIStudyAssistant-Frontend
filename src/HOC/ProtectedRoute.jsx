// src/HOC/ProtectedRoute.jsx

import WithAuth from "./withAuth";

export default function ProtectedRoute({ children }) {
  return <WithAuth>{children}</WithAuth>;
}

import { Navigate, Route, Routes } from "react-router-dom";

import CustomerLogin from "@/pages/customer/CustomerLogin";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/customer-login" replace />} />
      <Route path="/customer-login" element={<CustomerLogin />} />
      <Route path="*" element={<Navigate to="/customer-login" replace />} />
    </Routes>
  );
}

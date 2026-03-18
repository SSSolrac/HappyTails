import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ActivityHistory from "./pages/ActivityHistory";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import PromotionsLoyalty from "./pages/PromotionsLoyalty";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/activity-history" element={<ActivityHistory />} />
        <Route path="/promotions-loyalty" element={<PromotionsLoyalty />} />
      </Routes>
    </Router>
  );
}

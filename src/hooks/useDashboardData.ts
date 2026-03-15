import { useMemo, useState } from "react";
import { archiveOrder, getDashboardOrders, getOrderQuantity } from "@/services/dashboardService";
import type { DashboardStat, Order } from "@/types/dashboard";

const dashboardStats: DashboardStat[] = [
  { label: "Today's Orders", value: "42" },
  { label: "Revenue", value: "₱7,540" },
  { label: "Active Tables", value: "6" },
  { label: "Menu Items", value: "57" },
  { label: "Low Stock", value: "3 Items", tone: "warning" },
  { label: "Loyalty Members", value: "18 Today", tone: "success" },
];

export function useDashboardData() {
  const [orders, setOrders] = useState<Order[]>(() => getDashboardOrders());

  const stats = useMemo(() => dashboardStats, []);

  const acceptOrder = (order: Order) => {
    archiveOrder(order, "Accepted");
    setOrders((prevOrders) => prevOrders.filter((item) => item.id !== order.id));
  };

  const declineOrder = (order: Order) => {
    archiveOrder(order, "Declined");
    setOrders((prevOrders) => prevOrders.filter((item) => item.id !== order.id));
  };

  return {
    orders,
    stats,
    acceptOrder,
    declineOrder,
    getOrderQuantity,
  };
}

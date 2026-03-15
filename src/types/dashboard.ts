export interface OrderItem {
  name: string;
  qty: number;
}

export interface Order {
  id: string;
  customer: string;
  items: OrderItem[];
  type: "Dine-In" | "Delivery" | "Pickup";
  mop: "GCash" | "Cash" | "Card";
  time: string;
  status?: "Accepted" | "Declined";
}

export interface DashboardStat {
  label: string;
  value: string;
  tone?: "default" | "warning" | "success";
}

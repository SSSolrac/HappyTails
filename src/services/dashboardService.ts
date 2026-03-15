import type { Order } from "@/types/dashboard";

const ORDERS_STORAGE_KEY = "orders";

const initialOrders: Order[] = [
  {
    id: "ORD2001",
    customer: "Guest",
    items: [
      { name: "Caramel Macchiato", qty: 2 },
      { name: "Hot Matcha Latte", qty: 1 },
    ],
    type: "Dine-In",
    mop: "GCash",
    time: "9:15 AM",
  },
  {
    id: "ORD2002",
    customer: "Andrea Lopez",
    items: [
      { name: "Chicken Cordon Bleu with Rice", qty: 1 },
      { name: "Iced Latte", qty: 1 },
    ],
    type: "Delivery",
    mop: "Cash",
    time: "9:20 AM",
  },
  {
    id: "ORD2003",
    customer: "Guest",
    items: [{ name: "Hot Americano", qty: 1 }],
    type: "Pickup",
    mop: "Card",
    time: "9:28 AM",
  },
];

export function getDashboardOrders(): Order[] {
  return initialOrders;
}

export function archiveOrder(order: Order, status: "Accepted" | "Declined"): void {
  const existingOrders = JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY) ?? "[]") as Order[];
  existingOrders.push({ ...order, status });
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(existingOrders));
}

export function getOrderQuantity(order: Order): number {
  return order.items.reduce((sum, item) => sum + item.qty, 0);
}

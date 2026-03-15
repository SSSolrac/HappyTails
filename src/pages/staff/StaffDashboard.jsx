import "./StaffDashboard.css";
import { DashboardLayout, KPICard, CommandBar, MobileNav, Button } from "@/components";
import { useDashboardData } from "@/hooks/useDashboardData";

const quickLinks = [
  { label: "Orders", to: "/orders" },
  { label: "Inventory", to: "/inventory" },
  { label: "Customers", to: "/customers" },
];

function StaffDashboard() {
  const { orders, stats, acceptOrder, declineOrder, getOrderQuantity } = useDashboardData();

  return (
    <DashboardLayout>
      <CommandBar title="Staff Dashboard" subtitle="Happy Tails Pet Café Management System" />
      <MobileNav links={quickLinks} />

      <section className="stats">
        {stats.map((stat) => (
          <KPICard key={stat.label} stat={stat} />
        ))}
      </section>

      <div className="content">
        <div className="card">
          <h2>New Orders</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Qty</th>
                <th>Order Type</th>
                <th>MOP</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <div key={`${item.name}-${index}`}>
                        {item.name} x{item.qty}
                      </div>
                    ))}
                  </td>
                  <td>{getOrderQuantity(order)}</td>
                  <td>{order.type}</td>
                  <td>{order.mop}</td>
                  <td>{order.time}</td>
                  <td className="action-buttons">
                    <Button onClick={() => acceptOrder(order)}>Accept</Button>
                    <Button variant="danger" onClick={() => declineOrder(order)}>
                      Decline
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StaffDashboard;

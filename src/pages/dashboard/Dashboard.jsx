import { useAuth } from "../../context/useAuth";
import StudentDashboard from "../dashboard/StudentDashboard";
import ClientDashboard from "../dashboard/ClientDashboard";

function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <section className="dashboard-page">
      <h1>Welcome, {user.name}</h1>

      {user.role === "student"
        ? <StudentDashboard user={user} />
        : <ClientDashboard />
      }
    </section>
  );
}

export default Dashboard;

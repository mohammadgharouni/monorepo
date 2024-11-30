import { Button } from "antd";
import useAuthStore from "@/core/store/auth";

const Dashboard = () => {
  const { clearUser } = useAuthStore();
  return (
    <div className="mx-auto mt-10 max-w-lg rounded border p-5 shadow-lg">
      <h1 className="mb-5 text-2xl font-semibold">Dashboard</h1>
      <Button onClick={clearUser}>log out</Button>
    </div>
  );
};

export default Dashboard;

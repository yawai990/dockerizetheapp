import React from "react";
import loginRequiredInserver from "../protected/Protected";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
  await loginRequiredInserver();

  return <div>Dashboard</div>;
};

export default Dashboard;

import React from "react";

import { useSelector } from "react-redux";

import Layout from "../../components/Layout";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Layout>
      <h1>Hi {user?.name},</h1>
      <h2>Welcome to Dashboard</h2>
    </Layout>
  );
};

export default Dashboard;

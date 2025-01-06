"use client";
// import { useUserList } from "@/services/user";
import { useUserStore } from "@/stores/useStore";
import React from "react";

const DashboardPage = () => {
  const { filters } = useUserStore();

  // const { data: users } = useUserList({
  //   skip: filters.skip,
  //   limit: filters.limit,
  // });

  // console.log("⭐ users", users);
  return <div>DashboardPage</div>;
};

export default DashboardPage;

import React from "react";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { LeadManagementPage } from "./leadManagement/LeadManagementPage";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const sideBarOpenClose = useSelector((state) => state.sideBarOpenClose);
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {sideBarOpenClose ? <NavBar /> : <></>}
        <LeadManagementPage />
      </div>
    </>
  );
};

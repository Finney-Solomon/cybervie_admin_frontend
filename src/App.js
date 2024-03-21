import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { LeadManagementPage } from "./pages/leadManagement/LeadManagementPage";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { WelcomePage } from "./pages/WelcomePage";
import { AlertBox } from "./components/AlertBox";
import { SnackBarNotification } from "./components/SnackBarNotification";
import { BatchIndexPage } from "./pages/batchManagements/BatchIndexPage";

function App() {
  const user = useSelector((state) => state?.userLogin);
  const sideBarOpenClose = useSelector((state) => state.sideBarOpenClose);

  // Check if user is logged in or has email ID
  const isLoggedIn = user && ( user.email);
console.log(user,"user")
  return (
    <div  className="App">
      <BrowserRouter>
        <Header />

        {isLoggedIn ? (
          <div style={{display:"flex"}}>
            {sideBarOpenClose && <NavBar userType={user?.userType} />}
            <div
              style={{
                marginLeft:  "0",width:"100%"
              }}
            >
              <Routes>
                <Route path="/welcome" element={<WelcomePage />} />
                {isLoggedIn && user.userType === "admin" && (
                  <Route
                    path="/lead-management"
                    element={<LeadManagementPage />}
                  />
                )}
                <Route path="/batch" element={<BatchIndexPage />} />C
                <Route path="/title2" element={<HomePage />} />
              </Routes>
            </div>
          </div>
        ) : (
          <>
            <HomePage />
          </>
        )}
      </BrowserRouter>
      {
        <>
        <AlertBox/>
        <SnackBarNotification/>
        </>
      }
    </div>
  );
}

export default App;

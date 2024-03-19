import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PageServices } from "./pages/PageServices/PageServices";
import { ClientHomePage } from "./pages/ClientHomePage/ClientHomePage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <>
      {/* <PageServices /> */}
      {/* <ClientHomePage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ClientHomePage />} />
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

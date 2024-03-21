import "./App.scss";

import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import { PageServices } from "./pages/PageServices/PageServices";
import { ClientHomePage } from "./pages/ClientHomePage/ClientHomePage";
import { UserDashboard } from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <>
      {/* <PageServices /> */}
      {/* <ClientHomePage /> */}
      <HashRouter>
        <Routes>
          <Route path="" element={<ClientHomePage />} />
          <Route path="/dashboard/*" element={<UserDashboard />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

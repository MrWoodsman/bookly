import "./UserDashboard.scss";

import { DeafaultNavbar } from "../../components/Navbars/DeafaultNavbar/DeafaultNavbar";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function UserDashboard() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (isLogin) {
      console.log("zalogowany uzytkownik");
    } else {
      navigate("/dashboard/login"); // Przekieruj użytkownika na /dashboard/login
    }
  }, [isLogin]);

  return (
    <Routes>
      <Route path="/" element={<p>Dashboard</p>} />
      <Route path="/login" element={<LoginOrRegister />} />
      <Route path="/register" element={<p>Rejestracja</p>} />
    </Routes>
  );
}

function LoginOrRegister() {
  return (
    <div className="login_or_register">
      <DeafaultNavbar />
      <div className="hero_wrap">
        <div className="content">
          <h2>Posiadasz już konto? Zaloguj się.</h2>
          <div className="input_wrap">
            <label>E-mail</label>
            <input type="text" />
          </div>
          <div className="input_wrap">
            <label>Hasło</label>
            <input type="text" />
          </div>
          <p className="register_link">
            <Link to={"/dashboard/register"}>
              Nie posiadasz konta? Utwórz za darmo!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import "../DeafaultNavbarstyle.scss";

export function DeafaultNavbar() {
  const navigate = useNavigate();

  return (
    <section className="home_page_navbar">
      <div className="content">
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Bookly
        </h1>
      </div>
    </section>
  );
}

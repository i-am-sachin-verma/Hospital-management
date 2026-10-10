import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-hero" aria-label="Patient care management portal">
        <img
          className="home-hero__image"
          src={`${process.env.PUBLIC_URL}/hospital%20image%20-%20Copy.jpg`}
          alt="Aerial view of a modern hospital campus"
        />
        <div className="home-hero__actions">
          <Button
            className="home-hero__button"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Home;

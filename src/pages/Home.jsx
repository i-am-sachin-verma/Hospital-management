import React from "react";
import myvideo from "./hospital.mp4";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <Card
        className="bg-dark text-white"
        style={{
          height: "100vh",
          overflow: "hidden",
          borderRadius: "0",
          position: "relative",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={myvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom right, rgba(0,0,50,0.7), rgba(0,0,0,0.6))",
            zIndex: 1,
          }}
        ></div>

        {/* Hero Section */}
        <Card.ImgOverlay
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ zIndex: 2, padding: "0 20px" }}
        >
          {/* Main Title */}
          <Card.Title
            style={{
              fontSize: "6.5vh",
              fontWeight: "900",
              color: "#ffffff",
              textShadow: "3px 3px 12px rgba(0,0,0,0.9)",
              letterSpacing: "1px",
              marginBottom: "10px",
            }}
          >
            Empowering <span style={{ color: "#4dabf7" }}>Smarter</span> Patient Care
          </Card.Title>

          {/* Tagline */}
          <h5
            style={{
              color: "#d0d0d0",
              fontWeight: "500",
              marginBottom: "20px",
              fontSize: "2.5vh",
            }}
          >
            Your trusted digital healthcare companion
          </h5>

          {/* Subtitle */}
          <Card.Text
            style={{
              fontSize: "2.6vh",
              fontWeight: "400",
              color: "#eaeaea",
              maxWidth: "750px",
              lineHeight: "1.6",
              marginBottom: "30px",
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            Seamlessly manage patients, track allotments, and access medical records — 
            all in one secure and easy-to-use platform designed for modern healthcare.
          </Card.Text>

          {/* CTA Button */}
          <Button
            size="lg"
            style={{
              fontWeight: "600",
              padding: "14px 36px",
              borderRadius: "40px",
              background:
                "linear-gradient(135deg, #007bff 0%, #00c6ff 100%)",
              border: "none",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #0056b3 0%, #0090cc 100%)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #007bff 0%, #00c6ff 100%)")
            }
            onClick={() => {
              navigate('/login')
            }}
          >
            Get Started
          </Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;

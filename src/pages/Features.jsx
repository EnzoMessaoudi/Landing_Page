import "./Features.css";
import logo from "../assets/Logo_512x353.webp";
import loginImage from "../assets/Register.png";
import ExploreImage from "../assets/explore.png";
import ForumImage from "../assets/forum.png";
import { Link } from "react-router-dom";

function Features() {
  return (
    <div className="features-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo-container">
        <img src={logo} alt="ShareUp" />
        </div>

        <nav>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        </nav>
      </header>

      {/* ================= TITLE ================= */}

      <section className="features-title">

        <h1>Features</h1>

        <p>
          Discover the main features available in ShareUp.
        </p>

      </section>

      {/* ================= FEATURE 1 ================= */}

      <section className="feature-card">

        <div className="feature-image">
          <img src={loginImage} alt="Login Feature" />
        </div>

        <div className="feature-content">

          <h2>Account Creation & Login</h2>

          <p>
            Create an account in just a few clicks and securely log in to
            access all ShareUp features. Authentication allows users to
            manage their products and interact with the community.
          </p>

        </div>

      </section>

      {/* ================= FEATURE 2 ================= */}

      <section className="feature-card reverse">

        <div className="feature-image">
          <img src={ExploreImage} alt="Login Feature" />
        </div>

        <div className="feature-content">

          <h2>Create a Product</h2>

          <p>
            Publish fruits, vegetables, herbs or homemade products to let
            nearby users know what you have available. Creating a product
            only takes a few seconds.
          </p>

        </div>

      </section>

      {/* ================= FEATURE 3 ================= */}

      <section className="feature-card">

        <div className="feature-image">
          <img src={ForumImage} alt="Login Feature" />
        </div>

        <div className="feature-content">

          <h2>Community Forum</h2>

          <p>
            Share experiences, ask gardening questions and exchange advice
            with other members through the integrated community forum.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Features;

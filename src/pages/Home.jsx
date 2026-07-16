import "./Home.css";
import logo from "../assets/Logo_512x353.webp";
import background from "../assets/Fond.webp";
import { Link } from "react-router-dom";

function Home() {
  const handleLaunch = () => {
    alert("The application is not deployed yet.");
  };
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${background})` }}
    >
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

      <section className="hero">

        <div className="hero-card">

          <img
            src={logo}
            alt="ShareUp Logo"
            className="hero-logo"
          />

          <p>
            An application for sharing garden goods.
          </p>
          <p>
            ShareUp is the application to share all garden treasures and exchange on subjects about garden !
          </p>

          <p>
            What are you waiting for ? Go try it !
          </p>

        <button className="launch-btn" onClick={handleLaunch}>
          Launch Application
        </button>

        </div>

      </section>
    </div>
  );
}

export default Home;
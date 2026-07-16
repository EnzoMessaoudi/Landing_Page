import "./About.css";
import logo from "../assets/Logo_512x353.webp";

function About() {
  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="logo-container">
        <img src={logo} alt="ShareUp" />
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/about">About</a>
        </nav>

      </header>

      {/* ================= TITLE ================= */}

      <section className="about-title">

        <h1>About ShareUp</h1>

        <p>
          Learn more about the project and its creators.
        </p>

      </section>

      {/* ================= PROJECT STORY ================= */}

      <section className="about-card">

        <h2>Project Inspiration</h2>
        <p>

        6 months ago, we decided to create an application about sharing garden goods because Vincent saw all the needs about it around him.<br></br>
        So, he came to see Enzo to talk about this project and the idea came: ShareUp.<br></br>
        During this 6 months, we spent 4 month talking about what will be the main features, which languages and technologies we will use and what architecture the application will be. The two other months were for develpment.<br></br>
        <br></br>
        This project came to life thanks to Holberton School.

        </p>

      </section>

      {/* ================= TEAM ================= */}

      <section className="about-card">

        <h2>Developers</h2>

        <div className="member">

            <h3>RENAUD Vincent</h3>

        </div>

        <div className="member">

            <h3>MESSAOUDI Enzo</h3>

            <div className="social-links">

                <a href="https://www.linkedin.com/in/messaoudienzo/">
                    LinkedIn
                </a>

                <a href="https://github.com/EnzoMessaoudi">
                    GitHub
                </a>

            </div>

        </div>

      </section>

      {/* ================= GITHUB ================= */}

      <section className="about-card">

        <h2>Project Repository</h2>

        <a
          href="https://github.com/Vincent-12156/Portfolio"
          className="github-button"
        >
          View the GitHub Repository
        </a>
        <p>
            <small>The github repository is in private. Just ask for permission.</small>
        </p>

      </section>

    </div>
  );
}

export default About;

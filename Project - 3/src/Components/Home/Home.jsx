import React from "react";
import "./Home.css"; // Importing external CSS

// Correct the path for images
import project1 from "../../assets/project-1.jpg";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.jpg";
import project4 from "../../assets/project-4.png";
import project5 from "../../assets/project-5.png";
import project6 from "../../assets/project-6.png";

const Home = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project1} // Use the imported image
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project2} // Use the imported image
                  alt="orizon"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Orizon</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project3} // Use the imported image
                  alt="fundo"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Fundo</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project4} // Use the imported image
                  alt="brawlhalla"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">Brawlhalla</h3>
              <p className="project-category">Applications</p>
            </a>
          </li>
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project5} // Use the imported image
                  alt="dsm"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">DSM.</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>
          <li className="project-item">
            <a href="#">
              <figure className="project-img">
                <img
                  src={project6} // Use the imported image
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>
              <h3 className="project-title">MetaSpark</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Home;

import React from "react";
import "./Blog.css"; // Importing external CSS

// Correct the path for images
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";
import blog5 from "../../assets/blog-5.jpg";
import blog6 from "../../assets/blog-6.jpg";

const Blog = () => {
  return (
    <article className="blog" data-page="blog">
      <header>
        {/* <h2 className="h2 article-title">Projects</h2> */}
      </header>



      <section className="projects">
        <ul className=" blog-post-list">
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog1} // Use the imported image
                  alt="finance"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | Feb 2, 2022</p>
              <h3 className=" blog-post-title">Design Conference in 2022</h3>
              <p className=" blog-post-category">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog2} // Use the imported image
                  alt="orizon"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | Dec 9, 2023</p>
              <h3 className=" blog-post-title">Best Fonts Every Designer</h3>
              <p className=" blog-post-category">Web development Lorem, ipsum dolor.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog3} // Use the imported image
                  alt="fundo"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | Mar 12, 2022</p>
              <h3 className=" blog-post-title">Design</h3>
              <p className=" blog-post-category">Design Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog4} // Use the imported image
                  alt="brawlhalla"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | Mar 30, 2021</p>
              <h3 className=" blog-post-title">UI Interactions</h3>
              <p className=" blog-post-category">Application Lorem ipsum dolor sit.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog5} // Use the imported image
                  alt="dsm"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | June 3, 2024</p>
              <h3 className=" blog-post-title">Art Of Shapping</h3>
              <p className=" blog-post-category">Website Lorem ipsum dolor sit amet.</p>
              </div>
            </a>
          </li>
          <li className="blog-post-item">
            <a href="#">
              <figure className=" blog-post-img">
                <img
                  src={blog6} // Use the imported image
                  alt="metaspark"
                  loading="lazy"
                />
              </figure>
              <div className="b-img">
              <p className="p-tag">Design | Apr 22, 2024</p>
              <h3 className=" blog-post-title">Meta Digest</h3>
              <p className=" blog-post-category">Web design Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Blog;

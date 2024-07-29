/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "CFGS DAW Integrated Final Project",
    description:
      "This project has been developed for my TFG for my end of studies at CFGS DAW.",
    url: "https://github.com/Rubencito2002/proyectoIntegrado.git",
  },
  {
    title: "CFGS DAW Course Content",
    description:
      "This repository has all my content during my last year of the CFGS DAW.",
    url: "https://github.com/Rubencito2002/DAW.git",
  },
  {
    title: "Marvel Character Search",
    description:
      "This project was one of the first that I have developed using REACT, it is a character search engine using the Marvel API.",
    url: "https://github.com/Rubencito2002/marvel-explorer.git",
  },
  {
    title: "Library Project",
    description:
      "It is a project developed using Django to develop an application for selling books in a bookstore.",
    url: "https://github.com/ieshm-2daw/libreria-Rubencito2002.git",
  },
  {
    title: "Project of Bootstrapp & CSS",
    description:
      "This is a project that has been developed from a bootstrap workshop with own css.",
    url: "https://rubencito2002.github.io/ProyectoBootstrapConCSS/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

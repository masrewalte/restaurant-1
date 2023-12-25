import React from "react";
import "./About.css";
import AboutChef1 from "../utils/img/about-chef1.jpg";
import AboutChef2 from "../utils/img/about-chef2.jpg";
import ImageGallery from "../components/ImageGallery";
import Reviews from "../components/Reviews";

function About() {
  return (
    <div className="about-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">About</h1>
        </div>
      </header>

      <div className="container my-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          totam repellendus suscipit nisi, nihil laborum magni cum atque fugit
          molestias tempore, sint asperiores! Dicta excepturi, nostrum ut
          blanditiis animi, quas adipisci sed temporibus, cum placeat nihil ad
          dignissimos eveniet. Dignissimos autem ab consequatur voluptatum
          labore asperiores fugit impedit ullam eos!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt
          quia cupiditate laborum aspernatur totam earum placeat. Voluptates ad
          natus doloremque obcaecati voluptas! Adipisci fugiat molestias tempore
          obcaecati deleniti possimus quisquam ad explicabo assumenda, labore
          iure cum fuga libero qui quia repudiandae sint, voluptatum tempora!
          Veniam vel reiciendis at tempora soluta sed velit omnis sint ipsa
          debitis, expedita ut deserunt dolorem porro consequatur impedit maxime
          cum amet fugit unde quibusdam, iusto est nihil. Praesentium magni
          nisi, deserunt modi aperiam quos.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <img src={AboutChef1} alt="" className="img-fluid my-4" />
          </div>
          <div className="col-lg-6">
            <img src={AboutChef2} alt="" className="img-fluid my-4" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, qui eos
          eum nobis vitae nesciunt corporis accusantium voluptatem? Eveniet
          eaque hic quasi minima quae labore culpa quam, nam ut ipsam animi ipsa
          provident praesentium sunt fugit, temporibus saepe beatae eius
          deserunt dolore magni exercitationem modi iste. Vitae architecto
          veritatis eligendi nobis quaerat. Ullam laudantium recusandae,
          provident, magni sed reiciendis atque dolorem amet temporibus saepe,
          maxime eos impedit. Sunt, beatae. Atque natus nobis placeat, voluptate
          inventore ipsa odit. Quaerat, dolore a laudantium, aut deserunt
          voluptatem nihil hic ex vel repellendus modi.
        </p>
      </div>
      <div className="bg-dark text-light">
        <ImageGallery />
      </div>
      <div className="my-5">
        <Reviews />
      </div>
    </div>
  );
}

export default About;

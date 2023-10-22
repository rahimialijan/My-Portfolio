import React from "react";
import { Header,About, Footer, Testimonial, Skills, Work } from "./container";

import { Navbar } from "./components";

import "./app.scss";

const app = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About/>
      <Footer />
      <Testimonial />
      <Skills />
      <Work />
    </div>
  );
};

export default app;

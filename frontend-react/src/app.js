import React from 'react';
import {
  Header, About, Footer, Testimonial, Skills, Work,
} from './container';

import { Navbar } from './components';

import './app.scss';

const app = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default app;

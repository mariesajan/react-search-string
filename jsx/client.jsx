import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";
import Header from "./components/header";
import Footer from "./components/footer";

const app= document.getElementById('app');

ReactDOM.render(
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
  ,app);

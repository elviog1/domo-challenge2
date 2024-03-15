import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Technology from "../components/Technology";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-color1 bg-wallpaper h-screen">
      <Navbar />
      <div className="container h-screen-hero d-flex align-items-center ">
        <Hero />
      </div>
      <Services />
      <Technology />
      <Clients />
      <Footer />
    </div>
  );
}

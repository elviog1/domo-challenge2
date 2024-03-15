import React from "react";
import Arrow from "../assets/arrow.svg";
export default function Hero() {
  return (
    <div className="hero-container-title w-100">
      <h2 className="text-white fw-bold fs-1">
        We build beautiful and realible web solutions
      </h2>
      <p className="text-secondary fs-4 hero-container w-100">
        We strongly believe that communication, trust and transparency are the
        essential elements of successful business relationship. Ready for the
        journey?
      </p>
      <div className="d-flex gap-4">
        <button className="btn btn-outline-secondary fw-semibold">
          Learn more
        </button>
        <button className="btn btn-primary fw-semibold">
          Our Projects <img className="icon-arrow" src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

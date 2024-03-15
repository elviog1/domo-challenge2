import React from "react";
import CardService from "./CardService";
import Paper from '../assets/paper.svg'
import Desktop from '../assets/desktop.svg'
import Pen from '../assets/pen.svg'
export default function Services() {
  const cardsInfo = [
    {icon:Paper,
      title: "Business & Product Concept",
      description:
        "Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.",
    },
    {
        icon:Desktop,
      title: "Web & Mobile Development",
      description:
        "Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
    },
    {
        icon:Pen,
      title: "UX & UI Design",
      description:
        "Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
    },
  ];
  return (
    <div>
      <div className="text-center bg-color1 text-white d-flex flex-column align-items-center">
        <div className="w-50">
          <p className="fw-bold fs-1">Our Services</p>
          <p className="text-secondary fs-5  fw-bold">
            We feel very strong about our skills when it comes to planning,
            designing and coding applications. Here is what we love to do!
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-4 pt-5 bg-color1 flex-wrap">
        {cardsInfo.map(card => (
            <CardService cardInfo={card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

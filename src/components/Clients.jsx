import React from "react";
import Nike from '../assets/img/nike.webp'
import Tnw from '../assets/img/tnw.png'
import Google from '../assets/img/google.webp'
import Airbnb from '../assets/img/airbnb.png'
import Africa from '../assets/img/africa.png'
export default function Clients() {
  return (
    <div className="d-flex justify-content-center clients-container align-items-center">
        <div className="container ">
            <p className="text-center text-secondary fw-bold">CLIENTS WE WORKED WITH</p>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                <img className="client-img" src={Tnw} />
                <img className="client-img" src={Google} />
                <img className="client-img" src={Nike} />
                <img className="client-img" src={Airbnb} />
                <img className="client-img" src={Africa} />
            </div>
            <div className="d-flex gap-4 justify-content-center mt-5 cards-info">
                <div className="card-clients p-4">
                    <p className="text-white fs-3 fw-semibold">Get in touch with us</p>
                    <p className="card-clients-text fs-5">Maecenas sed diam eget risus varius</p>
                    <p className="card-clients-text fs-5">blandit sit amet non magna.</p>
                    <button className="btn btn-outline-secondary text-white">Hire us</button>
                </div>
                <div className="card-clients p-4 phone">
                    <p className="text-white fs-3 fw-semibold">Our Projects</p>
                    <p className="card-clients-text fs-5">Maecenas sed diam eget risus varius</p>
                    <p className="card-clients-text fs-5">blandit sit amet non magna.</p>
                    <button className="btn btn-outline-secondary text-white">See Projects</button>
                </div>
            </div>
        </div>
    </div>
  );
}

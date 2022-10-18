import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import h1 from "../../assets/images/h1.jpg";
import h2 from "../../assets/images/h2.jpg";
import h3 from "../../assets/images/h3.jpg";
import h4 from "../../assets/images/h4.jpg";
import h5 from "../../assets/images/h5.jpg";
import h6 from "../../assets/images/h6.jpg";
import h7 from "../../assets/images/h7.jpg";

export default function Carru() {
  return (
    <Carousel>
      <img src={h1} alt="..." className="rounded-lg" />
      <img src={h2} alt="..." className="rounded-lg" />
      <img src={h3} alt="..." className="rounded-lg" />
      <img src={h4} alt="..." className="rounded-lg" />
      <img src={h5} alt="..." className="rounded-lg" />
    </Carousel>
  );
}

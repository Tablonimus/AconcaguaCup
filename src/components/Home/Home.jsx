import React from "react";
import Header from "../NavBar/Header";
import NavBar from "../NavBar/NavBar";
import header from "../../assets/images/header.png";
import { Link } from "react-router-dom";
import { Tabs } from "flowbite-react";
import Cronograma from "../Cronograma/Cronograma";
import { Carousel } from "flowbite-react";
import FootComp from "../Footer/FootComp";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Header />
      <div className="">
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
              className="rounded-lg"
            />
          </Carousel>
          <Carousel indicators={false}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
              className="rounded-lg"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
              className="rounded-lg"
            />
          </Carousel>
        </div>
      </div>
      <Cronograma />
      <FootComp/>
    </div>
  );
}

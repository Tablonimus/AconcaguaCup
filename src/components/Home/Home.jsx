import React from "react";
import Header from "../NavBar/Header";
import NavBar from "../NavBar/NavBar";
import header from "../../assets/images/header.png";
import { Link } from "react-router-dom";
import { Tabs } from "flowbite-react";
import Cronograma from "../Cronograma/Cronograma";
import { Carousel } from "flowbite-react";
import FootComp from "../Footer/FootComp";
import Carru from "../Carru/Carru";
import Carru2 from "../Carru/Carru2";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <Header />
      <div className="">
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
          <Carru />
          <Carru2 />
        </div>
      </div>
      <Cronograma />
      <FootComp />
    </div>
  );
}

import React from "react";
import NavBar from "../NavBar/NavBar";
import { Carousel } from "flowbite-react";
import suela1 from "../../assets/images/suela1.jpeg";
import suela2 from "../../assets/images/suela2.jpeg";
import suela3 from "../../assets/images/suela3.jpeg";
import FooterComp from "../FooterComp/FooterComp.jsx";
import { Card } from "flowbite-react";
import NavTwo from "../NavBar/NavTwo";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import { Link } from "react-router-dom";
export default function Inicio() {
  return (
    <div className="bg-gray-900 h-full flex flex-col items-center">
      <NavBar />

      <NavTwo />
      {/*     <div className="h-56 lg:h-3/4 w-full bg-yellow-900  flex justify-center ">
       <Carousel>
          <a href="https://happytails.vercel.app/market">
            <img alt="blog" src={suela1} className="w-screen" />
          </a>
          <a href="https://happytails.vercel.app/home">
            <img alt="blog" src={suela2} className="w-screen" />
          </a>
          <a href="https://happytails.vercel.app/donations">
            <img alt="blog" src={suela3} className="w-screen" />
          </a>
        </Carousel>
      </div>
      <h5 className="text-white">
        Lorem ipsum dolor sit amet. Ea quibusdam voluptatum nam ipsa nobis id
        cupiditate inventore vel odit velit. Sed nihil iste eos quasi
        repudiandae non ipsam neque ex vero consequuntur. Eos eveniet illum sed
        libero pariatur aut vero fugum aspernatur hic quae rerum aut quidem
        neque. Ad odio error et voluptates non iure obcaboriosam ad quod facere
        non placeat aspernatur laborum quibusdam non cumque dolores.
      </h5> */}

      <div className="max-w-sm m-4">
        <Link to={"/noticia"}>
        <Card
          // imgAlt="image"
          // imgSrc={suela2}
          class="bg-[#E96F22] rounded-lg shadow-lg"
        >
          <div className="lg:h-11/12 w-24 lg:w-1/2">
            <YoutubeEmbed embedId="3dmGzwSRl2s" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Importante baja para Atenas
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
        </Link>
      </div>
      <div className="max-w-sm m-4">
        <Card
          imgAlt="image"
          imgSrc={suela3}
          class="bg-[#E96F22]  rounded-lg border border-slate-50  shadow-lg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Hat Trick del paquistaní en las semifinales de la copa
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <div className="max-w-sm m-4">
        <Card
          imgAlt="image"
          imgSrc={suela1}
          class="bg-[#E96F22] border border-neutral-700  rounded-lg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Reggatas se quedó con la victoria en el Ribosqui
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
      <FooterComp />
    </div>
  );
}

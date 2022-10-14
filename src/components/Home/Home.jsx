import React from "react";
import Prueba from "../archivoprueba/Prueba";
import FooterComp from "../FooterComp/FooterComp";
import NavBar from "../NavBar/NavBar";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";


export default function Home() {
  return (
    <div className="bg-amber-600 flex flex-col items-center">
      <NavBar />
      
        <div className="pt-3 w-11/12 flex flex-col items-center">
          <h1 className="font-bold font-sans text-gray-800 text-4xl lg:text-9xl">
            "Dupla Explosiva"
          </h1>
          <h5 className="p-5 text-xl lg:text-2xl text-gray-800 font-semibold">
            Las Pumas se interpusieron por 4 goles ante Independiente Rivadavia.
          </h5>
        </div>
      
        <div className="lg:h-11/12 w-full lg:w-1/2">
          <YoutubeEmbed embedId="3dmGzwSRl2s" />
        </div>
        <div className="w-11/12 m-5">
        <h5 className="p-5 text-xl">
          De la mano de Agostina Morales y Tamara Vargas, Las Pumas lograron
          obtener un triunfo muy importante en la cancha de Independiente
          Rivadavia. Jugadoras de buen pie que cuidaron la pelota en la victoria
          4-1 de su equipo Tamara Vargas tuvo un desempeño envidiable en el
          match, tres goles, un terrible pase filtrado que finalizó en el 2-0
          parcial.
        </h5>
        </div>
        <Prueba />
      <FooterComp />
    </div>
  );
}

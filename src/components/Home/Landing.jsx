import React from "react";
import suelavid2 from "../../assets/videos/suelavid2.mp4";
import suela2 from "../../assets/images/suela2.jpeg";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate= useNavigate()
  function handleClick(e) {
    console.log("clicl");
    navigate("/home")
  }
  return (
    <div className="w-full bg-black h-screen ">
      <div className="relative flex flex-col items-center">
        <div className="absolute top-3/4 flex flex-row">
          <button
            onClick={(e) => handleClick(e)}
            className="z-30 m-2 flex bg-[#E96F22] flex-col w-24 shadow-lg rounded-full border border-slate-700 items-center text-white"
          >
            <h5 className="  font-bold font-serif text-[50px] ">🏆</h5>
            <h5 className="font-bold text-[10px] font-serif">A1</h5>
          </button  >

          <button
            onClick={(e) => handleClick(e)}
            className="hover:bg-gray-500 active:bg-violet-700 z-30 m-2 flex bg-[#E96F22] flex-col w-24 shadow-lg rounded-full border border-slate-700 items-center text-white"
          >
            <h5 className="font-bold font-serif text-[50px] ">🎖</h5>
            <h5 className="font-bold text-[10px] font-serif">FEM</h5>
          </button>
        </div>
        <video
          src={suelavid2}
          autoplay="true"
          muted="true"
          loop="true"
          className="h-screen"
          poster="https://carontestudio.com/img/contacto.jpg"
        ></video>
      </div>
    </div>
  );
}

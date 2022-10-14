import React from "react";
import suela from "../../assets/images/suela.jpg";
import aleman from "../../assets/images/aleman.png";
import godoy from "../../assets/images/godoy.png";
import gye from "../../assets/images/gye.png";
import calendario from "../../assets/images/calendario.png";
import { Navbar } from "flowbite-react";

export default function NavTwo() {
  return (
    <div className="bg-black w-full flex flex-col items-center mt-14 m-2">
      <h1 className="text-white font-bold text-[#E96F22]">#A1xSuela</h1>
      <div className="m-2 flex border-t border-b border-[#E96F22] rounded-lg w-full">
        <div className="m-2 h-24 w-36 border rounded-lg">
          <span className="flex flex-row items-center m-1 justify-between">
            <div className="flex flex-col">
              <img src={godoy} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">GC"A</h5>
            </div>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <div className="flex flex-col">
              <img src={aleman} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">ALE</h5>
            </div>
          </span>
          <span className="flex flex-row items-center m-1 justify-between"></span>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-green-300 font-bold text-[10px] ">ST-14'</h5>
          </div>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-white font-bold text-[8px] ">Cancha:</h5>
            <h5 className="text-white font-bold text-[8px] ">
              Polideportivo El Tomba
            </h5>
          </div>
        </div>
        <div className="m-2 h-24 w-36 border rounded-lg">
          <span className="flex flex-row items-center m-1 justify-between">
            <div className="flex flex-col">
              <img src={godoy} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">GC"A</h5>
            </div>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <div className="flex flex-col">
              <img src={aleman} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">ALE</h5>
            </div>
          </span>
          <span className="flex flex-row items-center m-1 justify-between"></span>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-green-300 font-bold text-[10px] ">ST-14'</h5>
          </div>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-green-300 font-bold text-[8px] ">
              Polideportivo El Tomba
            </h5>
          </div>
        </div>
        <div className="m-2 h-24 w-36 border rounded-lg">
          <span className="flex flex-row items-center m-1 justify-between">
            <div className="flex flex-col">
              <img src={godoy} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">GC"A</h5>
            </div>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <h5 className="text-white font-bold text-[13px]">0</h5>
            <div className="flex flex-col">
              <img src={aleman} alt="A" className="w-6 h-6" />
              <h5 className="text-white font-bold text-[10px]">ALE</h5>
            </div>
          </span>
          <span className="flex flex-row items-center m-1 justify-between"></span>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-green-300 font-bold text-[10px] ">ST-14'</h5>
          </div>
          <div className="border-t flex justify-center m-1">
            <h5 className="text-green-300 font-bold text-[8px] ">
              Polideportivo El Tomba
            </h5>
          </div>
        </div>
        <div className="m-2 bg-white h-24 rounded-lg w-12 border flex flex-col justify-center items-center">
          <img src={calendario} alt="" />

          <h5 className="text-black font-bold text-[25px] m-1 ">→ </h5>
        </div>
      </div>

      <div className=" flex items-center">
        <a className=" m-2 flex bg-[#E96F22] flex-col w-12 rounded-full border border-slate-700 items-center text-white">
          <h5 className="font-bold font-serif text-[20px] ">🏆</h5>
          <h5 className="font-bold text-[10px] font-serif">A1</h5>
        </a>
        <a className=" m-2 flex flex-col w-12 rounded-full border border-slate-700 items-center text-white">
          <h5 className="font-bold font-serif text-[20px] ">🎖</h5>
          <h5 className="font-bold text-[10px] font-serif">FEM</h5>
        </a>
      </div>
    </div>
  );
}

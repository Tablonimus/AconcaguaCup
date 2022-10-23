import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.png";

export default function Cronograma() {
  return (
    <div className="bg-white flex mb-3 mt-24 flex-col w-full  items-center rounded-b-lg">
      <h5 className="font-bold text-black">Cronograma</h5>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item
          title="Lun 21/5"
          /*  icon={HiUserCircle} */
        >
          <div className="flex flex-col items-center">
            {/* Hace Click en el evento para conocer la ubicación */}
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Estadio+Malvinas+Argentinas/@-32.8896642,-68.8800956,15z/data=!4m2!3m1!1s0x0:0x684a90ae779e7723?sa=X&ved=2ahUKEwiCmd2Uo_X6AhWhQ7gEHS7oCt8Q_BJ6BAhHEAU"
            >
              <div className="flex flex-col items-center border-y border-[#14ABD5]">
                <h5 className="font-bold">08:30hs a 11:00hs</h5>
                <h5>
                  Entrega de Acreditaciones en "Estadio Malvinas Argentinas"
                </h5>
                <div className="flex items-center mb-2 ">
                  <img src={map} alt="" className="w-5 rounded-full" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">"Ver en el mapa"</h5>
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Banco+Rugby+Club/@-32.8892743,-68.7501503,15z/data=!4m5!3m4!1s0x0:0x9f2dad5ed9be76e7!8m2!3d-32.8892743!4d-68.7501503"
            >
              <div className="flex flex-col items-center border-y border-[#14ABD5]">
                <h5 className="font-bold">08:30hs a 11:00hs:</h5>
                <h5>20:00hs a 22:00hs: Acto inaugural en "Banco Rugby Club"</h5>
                <div className="flex items-center mb-2">
                  <img src={map} alt="" className="w-5" />
                  <h5 className=" text-sm font-semibold border-b border-[#14ABD5]">"Ver en el mapa"</h5>
                </div>
              </div>
            </a>
          </div>
        </Tabs.Item>
        <Tabs.Item
          active={true}
          title="Mar 22/5"
          /*  icon={MdDashboard} */
        >
          <span className="flex flex-col">
            <h1>9:00 - 9.30: Reunion inicial</h1>
            <h1>9:00 - 9.30: Reunion iniscial</h1>
            <h1>9:00 - 9.30: Reunasion inicial</h1>
            <h1>9:00 - 9.30: Reunion adinicial</h1>
          </span>
        </Tabs.Item>
        <Tabs.Item
          title="Mier 23/5"
          /*   icon={HiAdjustments} */
        >
          <span className="flex flex-col">
            <h1>9:00 - 9.30: Reunion iniasdsacial</h1>
            <h1>9:00 - 9.30: Reunionasqa inicial</h1>
            <h1>9:00 - 9.30: ASas inicial</h1>
            <h1>9:00 - 9.30: Reasdsadunion inicial</h1>
          </span>
        </Tabs.Item>
        <Tabs.Item
          title="Jue 24/5"
          /*  icon={HiClipboardList} */
        >
          <span className="flex flex-col">
            <h1>9:00 - 9.30: Reunion inicial</h1>
            <h1>9:00 - 9.30: Reunioadsqwen inicial</h1>
            <h1>9:00 - 9.30: Reuniontert inicial</h1>
            <h1>9:00 - 9.30: Reetertunion inicial</h1>
          </span>
        </Tabs.Item>
        <Tabs.Item active={true} title="Vie 25/5">
          <span className="flex flex-col">
            <h1>9:00 - 9.30: Reunion iniertecial</h1>
            <h1>9:00 - 9.30: Reuertnion inicial</h1>
            <h1>9:00 - 9.30: Reetrreunion iniertcial</h1>
            <h1>9:00 - 9.30: Reetretunion in45353icial</h1>
          </span>
        </Tabs.Item>
      </Tabs.Group>
      {/*  <Link>
          <button className="rounded-lg bg-blue-200">
            <h5>Cronograma</h5>
          </button>
        </Link>
        <Link>
        <button className="rounded-lg bg-blue-200">
            <h5>Cronograma</h5>
          </button>
        </Link>
        <Link>
        <button className="rounded-lg bg-blue-200">
            <h5>Cronograma</h5>
          </button>
        </Link> */}
    </div>
  );
}

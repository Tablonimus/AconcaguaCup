import React from "react";
import NavBar from "../NavBar/NavBar";
import { Tabs } from "flowbite-react";

export default function Cronograma() {
  return (
    <div className="bg-white flex mb-3 mt-24 flex-col w-full  items-center rounded-b-lg">
      <h5 className="font-bold text-black">Cronograma</h5>
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item
          title="Lun 21/5"
          /*  icon={HiUserCircle} */
        >
          <span className="flex flex-col">
            <h1>9:00 - 9.30: Reunion inicial</h1>
            <h1>9:00 - 9.30: Reunion inicial</h1>
            <h1>9:00 - 9.30: Reunion inicial</h1>
            <h1>9:00 - 9.30: Reunion inicial</h1>
          </span>
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

import React from "react";
import suela from "../../assets/images/suela.jpg";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar class="bg-black items-center w-full fixed" fluid={true} rounded={true}>
      <Navbar.Brand href="">
        <span className="flex items-center ml-2 self-center whitespace-nowrap text-xl font-semibold text-white">
          <img src={suela} className="h-14 rounded-full flex" alt="Logo" />
          <h1 className="font-bold font-serif text-md lg:text-2xl ml-2 mr-5">
            {" "}
            Suela Caramelo
          </h1>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home">
          <span className="text-white hover:text-orange-600">Inicio</span>
        </Navbar.Link>
        <Navbar.Link href="/home">
          {" "}
          <span className="text-white hover:text-orange-600">Fechas</span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-white hover:text-orange-600">
            FemAxSuela
          </span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-white hover:text-orange-600">
            A1xSuela
          </span>{" "}
        </Navbar.Link>
        <Navbar.Link href="/navbars">
          {" "}
          <span className="text-white hover:text-orange-600">Nada</span>{" "}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

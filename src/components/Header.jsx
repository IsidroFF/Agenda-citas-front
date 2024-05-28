import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { DentalLifeLogo } from "./DentalLifeLogo.jsx";
import FormRegistro from "./formRegistrarUsuario/FormRegistro.jsx";
import Inicio from "./Inicio.jsx"
import Especialistas from "../Especialistas/Especialistas.jsx";

export default function NavBar() {
  return (
    <BrowserRouter>
      <Navbar>
        <NavbarBrand>
          <DentalLifeLogo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/especialistas" className="text-blue-600">
              Especialistas
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/acerca">
              Acerca de
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="#">Iniciar Sesión</Link>
          </NavbarItem>
          <NavbarItem>
            <FormRegistro />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/especialistas" element={<Especialistas/>}/>
        <Route path="/acerca" element={<>Acerca deeee</>}/>
          
      </Routes>
    </BrowserRouter>
  );
}
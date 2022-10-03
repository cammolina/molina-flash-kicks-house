import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {ItemListContainer} from './Containers/ItemListContainer'
import {ComponenteEstados} from './ComponenteEstados'
import {Usuarios} from './Usuarios'



const App = () => {
  const nombre = "Camila";
  const mensaje = "Aprovecha el descuento"

  const onAdd =() => {
    console.log("agregaste algo al carrito");
  }

  return (
    <>
      <Navbar nombreUsuario={nombre} apellidoUsuario="Molina" />
      <ItemListContainer greeting={mensaje} mensaje="eso es todo"/>
    </>
  );
};

export default App;



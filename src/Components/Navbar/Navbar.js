import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CarWidget";
import { styles } from "./Navbar.style";

const Navbar = ({ nombreUsuario, apellidoUsuario, children }) => {


  const categorias = [
    {nombre:"Home", id:0, ruta:"#"},
    {nombre:"Sneakers", id:1, ruta:"#"},
    {nombre:"Release Dates", id:2, ruta:"#"},
    {nombre:"About Us", id:3, ruta:"#"},
    {nombre:"Contact Us", id:3, ruta:"#"},
  ];

  return (
    <header style={styles.container}>
      <img style={styles.imagenes} src={logo} alt="tienda online" />
      <h1> Flash Kicks House {nombreUsuario}</h1>
      <nav>
        {
          categorias.map((categoria)=>{
            return <a key={categoria.id} style={styles.categorias} href={categoria.ruta}>{categoria.nombre}</a>
          })
        }
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
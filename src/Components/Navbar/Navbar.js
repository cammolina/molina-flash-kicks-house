import React from "react";
import logo from "../../assets/logo.png";
import { CartWidget } from "../CartWidget/CarWidget";
import { styles } from "./Navbar.style";
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {


  const categorias = [
    {nombre:"All items", id:0, ruta:"/category/allitems"},
    {nombre:"Sneakers", id:1, ruta:"/category/sneakers"},
    {nombre:"Cool Clothes", id:2, ruta:"/category/coolclothes"},
    {nombre:"His stuff", id:3, ruta:"/category/his stuff"},
    {nombre:"Her stuff", id:3, ruta:"/category/her stuff"},
  ];

  return (
    <header style={styles.container}>
      <Link style= {styles.imagenes} to= "/">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </Link>

      <h1> Flash Kicks House </h1>
      <nav>
        {categorias.map((categoria)=>{
            return (
            <NavLink 
            key={categoria.id} 
            style={styles.categorias} 
            to= {categoria.ruta}>

              {categoria.nombre}
            </NavLink>
        )
        })}
      </nav>
      <Link to="/cart">
      <CartWidget />  
      </Link>
    </header>
  );
};

export default Navbar;
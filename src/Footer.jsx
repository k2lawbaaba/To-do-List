import React from "react";
import './styles.css';


let year = new Date().getFullYear();

const Footer =()=>{
    return <footer><i>copyright @ Abiodun {year}</i></footer>
}
export default Footer;
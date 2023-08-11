import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";

import "./App.css"

import imgDarkMode from "../img/motinha.jpg"
import imgLightMode from "../img/imagemFundoBranco.jpg"

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)

const imgScr = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no modo CLaro" : "Imagem no modo Escuro"

    return(
        <div id="container">
            <Profile imgSrc={imgScr} imgAlt={imgAlt}>@di0rio</Profile>
            <Switch></Switch>
            <div id="links">
             <ul>
                <Links link={"#"}>GitHub</Links>
                <Links link={"#"}>Instagram</Links>
                <Links link={"#"}>Portifólio</Links>
                <Links link={"#"}>Projetos</Links>

             </ul>
            </div>
        </div>
    );
};

export default App;
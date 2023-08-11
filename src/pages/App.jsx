import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css"

import imgDarkMode from "../img/motinha.jpg"
import imgLightMode from "../img/imagemFundoBranco.jpg"

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)

const imgScr = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no modo CLaro" : "Imagem no modo Escuro"

    return(
        <div>
            <Profile imgSrc={imgScr} imgAlt={imgAlt}>@di0rio</Profile>
        </div>
    );
};

export default App;
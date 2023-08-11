import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css"

import imgDarkMode from "../img/motinha.jpg"
import imgLightMode from "../img/imagemFundoBranco.jpg"

const App = () => {
const [isLightMode,setIsLightMode] = useState(false)

const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode)
};

const imgScr = isLightMode ? imgLightMode : imgDarkMode;
const imgAlt = isLightMode ? "Imagem no modo CLaro" : "Imagem no modo Escuro"

    return(
        <div id="App" className={isLightMode ? "light" : ""}>

        <div id="container">
            
            <Profile imgSrc={imgScr} imgAlt={imgAlt}>@di0rio</Profile>

            <Switch mode={toggleMode} infoButton={isLightMode}/>

            <div id="links">
             <ul>
                <Links link={"#"}>GitHub</Links>
                <Links link={"#"}>Instagram</Links>
                <Links link={"#"}>Portifólio</Links>
                <Links link={"#"}>Projetos</Links>
             </ul>
            </div>

        <div id="socialLinks">
            <Social href={"https://github.com/di0rio"} icon={"logo-github"}/> 
            <Social href={"#"} icon={"logo-instagram"}/> 
            <Social href={"#"} icon={"logo-youtube"}/>  
            <Social href={"#"} icon={"logo-twitter"}/>
        </div>

            <Footer link={"#"}>@di0rio</Footer>

        </div>
        </div>
    );
};

export default App;
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
                <Links link={"https://github.com/di0rio"}>GitHub</Links>
                <Links link={"https://www.instagram.com/di0riocaua/"}>Instagram</Links>
                <Links link={"https://open.spotify.com/user/l8xkfahzqmphm29tuf9xr6b48"}>Spotify</Links>
                <Links link={"https://devflix-pink.vercel.app/"}>Projetos</Links>
             </ul>
            </div>

        <div id="socialLinks">
            <Social href={"https://github.com/di0rio"} icon={"logo-github"}/> 
            <Social href={"https://account.xbox.com/pt-BR/Profile?xr=mebarnav&csrf=KU13Pu_U0hIp0KNfTokjz0q67KpU11OP4C4LeYt5TTDoAjHnvAhC1QOjKxLtMFJbmdg9JYhFZiVRz5vM00NIkU9HUCs1&wa=wsignin1.0"} icon={"logo-xbox"}/> 
            <Social href={"https://www.youtube.com/channel/UCm5Nnkm-5JYL67tA1g2_w7w"} icon={"logo-youtube"}/>  
            <Social href={"https://twitter.com/DiorioCaua"} icon={"logo-twitter"}/>
        </div>

            <Footer link={"https://github.com/di0rio"}>@di0rio</Footer>

        </div>
        </div>
    );
};

export default App;
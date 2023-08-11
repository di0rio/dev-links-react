import { useSpring, animated } from "react-spring";
import styles from "./switch.module.css";

const Switch = ({mode, infoButton}) => {
const animation=useSpring({
    left: infoButton ? "0%" : "50%",
})

    return(
        <div id={styles.switch} onClick={mode}>
            <animated.button style={animation} ></animated.button>
            <span></span>
        </div>
    );
};

export default Switch;
import "./socialLinks.module.css";

const SocialLinks = ({icon, href}) => {
    return(
        <a href={href} target="_blank">
           <ion-icon name={icon} />
        </a>
    );
};

export default SocialLinks;
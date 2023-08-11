import styles from "./profile.module.css";

const Profile = ({children, imgSrc, imgAlt}) => {
    return(
        <div id={styles.profile}>
            <img src={imgSrc} alt={imgAlt} />
            <p>{children}</p>
        </div>
    )
}

export default Profile;
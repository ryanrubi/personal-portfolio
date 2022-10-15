import "./Profile.css";

const Profile = () => {
    return (
    <div className="prof-container">
        <img src={require("../../assets/about.webp")} alt="Profile"/>
        <h1>RYAN RUBI</h1>
        <p>Web Developer</p>
    </div>
    );
};

export default Profile;
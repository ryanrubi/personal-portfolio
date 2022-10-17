import Button from "../Button/Button";
import "./Notfound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <Button/>
            <img src={require("../../assets/notfound.png")} alt="notfound"/>
        </div>
    );
}; 

export default NotFound;
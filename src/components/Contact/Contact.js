import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-box-1">
                <img id="contact-img" src={require("../../assets/contact.webp")} alt="About"/>
            </div>
            <div className="contact-box-2">
                <h2>Any type of question <br/>& Discussion</h2>
                <p className="text">Let's Talk</p>
                <p id="gmail">ryanrubi17@gmail.com</p>
                <p className="text">Mobile No. 09381243713</p>
                <p className="text">Tel No. 0282557228</p>
            </div>
        </div>
    );
};

export default Contact;
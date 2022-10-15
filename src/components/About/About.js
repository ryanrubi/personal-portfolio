import { motion } from "framer-motion";
import "./About.css";

const About = () => {

    const openNewTab = () => {
        window.open("https://drive.google.com/file/d/1NOqqEdl0Xs7wKDosj8gnyTWrFuaM62MG/view", "_blank");
    };

    //ANIMATION OBJ
    const container = {
        offscreen_img: { x: -100, opacity: 0 },
        onscreen_img: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 1
            }
        },
        offscreen_content: { y: 30, opacity: 0 },
        onscreen_content: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.5
            }
        }
    }

    return (
        <div className="about-container" id="about">
            <motion.div initial={"offscreen_img"} whileInView={"onscreen_img"} viewport={{ once: true, amount: 0.5 }} >
                <motion.div variants={container} className="about-box-1">
                    <img id="about-img" src={require("../../assets/contact.webp")} alt="About"/>
                </motion.div>
            </motion.div>

            <motion.div initial={"offscreen_content"} whileInView={"onscreen_content"} viewport={{ once: true, amount: 0.5 }} className="about-box-2">
                <motion.div variants={container}>
                    <p className="title-p">Discover</p>
                    <h2>About Me</h2>
                    <p className="text">I'm Ryan Rubi currently working as Software Engineer responsible in Web development. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user friendly websites and application.</p>

                    <p className="text">Name: Ryan Rubi</p>
                    <p className="text">Age: 25 years old</p>
                    <p className="text">Address: Cainta Rizal</p>
                    <button id="download" onClick={openNewTab}>DOWNLOAD RESUME</button>
                </motion.div>
            </motion.div>

            <motion.div initial={"offscreen_content"} whileInView={"onscreen_content"} viewport={{ once: true, amount: 0.5 }} className="about-box-3">
                <motion.div variants={container}>
                    <h2>Any type of question <br/>& Discussion</h2>
                    <p className="text">Let's Talk →</p>
                    <p id="gmail">ryanrubi17@gmail.com</p>
                    <p className="text">Mobile No. 09381243713</p>
                    <p className="text">Tel No. 0282557228</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;
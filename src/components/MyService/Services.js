import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {

    const content = [
        {id:"fe", title: "Frontend Development", description: "Front-end is the web development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript", img: "fe_icon.png"},
        {id:"ui", title: "UI Designer", description: "User interface provides a user-friendly experience, allowing the user to interact with the software or hardware in a natural and intuitive way.", img: "ui_icon.png"},
        {id:"be", title: "Backend Development", description: "Working on server-side software, which focuses on everything you can't see on a website", img: "be_icon.png"},
    ];

    //ANIMATION OBJ
    const container = {
        offscreen_title: { scale: 0, opacity: 0 },
        onscreen_title: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        },
        offscreen_item: { y: 100, opacity: 0 },
        onscreen_item: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 1
            }
        }
    }

    return (
        <div className="services-div" id="services">
            <motion.div initial={"offscreen_title"} whileInView={"onscreen_title"} viewport={{ once: true, amount: 0.5 }}>
                <motion.p variants={container} className="title-p">What I do</motion.p>
                <motion.h2 variants={container} className="title-h2">My Services</motion.h2>
            </motion.div>
            <br/><br/>
            <motion.div className="services-container" initial={"offscreen_item"} whileInView={"onscreen_item"} viewport={{ once: true, amount: 0.5 }}>
                {content.map((obj)=> {
                    return(
                        <motion.div key={obj.id} variants={container} className="services-box">
                            <img src={require(`../../assets/${obj.img}`)} alt="frontend"/>
                            <h4>{obj.title}</h4>
                            <p className="text">{obj.description}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default Services;
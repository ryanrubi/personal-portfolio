import { motion } from "framer-motion";
import Button from "../Button/Button";
import "./Project.css";

const Project = () =>{

    const openNewTab = () => {
        window.open("https://github.com/ryanrubi/covid-dashboard", "_blank");
    };

    //ANIMATION OBJ
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            duration: 0.8
        }
    };

    return (
        <div className="proj-div">
            <Button/>
            <motion.p id="title-proj" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>My Project</motion.p>
            <br/><br/>

            <motion.div className="proj-container" variants={container} initial="hidden" animate="visible">
                <motion.div className="proj-box-1" variants={item}>
                    <motion.img  src={require("../../assets/cd.webp")} alt="img 1" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                </motion.div >

                <motion.div className="proj-box-2" variants={item}>
                    <motion.img src={require("../../assets/md.webp")} alt="img 2" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                </motion.div >

                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="proj-box-3">
                    <h2>React JS Project</h2>
                    <p className="text">"Dashboard" project using React JS, CSS, Rest API and Redux.</p><br/>
                    <p className="proj-link">Project Link</p>
                    <input type="text" value="https://ryanrubi.github.io/covid-dashboard" readOnly = {true}/>
                    <button className="source-code" onClick={openNewTab}>SOURCE CODE</button>
                </motion.div>
            </motion.div>
            <br/><br/>

            <motion.div className="proj-container" variants={container} initial="hidden" animate="visible">
                <motion.div className="proj-box-4" variants={item}>
                    <motion.img src={require("../../assets/login.webp")} alt="img 3" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                    <motion.img src={require("../../assets/signup.webp")} alt="img 4" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                </motion.div >
                <motion.div className="proj-box-5" variants={item}>
                    <motion.img src={require("../../assets/homepage.webp")} alt="img 5" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                </motion.div >

                <motion.div className="proj-box-6" variants={item}>
                    <motion.img src={require("../../assets/item.webp")} alt="img 6" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                    <motion.img src={require("../../assets/notfound.webp")} alt="img 7" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                    <motion.img src={require("../../assets/viewItem.webp")} alt="img 8" whileHover={{ scale: 1.4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
                </motion.div >

                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className="proj-box-7">
                    <h2>React JS Project</h2>
                    <p className="text">"Add To Cart" project using React JS, CSS and Redux.</p><br/>
                    <p className="proj-link">Project Link</p>
                    <input type="text" value="NOT YET DEPLOY!" readOnly = {true}/>
                    <button className="source-code">SOURCE CODE</button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Project;
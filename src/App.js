import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Services from "./components/MyService/Services";
import Project from "./components/MyProject/Project";
import Footer from "./components/footer/footer";
import NotFound from "./components/Notfound/Notfound";
import "./App.css";

function App() {
    return (
        <div className="App" id="home">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/personal-portfolio"/>
            </Route>

            <Route path="/personal-portfolio" exact>
              <header>
                <NavBar/>
              </header>

              <img id="background-img" src={require(`./assets/pexels-joyston-judah-933054.webp`)} alt="background"/>

              <Profile/>

              <About/>
              
              <Services/>
            </Route>

            <Route path="/project">
              <Project/>
            </Route>

            <Route path="/*">
              <NotFound/>
            </Route>
          </Switch>
  
          <footer>
            <Footer/>
          </footer>
        </div>
    );
}

export default App;

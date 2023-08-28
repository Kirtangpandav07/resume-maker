
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Tamplet from "./pages/Tamplet";

import Login from "./pages/Login";
import Professional from "./pages/Professional"
import Personal from "./pages/Personal"
import Educational from "./pages/Educational"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Achievements from "./pages/Achievements"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";
import Cookie from "./pages/Cookie";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tamplet">
          <Tamplet />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/professional">
          <Professional/>
        </Route>
        <Route path="/personal">
          <Personal/>
        </Route>
        <Route path="/educational">
          <Educational/>
        </Route>
        <Route path="/experience">
          <Experience/>
        </Route>
        <Route path="/skills">
          <Skills/>
        </Route>
        <Route path="/achievements">
          <Achievements/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/policy">
          <Policy/>
        </Route>
        <Route path="/Cookie">
          <Cookie/>
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  )
};

export default App;

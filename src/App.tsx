import { CSSTransition, TransitionGroup } from "react-transition-group";
import BgBubbles from "./components/BgBubbles";
import Profile from "./components/Profile";
import Menu from "./components/Menu";
import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
// import Works from "./pages/Works";
import BackToTop from "./components/BackToTop";

import { Routes, Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Works from "./pages/Work";

function App() {
  return (
    <>
      <BackToTop />
      <div className="page-wrap">
        <BgBubbles />
        <Router>
          <div className="container">
            <Menu />
            <Profile />
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup className="transition-wrapper">
      <CSSTransition
        classNames="transition"
        timeout={1000}
        unmountOnExit
        key={location.pathname}
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;

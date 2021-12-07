// This is the central JSX for what your page looks like

import './App.css';
import Home from './pages/Home';
import Staff from './pages/Staff';
import ClassInfo from './pages/ClassInfo';
import Enroll from './pages/Enroll';
import Contact from './pages/Contact';
import Rates from './pages/Rates';
import Policy from './pages/Policy';
import ClassbyAge from './pages/ClassbyAge';
import Fitness from './pages/Fitness';
import Schedule from './pages/Schedule';
import Performances from './pages/Performances';
import {Route, Link, BrowserRouter} from 'react-router-dom'; // This allows for multiple pages, from navbar
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';



/* Content of entire website is here. Everything is modularized and 'called' here. */
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/staff" component={Staff} />
          <Route exact path="/classinfo" component={ClassInfo} />
          <Route exact path="/enroll" component={Enroll} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rates" component={Rates} />
          <Route exact path="/policy" component={Policy} />
          <Route exact path="/classbyage" component={ClassbyAge} />
          <Route exact path="/fitness" component={Fitness} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/performances" component={Performances} />
          <Footer />
        
      </div>
    </div>
  );
}

export default App;

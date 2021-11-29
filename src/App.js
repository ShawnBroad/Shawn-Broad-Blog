import './App.css';
import Header from './components/header';
import Home from './components/home';
import Rise from './components/rise';
import Anti from './components/anti';
import Ramones from './components/ramones';
import Streetlight from './components/streetlight';
import Reel from './components/reel';
import Adtr from './components/adtr';
import Sum from './components/sum';
import Rancid from './components/rancid';
import {Route,Switch,} from "react-router-dom";
import Nav1 from './components/navbar';
import AboutUs from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import ScrollToTop from 'react-scroll-to-top';





function App() {
  return (
<>
<Nav1/>
<div className= 'header'>
<Header className= 'header'/>
</div>
<Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/rise'>
          <Rise />
        </Route>
        <Route path='/anti'>
          <Anti/>
        </Route>
        <Route path ='/ramones'>
          <Ramones/>
        </Route>
        <Route path ='/streetlight'>
          <Streetlight/>
        </Route>
        <Route path ='/reelbigfish'>
          <Reel/>
        </Route>
        <Route path ='/adtr'>
          <Adtr/>
        </Route>
        <Route path ='/sum41'>
          <Sum/>
        </Route>
        <Route path ='/rancid'>
          <Rancid/>
        </Route>
        <Route path = '/aboutus'>
          <AboutUs/>
        </Route>
        <Route path = '/contactus'>
          <Contact/>
        </Route>
      </Switch>
      <ScrollToTop smooth />
      <Footer/>

</>
  );
}

export default App;

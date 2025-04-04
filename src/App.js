import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Kitchen from './pages/Services/Kitchen';
import Bathroom from './pages/Services/Bathroom';
import Laundry from './pages/Services/Laundry';
import Quartz from './pages/Services/Quartz';
import Flooring from './pages/Services/Flooring';
import Vendor from './pages/Vendor';
import Basement from './pages/Services/Basement';
import Deck from './pages/Services/Deck';
import Roof from './pages/Services/Roof';
import Reactjs from './pages/Technology/Web/React';
import Angularjs from './pages/Technology/Web/Angular';
import Nodejs from './pages/Technology/Web/Node';
import TypeScript from './pages/Technology/Web/Typescript';
import ReactNative from './pages/Technology/Mobile/ReactNative';
import Flutter from './pages/Technology/Mobile/Flutter';
import Jenkins from './pages/Technology/Devops/Jenkins';
import AWS from './pages/Technology/Devops/AWS';
import Docker from './pages/Technology/Devops/Docker';
import DynamoDB from './pages/Technology/Database/Dynamo';
import MongoDB from './pages/Technology/Database/Mongo';
import MySQL from './pages/Technology/Database/Mysql';
import Figma from './pages/Technology/Design/Figma';
import Photoshop from './pages/Technology/Design/Photoshop';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("SWC");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path= "/kitchen" element={<Kitchen/>}/>
            <Route path= "/basement" element={<Basement/>}/>
            <Route path= "/deck" element={<Deck/>}/>
            <Route path= "/roof" element={<Roof/>}/>
            <Route path= "/bathroom" element={<Bathroom/>}/>
            <Route path= "/laundry" element={<Laundry/>}/>
            <Route path= "/flooring" element={<Flooring/>}/>
            <Route path= "/quartz" element={<Quartz/>}/>
            <Route path= "/react" element={<Reactjs/>}/>
            <Route path= "/angular" element={<Angularjs/>}/>
            <Route path= "/node" element={<Nodejs/>}/>
            <Route path= "/typescript" element={<TypeScript/>}/>
            <Route path= "/react-native" element={<ReactNative/>}/>
            <Route path= "/flutter" element={<Flutter/>}/>
            <Route path= "/jenkins" element={<Jenkins/>}/>
            <Route path= "/aws" element={<AWS/>}/>
            <Route path= "/docker" element={<Docker/>}/>
            <Route path= "/dynamodb" element={<DynamoDB/>}/>
            <Route path= "/mongodb" element={<MongoDB/>}/>
            <Route path= "/mysql" element={<MySQL/>}/>
            <Route path= "/photoshop" element={<Photoshop/>}/>
            <Route path= "/figma" element={<Figma/>}/>

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;

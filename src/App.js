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
import Vendor from './pages/Vendor';
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
import Healthcare from './pages/Industries/Healthcare';
import Ecommerce from './pages/Industries/E-commerce';
import Education from './pages/Industries/Education';
import Finance from './pages/Industries/Finance';
import Manufacturer from './pages/Industries/Manufacturer';
import DigitalProduct from './pages/Services/DigitalProduct';
import SoftwareArchitect from './pages/Services/SoftwareArchitect';
import Engineering from './pages/Services/Engineering';
import MobileDev from './pages/Services/MobileDev';
import Augmentation from './pages/Services/StaffAugmentation';

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
            <Route path= "/staff-augment" element={<Augmentation/>}/>
            <Route path= "/digital-product" element={<DigitalProduct/>}/>
            <Route path= "/engineering" element={<Engineering/>}/>
            <Route path= "/software-architect" element={<SoftwareArchitect/>}/>
            <Route path= "/mobile-dev" element={<MobileDev/>}/>
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
            <Route path= "/healthcare" element={<Healthcare/>}/>
            <Route path= "/ecommerce" element={<Ecommerce/>}/>
            <Route path= "/education" element={<Education/>}/>
            <Route path= "/finance" element={<Finance/>}/>
            <Route path= "/manufacter" element={<Manufacturer/>}/>

          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;

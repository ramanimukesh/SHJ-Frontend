import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Testimonials from '../components/Technology';
import Services from '../components/Services';
import Technology from '../components/Technology';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Services />
            <Technology />
            {/* <Clients /> */} {/* This component is commented out for now */}
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;


import React from 'react';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer';
//import Navbar from './HomeConfig';
import Navbar from '../NavBar';
import Cards from './HomeConfig.jsx';

export default function Home() {
  

    return (

        <div>

            <Navbar/>

            <Carousel />

            <Cards />

                
                
            <Footer />

        </div>
    )
}

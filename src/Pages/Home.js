import React from 'react';
// import BannerBackground from '../Assets/home-banner-background.jpg';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Navigation from '../Component/Navigation';
import About from '../Component/About';
import Services from '../Component/Services';
import Testimonials from '../Component/Testimonials';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import CarouselFadeExample from '../Component/CarouselSlider';

export default function Home() {
    return (
        <div className='home-container'>
            <Navigation />
            <div className='position-relative' style={{marginTop:'-90px;', zIndex:'-1;'}}>
                <CarouselFadeExample />
                <div className="home-banner-container position-absolute">
                    <div className="home-text-section">
                        <h1 className="primary-heading text-white">
                            Experience Your Personal Paradice With Us
                        </h1>
                        <p className="primary-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit et, quam iure iste eveniet reiciendis dolor, nam itaque.</p>
                        <button className="secondary-button">Book Now <ArrowForward /></button>
                    </div>
                </div>
            </div>
            {/* <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="banner_image" style={{ maxWidth: 'unset' }} />
            </div> */}

            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

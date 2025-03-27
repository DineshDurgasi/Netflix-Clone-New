import React, { useRef } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/Play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    
    const teluguHitsRef = useRef(null);
    const blockbusterMoviesRef = useRef(null);
    const internationalMoviesRef = useRef(null);

    
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='home'>

            <Navbar
                onTvShowsClick={() => scrollToSection(internationalMoviesRef)}
                onNewAndPopularClick={() => scrollToSection(teluguHitsRef)}
                onMoviesClick={() => scrollToSection(blockbusterMoviesRef)}
            />

            <div className="hero">
                <img src={hero_banner} alt="Hero Banner" className='banner-img' />
                <div className="hero-caption">
                    
                    <p>"In Hawkins, the ordinary becomes extraordinary, and the strange, real." </p>
                    <div className="hero-btns">
                        <button className='btn'>
                            <img src={play_icon} alt="Play Icon" /> Play
                        </button>
                        <button className='btn dark-btn'>
                            <img src={info_icon} alt="Info Icon" /> More Info
                        </button>
                    </div>
                    <TitleCards/>
                </div>
            </div>

            <div className="more-cards">
                <TitleCards title={"Continue Watching"} />
                <TitleCards title={"Top 10"} />
                <TitleCards title={"Popular on Netflix"} />

                <div ref={teluguHitsRef}>
                    <TitleCards title={"Wanna Laugh??"} />
                </div>

                <div ref={blockbusterMoviesRef}>
                    <TitleCards title={"New And Popular"} />
                </div>
                <div ref={internationalMoviesRef}>
                    <TitleCards title={"Movies"} />
                </div>

                <TitleCards title={"Tv shows"} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;

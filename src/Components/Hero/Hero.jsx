import React from "react";
import CountUp from 'react-countup';
import './hero.scss';

class Hero extends React.Component {
    render() {
        return (
            <>
            <div className="hero">
                <p className="hero-text">
                Track & trace oplossingen<br />
                speciaal voor uw bedrijf.
                </p>
                <p className="hero-price">voor slechts € 0,99 per maand</p>
                <div className="track-number-container">
                    <CountUp className="track-number" 
                    end={9000} 
                    duration={5} 
                    suffix="+"
                    separator=","
                    />
                    <p className="track-text">Trackers in gebruik</p>
                </div>
            </div>
            </>
        )
    }
}

export default Hero;
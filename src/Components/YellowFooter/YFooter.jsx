import React from "react";
import './yfooter.scss';

class YFooter extends React.Component {
    render() {
        return (
            <>
            <div className="y-footer">
                <div className="platform y-section">
                    <h1>Platform</h1>
                    <a href="#">Bedrijfsintegratie</a>
                    <a href="#">Bestuurders</a>
                    <a href="#">Voertuigen</a>
                    <a href="#">Bedrijfsmiddelen</a>
                    <a href="#">ECO driving​</a>
                </div>
                <div className="hardware y-section">
                    <h1>Hardware</h1>
                    <a href="#">Personene Trackers</a>
                    <a href="#">Mobiele Trackers</a>
                    <a href="#">Vaste Trackers</a>
                    <a href="#">Beacon Trackers</a>
                    <a href="#">Eigen Trackers</a>
                </div>
                <div className="support y-section">
                    <h1>Support</h1>
                    <a href="#">Sales</a>
                    <a href="#">Support</a>
                    <a href="#">Helpdesk</a>
                    <a href="#">FAQ</a>
                </div>
                <div className="gastiger-bv y-section">
                    <h1>GPSTIGER BV</h1>
                    <a href="#">Hanzeweg 43-B</a>
                    <a href="#">7418 AV Deventer</a>
                    <a href="#">Nederland</a>
                    <a href="#">TEL: <br /> +31 (0)88 321 2000</a>
                    <a href="#">KVK 83104984</a>
                </div>
                <div className="gastiger-gmbh y-section">
                    <h1>GPSTIGER GMBH</h1>
                    <a href="#">Lüpertzender Str. 6</a>
                    <a href="#">41061 Mönchengladbach</a>
                    <a href="#">Deutschland</a>
                    <a href="#">Tel:  +49 (0)2161 – 9499007</a>
                </div>
            </div>
            </>
        )
    }
}

export default YFooter;
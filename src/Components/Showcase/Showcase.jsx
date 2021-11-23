import React from "react";
import "./showcase.scss";
import screen from "./images/GPSTIGER-5-1024x585.png";
import fmb from "./images/FMB.png";
import partner from './images/partner.png';

class Showcase extends React.Component {
  render() {
    return (
      <>
        <div className="showcase">
          <div className="gps-platform">
            <div className="image">
              <img src={screen} alt="computer screen" width="624" />
            </div>
            <div className="text">
              <h1 className="platform-heading">GPS platform</h1>
              <br />
              <p className="platform-desc">
                Meer dan 100 toepassingen 
                Met de software en bijbehorende app van GPS Tiger zijn er tal
                van 
                toepassingen te bedenken zoals onder andere de auto en 
                transportbranche, maar ook voor legio andere branches zijn de
                
                mogelijkheden eindeloos. Denk hierbij aan bijvoorbeeld het
                traceren van
                
                motorfietsen, boten, elektrische fietsen en aanhangers, maar ook
                
                waardevolle gereedschappen, aggregaten of machines. Kort gezegd
                is
                
                alles wat u voor u van materiële waarde is, door ons te
                traceren! 
              </p>
              <br />
              <button className="platform-button">Bekijk ons platform</button>
            </div>
          </div>
          <div className="gps-platform" style={{ backgroundColor: '#eeeeee' }}>
            <div className="text">
              <h1 className="platform-heading">GPS Trackers</h1>
              <br />
              <p className="platform-desc">
                De tracker optimaal gebruiken
                Naast een goed functionerend GPS platform heeft u ook een
                betrouwbaar tracking device nodig die in verbinding staat met
                ons
                platform. Wij leveren en monteren meerdere merken trackers in
            
                verschillende prijsniveaus, zodat we u altijd een passende
                oplossing
            
                kunnen bieden! Bent u al in het bezit van GPS trackers en wilt u
                gebruik
            
                maken van het platform van GPS Tiger? Ons platform is zo gebouwd
                dat
            
                het veel bestaande devices herkent. Klik op onderstaande link om
                te
            
                controleren of uw device correspondeert met ons platform.
              </p>
            <br />
              <button className="platform-button">Bekijk ons platform</button>
            </div>
            <div className="image">
              <img src={fmb} alt="computer screen" width="624" />
            </div>
          </div>
          <div className="gps-platform">
          <div className="image">
              <img src={partner} alt="computer screen" width="624" />
            </div>
            <div className="text">
              <h1 className="platform-heading">Wordt onze Partner</h1>
              <br />
              <p className="platform-desc">
              Wij zoeken partners 
              GPS Tiger timmert hard aan de weg, zowel in Nederland als in Duitsland. Met regelmaat 
              zijn wij op zoek naar partners voor het inbouwen van GPS trackers, en gaan we ook 
              graag met u in gesprek over een eventueel partner of -dealerschap. Het is bij ons zelfs
                
                mogelijk om onder een white-label met uw eigen GPS platform de markt op te gaan.
                
                Nieuwsgierig geworden? Neem dan contact met ons op via info@gpstiger.com waarna
                
                een van onze accountmanagers graag bij u langskomt om de mogelijkheden te
                
                bespreken.
                
              </p>
              <br />
              <button className="platform-button">Bekijk ons platform</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Showcase;

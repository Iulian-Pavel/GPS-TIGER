import React from "react";
import "./services.scss";

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="client-stars">
          Klanten geven ons een 4,8 van 5 <span className="stars">★★★★★</span>
        </div>
        <div className="services">
          <h1 className="services-heading">
            Wat wil je bestellen bij GPSTIGER?
          </h1>
          <div className="service-cards">
            <div className="service-card">
              <h1 className="card-heading">
                GPS tracker + live track en trace op het GPSTiger platform.
              </h1>
              <p className="card-description">
                De beste keuze voor optimaal gebruik, wij zorgen dat je tracker
                voorgeprogrammeerd opgestuurd wordt, zodat je gelijk alles live
                kan volgen!
              </p>
              <p className="card-prices">Vanaf: €89,00 en €1,99 per maand</p>
              <button className="card-button">Offerte aanvragen</button>
            </div>
            <div className="service-card">
              <h1 className="card-heading">
                Je eigen tracker aanmelden op het GPS Tiger platform!
              </h1>
              <p className="card-description">
                Ons platform koppel je eenvoudig aan je eigen tracker! Wij zijn
                compatible met meer dan 1000 verschillende trackers. Weten
                welke? Kijk hier.
              </p>
              <p className="card-prices">
                Vanaf: € 0,99 per maand, vraag nu direct online je offerte op.
              </p>
              <button className="card-button">Offerte aanvragen</button>
            </div>
          </div>
          <h1 className="phone-heading">
            Heeft u advies nodig bel dan direct onze GPSTIGER sales!
          </h1>
          <div className="phone-numbers">
            <h1 className="nl">NL: +31 88 321 2000</h1>
            <h1 className="de">DE: +49 2161 9499007</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Services;

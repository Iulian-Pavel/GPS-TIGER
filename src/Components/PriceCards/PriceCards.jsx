import React from "react";
import "./pricecards.scss";

class PriceCards extends React.Component {
  render() {
    return (
      <>
      <div className="card-header">
            <p>Alle <b>tarieven</b> op een rij!</p>
        </div>
        <div className="price-cards">
          <br />
          <div className="price-card">
            <div className="desc">
              <h1>Basis</h1>
              <br />
              <p>abonnement</p>
            </div>
            <div className="price">
              <p className="card-price">€0,99</p>
              <br />
              <p>Per maand/tracker</p>
            </div>
            <div className="price-description">
              <p>12 maanden terugkijken</p>
              <br />
              <p>Binnen 4 werkdagen reactie van de helpdesk</p>
              <br />
              <p>Toegang tot alle basis functionaliteiten</p>
              <br />
              <button className="price-button">KLANT WORDEN</button>
            </div>
          </div>
          <div className="price-card">
            <div className="desc">
              <h1>Basis + service</h1>
              <br />
              <p>abonnement</p>
            </div>
            <div className="price">
              <p className="card-price">€1,99</p>
              <br />
              <p>Per maand/tracker</p>
            </div>
            <div className="price-description">
              <p>7 jaar terugkijken</p>
              <br />
              <p>7 dagen per week telefonische bereikbaar</p>
              <br />
              <p>Toegang tot alle functionaliteiten</p>
              <br />
              <button className="price-button">KLANT WORDEN</button>
            </div>
          </div>
          <div className="price-card">
            <div className="desc">
              <h1>Premium</h1>
              <br />
              <p>abonnement</p>
            </div>
            <div className="price">
              <p className="card-price">€5,99</p>
              <br />
              <p>Per maand/tracker</p>
            </div>
            <div className="price-description">
              <p>7 jaar terugkijken</p>
              <br />
              <p>Eigen service contactpersoon</p>
              <br />
              <p>Toegang tot alle functionaliteiten</p>
              <br />
              <p>Update elke 30 seconden</p>
              <br />
              <p>Speciaal voor intensief gebruik</p>
              <br />
              <p>Korting op onze hardware</p>
              <br />
              <button className="price-button">KLANT WORDEN</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PriceCards;

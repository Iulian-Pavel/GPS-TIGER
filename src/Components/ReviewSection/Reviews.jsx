import React from "react";
import "./reviews.scss";
import expedition_outdoor from "./images/expedition_outdoor.png";
import acch from "./images/acch.jpg";
import dg from "./images/deutsche_glassfer.png";

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <h1>Lees wat anderen van onze service vinden</h1>
        <div className="review-section">
          <div className="review-card">
            <div className="review-text">
              Met de super handige app van GPS Tiger kunnen we nu real time zien
              waar onze verhuursloepen zijn en kunnen we veel beter inspelen op
              veranderingen in onze planning! Wij hebben gekozen voor een
              fullservice abonnement zodat wij 7 dagen per week kunnen
              terugvallen op een contactpersoon van GPS Tiger en betalen we
              maandelijks slechts <b>€2.25</b> per sloep
            </div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <div className="company_img">
              <img src={expedition_outdoor} alt="expedition outdoor logo" />
            </div>
          </div>
          <div className="review-card">
            <div className="review-text">
              Al onze campers zijn uitgerust met de track en trace software van
              GPS Tiger. Voor slechts <b>1 euro</b> per voertuig hebben we
              continu zicht op de locatie van onze campers en worden we altijd
              binnen 5 dagen geholpen door de helpdesk van GPS Tiger.
            </div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <div className="company_img">
              <img src={acch} alt="acch logo" />
            </div>
          </div>
          <div className="review-card">
            <div className="review-text">
              We hebben bewust gekozen voor de software van GPS Tiger. Het
              platform is nieuw, werkt bijzonder prettig en is bovendien veruit
              de meest voordelige aanbieder in de markt. Daarbij vinden wij de
              persoonlijke benadering en de vergaande service erg prettig. Met
              een fleet van ongeveer 300 voertuigen betalen wij slechts
              <b> €1.75</b> per voertuig per maand en dat is inclusief een
              service abonnement.
            </div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
            <div className="company_img">
              <img src={dg} alt="deutsche_glassfer logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

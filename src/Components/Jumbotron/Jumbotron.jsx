import React from "react";
import "./jumbotron.scss";

class Jumbotron extends React.Component {
  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="text">
            <h1 className="j-header">Meer weten over GPSTIGER</h1>
            <br />
            <p className="j-paragraph">
              GPS Tiger is een nieuwe en snelgroeiende naam in de track en trace
              wereld die zich vooral richt op het traceren van voer- en
              vaartuigen middels GPS. Met compleet vernieuwde software met tal
              van nieuwe functionaliteiten en een eigentijds design heeft u
              altijd en overal real-time zicht op de objecten die u wenst te
              traceren, en dat wereldwijd!
              <br />
              <br />
              De voordelen die GPS Tiger biedt zijn groot, denk aan
              gebruiksvriendelijkse software, een handige app, de software is
              naar wens aanpasbaar en in eigen beheer, altijd opzegbaar en
              gegarandeerd als beste geprijsd!
            </p>
          </div>
          <div className="cards">
            <div className="card card-1">
              <h1 className="card-h1">Platform</h1>
              <p className="card-desc">Hoe werkt ons unieke Platform 2.0</p>
              <button className="card-button">Bekijk de mogelijkheden</button>
            </div>
            <div className="card card-2">
              <h1 className="card-h1">Hardware</h1>
              <p className="card-desc">Start tracking vanaf €0,99 per maand</p>
              <button className="card-button">Bekijk de mogelijkheden</button>
            </div>
            <div className="card card-3">
              <h1 className="card-h1">Support Desk</h1>
              <p className="card-desc">Onze helpdesk helpt u verde</p>
              <button className="card-button">Bekijk de mogelijkheden</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Jumbotron;

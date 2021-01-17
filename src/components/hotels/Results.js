import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Shared/Button';
import Rating from './Rating'
import Moment from 'react-moment';
import './Results.scss';

export default function Results(props) {
    const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="hotel-results">
      { (props.loading) ?
            <div className="spinner">           
                <FontAwesomeIcon icon="circle-notch" />
            </div>
        :
            <>
                { props.content.map((hotel, i) => (
                    <div key={i} className="hotel-card">
                        <div className="hotel-card-main">
                            <div className="hotel-thumbnail">
                                <img src={hotel.thumbnail} />
                            </div>
                            <div className="hotel-details">
                                <h3 className="detail-name">{hotel.name}</h3>
                                <div className="detail-destination">{hotel.destination}</div>
                                <Rating rating={hotel.rating} />
                                <div className="detail-party">
                                    {partyToString(hotel.party)}
                                </div>
                                <div className="details-date">
                                <Moment format="Do MMMM YYYY">{hotel.date}</Moment> {` for ${hotel.duration} day${(hotel.duration> 1) ? "s" : ""}`}
                                </div>
                                <div className="detail-departFrom">departing from {hotel.departsFrom}</div>
                                <div className="detail-book">
                                    <Button 
                                        type="book" 
                                        name={`Book now<div>£${hotel.price.toFixed(2)}</div>`} 
                                        disabled={props.loading}
                                    />
                                </div>
                                
                            </div>
                            <div className="hotel-overview">
                                <Button
                                    type="expand" 
                                    name="Read less about this hotel" 
                                    icon={`angle-${(i === activeCard)? "up" : "down"}`}
                                    action={() => setActiveCard((i === activeCard) ? -1 : i)}
                                    disabled={props.loading}
                                />
                            </div>
                        </div>
                        <div className={`hotel-expanded ${(activeCard === i) ? "active" : ""}`}>
                            <h4>Overview</h4>
                            {hotel.overview}
                        </div>
                    </div>
                ))}
            </>
      }
    </div>
  );
}

function partyToString(party) {
    let partyText = "";
    if (party.adults > 0) {
        const identifier = (party.adults > 1) ? "Adults" : "Adult";
        partyText += `${party.adults} ${identifier}`;
    }
    if (party.children > 0) {
        const identifier = (party.children > 1) ? "children" : "child";
        partyText += (partyText.length > 0) ? ", " : "";
        partyText += `${party.children} ${identifier}`;
    }
    if (party.infants > 0) {
        const identifier = (party.adults > 1) ? "infants" : "infant";
        partyText += (partyText.length > 0) ? " & " : "";
        partyText += `${party.adults} ${identifier}`;
    }
    return partyText;
}
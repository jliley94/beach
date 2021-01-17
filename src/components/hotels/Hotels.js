import React, { useState, useEffect } from 'react';
import SortingPanel from './SortingPanel';
import Results from './Results';
import {hotelData} from './HotelData';
import './Hotels.scss';

export default function Hotels() {
    const [activeSort, setActiveSort] = useState(0);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Fake waiting for data to be requested
    setTimeout(() => {
        setContent(sortContent(activeSort, hotelData));
        setLoading(false);
    }, 3000);
  });

  return (
    <div className="hotels-component">
      <SortingPanel active={activeSort} setActive={setActiveSort} loading={loading} sortContent={(i) => sortContent(i, content)}/>
      <Results loading={loading} content={content} />
    </div>
  );
}

function sortContent(sortBy, content) {
    let sortedContent = [];
    switch (sortBy) {
        case 0:
            // Alpha
            sortedContent = sortByProperty(content, "name");
            break;
        case 1:
            // price
            sortedContent = sortByProperty(content, "price");
            break;
        case 2:
            //rating
            sortedContent = sortByProperty(content, "rating");
            sortedContent.reverse();
            break;
    }

    return sortedContent;
}

function sortByProperty(content, property) {
    content.sort(function(a, b){
        if(a[property] < b[property]) { return -1; }
        if(a[property] > b[property]) { return 1; }
        return 0;
    });
    return content;
}
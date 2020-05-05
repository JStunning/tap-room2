import React from 'react';
import PropTypes from "prop-types";

function DailyKeg(props) {
  return (
    <React.Fragment>
      <h2>Keg of the Day</h2>
      <hr />
      <h3>Name:</h3>
      <p>{props.kegList[0].name}</p>
      <h3>Flavor:</h3>
      <p>{props.kegList[0].flavor}</p><br />
      <img id="kegImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg-l_V397Gb4Y8-yobSexj-cb27VD-cD_72EhY2bdtM7DMfod7&usqp=CAU" alt="keg" /><br />
      <h3>Description of the day</h3>
      <p>Do you want a light less beer tasting beer that is low alcohol so you can chug alot? Then this keg is for you. This delicious brew is made by Bros for Bros,
         who want to Chug!
      </p>
      <button id="DailyKegButton" onClick = {() => props.onKegSelection(props.kegList[0].id)}>Details</button>
    </React.Fragment>
  );
}

DailyKeg.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default DailyKeg;
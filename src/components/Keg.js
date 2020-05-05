import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div>
        <h3>{props.name} - {props.brand}</h3>
        <p>Flavor: {props.flavor}</p>
        <p>Price: {props.price}$</p>
        <p>Alc/Vol: {props.alcohol}%</p>
        <button onClick = {() => props.whenKegClicked(props.id)}>Details</button>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string,
  price: PropTypes.string,
  alcohol: PropTypes.string,
  id: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;
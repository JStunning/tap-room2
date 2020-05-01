import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  console.log("kegList ",props.kegList)
  return (
    <React.Fragment>
      <h2>Keg List</h2>
      <hr />
      {props.kegList.map((keg) =>
        <div id="KegListElement">
          <Keg 
            whenKegClicked = { props.onKegSelection }
            name={keg.name}
            brand={keg.brand}
            flavor={keg.flavor}
            price={keg.price}
            alcohol={keg.alcohol}
            pints={keg.pints}
            id={keg.id}
            key={keg.id}
          />
          <hr/>
        </div>
      )}

    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;
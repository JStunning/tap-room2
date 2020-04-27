import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <hr />
      <h3>{keg.name} - {keg.brand}</h3>
        <p>Flavor: {keg.flavor}</p>
        <p>Price: {keg.price}$</p>
        <p>Alc/Vol: {keg.alcohol}%</p>
        <img id="kegDetailImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg-l_V397Gb4Y8-yobSexj-cb27VD-cD_72EhY2bdtM7DMfod7&usqp=CAU" alt="keg" /> <br />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;
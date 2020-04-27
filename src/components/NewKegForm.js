import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <label for="name"><b>Name </b></label>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' /><br />
        <label for="brand"><b>Brand </b></label>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' /><br />
        <label for="flavor"><b>Flavor </b></label>
        <input
          name='flavor'
          placeholder='Keg Flavor' /><br />
        <label for="price"><b>Price </b></label>
        <input
          name='price'
          placeholder='Price' /><br />
        <label for="alcohol"><b>Alcohol </b></label>
        <input
          name='alcohol'
          placeholder='Alcohol by volume' /><br />
        <button type='submit'>Add Keg </button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
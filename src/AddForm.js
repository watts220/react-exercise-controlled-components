import React from 'react';
import PropTypes from 'prop-types';

const AddForm = (props) => {
    return (
      	<form onSubmit={props.addItem}>
            <input
              type="text"
              placeholder="Enter New Item"
              value={props.value}
              onChange={props.handleChange}
            /> 
            <button disabled={props.inputIsEmpty}>Add</button>
		</form>
    );
}

AddForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default AddForm;
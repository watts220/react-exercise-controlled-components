import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = (props) => {
    return (
      	<button onClick={props.deleteLastItem} disabled={props.noItemsFound}>
          Delete Last Item
        </button>
    );
}

DeleteItem.propTypes = {
  noItemsFound: PropTypes.bool,
  deleteLastItem: PropTypes.func.isRequired,
};

export default DeleteItem;
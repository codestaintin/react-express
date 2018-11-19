import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const GroceryListRow = ({
  grocery, handleDelete, handlePurchase
}) => (
  <Fragment>
    <tr>
      <th scope="row">&nbsp;</th>
      <td>{grocery.name}</td>
      <td>
        {
          grocery.purchased
            ? (
              <button
                type="button"
                className="btn btn-info"
                onClick={() => handlePurchase(grocery._id)}
              >
              Bought
              </button>
            )
            : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handlePurchase(grocery._id)}
              >
              Buy
              </button>
            )
        }
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(grocery._id)}
        >
              Delete Item
        </button>
      </td>
    </tr>
  </Fragment>
);

GroceryListRow.propTypes = {
  grocery: PropTypes.shape({}),
  handleDelete: PropTypes.func.isRequired,
  handlePurchase: PropTypes.func.isRequired
};

export default GroceryListRow;

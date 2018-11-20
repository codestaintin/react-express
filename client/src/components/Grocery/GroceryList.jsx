import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GroceryListRow from './GroceryListRow';

const GroceryList = ({ groceries, handleDelete, handlePurchase }) => (
  <Fragment>
    <div className="container">
      <table className="table table-hover main-section">
        <thead>
          <tr>
            <th scope="col">&nbsp;</th>
            <th scope="col">Grocery Name</th>
            <th scope="col">Purchase Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            groceries.map(grocery => (
              <GroceryListRow
                key={grocery._id}
                grocery={grocery}
                handleDelete={handleDelete}
                handlePurchase={handlePurchase}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  </Fragment>
);

GroceryList.propTypes = {
  groceries: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handlePurchase: PropTypes.func.isRequired
};

export default GroceryList;

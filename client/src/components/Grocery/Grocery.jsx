import React, { Fragment } from 'react';
import PropTypes, { shape } from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { bindActionCreators } from 'redux';
import {
  getAllGroceries,
  deleteGrocery,
  createGrocery,
  purchaseGrocery
} from '../../actions/grocery/groceryActions';
import AddGrocery from './AddGrocery';
import GroceryList from './GroceryList';

/**
 * @class Grocery
 *
 * @returns {JSX}
 */
class Grocery extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreateGrocery = this.handleCreateGrocery.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    this.props.getAllGroceries();
  }

  handleDelete(id) {
    this.props.deleteGrocery(id);
  }

  handleCreateGrocery(grocery) {
    this.props.createGrocery(grocery);
  }

  handlePurchase(id) {
    this.props.purchaseGrocery(id);
  }

  render() {
    const { groceries, loading } = this.props;
    return (
      <Fragment>
        <AddGrocery createGrocery={this.handleCreateGrocery} />
        {loading
        && (
          <div className="d-flex justify-content-center">
            <Loader type="Audio" color="#007bff" className="text-center" />
          </div>
        )
        }
        {
          !loading && groceries.length > 0
            && (
              <GroceryList
                groceries={groceries}
                handleDelete={this.handleDelete}
                handlePurchase={this.handlePurchase}
              />
            )
        }

        {
          !loading && !groceries.length > 0
              && (
                <h1 className="text-center">
                Please add new items
                </h1>
              )
        }
      </Fragment>

    );
  }
}

const mapStateToProps = ({ allGroceries }) => ({
  groceries: allGroceries.groceries,
  loading: allGroceries.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllGroceries,
  deleteGrocery,
  createGrocery,
  purchaseGrocery
}, dispatch);

Grocery.propTypes = {
  groceries: PropTypes.arrayOf(shape({})),
  getAllGroceries: PropTypes.func.isRequired,
  deleteGrocery: PropTypes.func.isRequired,
  createGrocery: PropTypes.func.isRequired,
  purchaseGrocery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Grocery);

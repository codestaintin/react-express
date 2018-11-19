import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class AddGrocery
 *
 * @returns {JSX}
 */
class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createGrocery(this.state.name);
    this.setState({ name: '' });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <form
          className="form-inline custom_form"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group mx-sm-3 mb-2">
            <input
              className="form-control"
              name="name"
              placeholder="Add Grocery"
              pattern="^[a-zA-z ]*$"
              type="text"
              required
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary mb-2"
          >
            Add Grocery
          </button>
        </form>
      </div>
    );
  }
}

AddGrocery.propTypes = {
  createGrocery: PropTypes.func.isRequired
};

export default AddGrocery;

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

class CartIndicator extends Component {
  render() {
    return (
      <div className="cart mt-2 ml-auto">
        <Button
          color="primary"
          onClick={() => this.props.history.push("/cart")}
        >
          <FontAwesomeIcon icon={faShoppingCart} id="cartIcon" />
          <span className="ml-2">{this.props.cart.products.length}</span>
        </Button>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(CartIndicator));

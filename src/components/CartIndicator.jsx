import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class CartIndicator extends Component {
  render() {
    return (
      <div className="cart mt-2 ml-auto">
        <Button color="primary" onClick={() => {}}>
          <FontAwesomeIcon icon={faShoppingCart} id="cartIcon" />
          <span className="ml-2">0</span>
        </Button>
      </div>
    );
  }
}

export default CartIndicator;

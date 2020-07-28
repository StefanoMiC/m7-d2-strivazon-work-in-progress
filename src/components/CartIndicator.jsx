import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class CartIndicator extends Component {
  render() {
    return (
      <div className="cart">
        <Button color="primary" onClick={() => {}}>
          <span>0</span>
        </Button>
      </div>
    );
  }
}

export default CartIndicator;

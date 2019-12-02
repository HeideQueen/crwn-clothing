import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  CartItemsContainer,
  CartDropdownContainer,
  EmptyMessageContainer,
  ButtonContainer
} from "./cart-dropdown.styles";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer className="empty-message">
          Your cart is empty
        </EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <ButtonContainer
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </ButtonContainer>
  </CartDropdownContainer>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

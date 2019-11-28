import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem, clearItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<div className="value">{quantity}</div>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">${price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (cartItem) => dispatch(addItem(cartItem)),
	removeItem: (cartItem) => dispatch(removeItem(cartItem)),
	clearItem: (cartItem) => dispatch(clearItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

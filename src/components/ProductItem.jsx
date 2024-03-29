import React, { useState, useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import addCart from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {
	//const [cart, setCart] = useState([]);
	const {addToCart} = useContext(AppContext);

	const handleClick = /* () */ item => {
		//setCart([]);
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCart} alt="" />
				</figure>
				{}
			</div>
		</div>
	);
}

export default ProductItem;
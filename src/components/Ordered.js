import React from "react";
import { Link } from "react-router-dom";
import flowerIcon from '../assets/images/flowerIcon.png';

const Ordered = () => {
    return (
        <div className="order">
            <h2 className="order-title">Thanks for ordering!</h2>
            <p className="order-text-1">Unfortunately, we will not be able to ship your items as we lack shipping capabilities and there are no items to ship and this is all fake anyway.</p>
            <p className="order-text-2">The items you have ordered are not impossible to obtain elsewhere. Try giving Grandma a call, check Amazon, or ask for therapy/massage recommendations, etc.</p>
            <Link className="order-img-link" to="/">
                <img className="order-img" src={flowerIcon} alt="Flower icon" />     
            </Link>
            <p className="order-text-3">May you live a good life with a healthy amount of stress.</p>
        </div>
    )
}

export default Ordered;
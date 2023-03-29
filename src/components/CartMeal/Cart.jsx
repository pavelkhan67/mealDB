import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    let nam = '';
    for(const meal of cart){
        nam = nam + ' ' + meal.strMeal+ ',';
    }
    
    return (
        <div>
            <h4>My Meal DB</h4>
            <h6>Selected item: <br /> {nam}</h6>
        </div>
    );
};

export default Cart;
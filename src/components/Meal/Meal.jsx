import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Meal.css'

const Meal = (props) => {
    const { strMealThumb, strMeal, strCategory } = props.meal
    return (
        <div className='meal'>
            <div style={{ padding: '10px', marginBottom: '30px' }}>
                <img className='img-fluid rounded-3 ' src={strMealThumb} alt="" />
                <h4>{strMeal}</h4>
                <p>{strCategory}</p>
            </div>
            <button onClick={()=> props.handleAddToCart(props.meal)} className='meal-btn'>Add To myMeal <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Meal;
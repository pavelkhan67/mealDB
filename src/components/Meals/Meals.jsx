import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
import Cart from '../CartMeal/Cart';

const Meals = () => {
    const [meals, setMeals] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])

    const handleAddToCart = (meal) => {
        let newCart = [...cart, meal];
        setCart(newCart)
    }

    return (
        <div className='meals'>
           <div className="meals-container">
           {
            meals.map(meal => <Meal meal={meal} key={meal.idMeal} handleAddToCart={handleAddToCart}></Meal>)
           }
           </div>
           <div className="cart-container">
           <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Meals;
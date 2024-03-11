import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
const [cart , setCart] = useState([]);



    useEffect( () => {
        fetch('Recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    const handleAddToCart = recipe => {
        // console.log(recipe);
    const newCart = [...cart, recipe]
    setCart(newCart);
    
    }

    return (
        <div>
            <h2>Recipes here:{recipes.length}</h2>
            <h4>Cart: {cart.length}</h4>
          <div className="recipe-container">
          {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleAddToCart={handleAddToCart}></Recipe>)
            }
          </div>
        </div>
    );
};

export default Recipes;
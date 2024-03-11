
import './Recipe.css'
const Recipe = ({recipe,handleAddToCart}) => {
    // console.log(recipe)
    const {title, img, Price} = recipe;
    return (
        <div className="recipe">
            <h1>Recipe:{title}</h1>
            <img src={img} alt="" />
            <p>Price:${Price}</p>
            <button onClick={() => handleAddToCart(recipe)}>Purchase</button>
        </div>
    );
};

export default Recipe;
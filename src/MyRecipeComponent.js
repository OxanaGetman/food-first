import iconOne from "./iconOne.png";

function MyRecipeComponent({label, image, calories, ingredients, cuisineType, dishType}) {
    return(
        <div className="container">
            <h2>{label}</h2>
            <p>Dish type: {dishType}</p>
            <img src={image} alt="pic"/>

            <ul className="list">
                {ingredients.map(ingredient => (
                    <li><img src={iconOne} alt="pic" width="20px"/>{ingredient}</li>
                ))}
            </ul>

            <p>Calories: {calories.toFixed()}</p>
            <p>Cuisine: {cuisineType}</p>
        </div>
    )
}

export default MyRecipeComponent;
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipeComponent from './MyRecipeComponent';
import logo from './icon.png';

function App() {
  const MY_ID = "7947ccc9";
  const MY_KEY = "67ac1cb75c62d4b2d4b5fe239d005fe0";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado")

  const myRecipeSearch = (e) => {
    setMySearch (e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  const getRecipe = useCallback( async () => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipes(data.hits)
  }, [wordSubmitted])

  useEffect(() => {
    getRecipe()
  }, [getRecipe])

  return (
    <div className="App">
      <div className="container">
      <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Finde a Recipe!</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch} className="container">
          <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
          </input>
          <button>
          <img src={logo} alt="picOne"/>
        </button>
        </form>
      </div>

      {myRecipes.map(element => (
        <MyRecipeComponent label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        cuisineType={element.recipe.cuisineType}
        dishType={element.recipe.dishType}
        />
      ))}

    </div>
  );
}

export default App;

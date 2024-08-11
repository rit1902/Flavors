import React, { useState } from 'react';
import './tteokbokki.css';
import tteokbokki1 from '../assests/tteokbokki.jpg';

const Tteokbokki = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Tteokbokki',
          text: 'Check out this simple and delicious Tteokbokki recipe!',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert('Sharing is not supported in this browser.');
    }
  };

//   const handleCheckboxChange = (item) => {
//     setCheckedItems((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

  return (
    <div className="recipe-container">
      <div className="recipe-image">
      <img src={tteokbokki1} alt="tteokbokki" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Tteokbokki</h1>
        <p>
        A popular and spicy Korean street food, Tteokbokki features chewy rice cakes simmered in a rich, savory-sweet chili sauce. This dish is known for its bold flavors, combining gochujang (Korean chili paste) with garlic, soy sauce, and a touch of sweetness to create a delightful and satisfying experience. Often garnished with boiled eggs, fish cakes, and green onions, Tteokbokki offers a comforting and flavorful taste of Korean cuisine. Its vibrant color and irresistible aroma make it a favorite for anyone seeking a delicious and hearty meal.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately  30 minutes</li>
          <li>Preparation: 10 minutes</li>
          <li>Cooking: 20 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          400 grams tteok (Korean rice cakes)
          </li>
          <li>
          2 tablespoons gochujang (Korean red chili paste)
          </li>
          <li>
          1 tablespoon gochugaru (Korean red chili flakes)
          </li>
          <li>
          2 tablespoons soy sauce
          </li>
          <li>
          2 tablespoons sugar
          </li>
          <li>
          1 teaspoon sesame oil
          </li>
          <li>
          1 clove garlic, minced
          </li>
          <li>
          3 cups water or dashi (Korean soup stock)
          </li>
          <li>
          1/2 cup fish cake, sliced (optional)
          </li>
          <li>
          1 green onion, chopped
          </li>
          <li>
          Sesame seeds, for garnish
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the Rice Cakes If using refrigerated or frozen rice cakes, soak them in warm water for 10-15 minutes to soften. Drain and set aside
          </li>
          <li>
          Make the Sauce In a bowl, mix together the gochujang, gochugaru, soy sauce, sugar, sesame oil, and minced garlic until well combined.
          </li>
          <li>
          Cook the Tteokbokki In a large pan or pot, bring the water or dashi to a boil over medium heat. Add the sauce mixture and stir well.
          </li>
          <li>
          Add Rice Cakes and Fish Cake Add the rice cakes and fish cake slices (if using) to the pan. Stir to coat them evenly with the sauce. Let the mixture simmer for about 10-15 minutes, stirring occasionally, until the sauce thickens and the rice cakes are soft and chewy.
          </li>
          <li>
          Garnish and Serve Add the chopped green onion and stir for an additional 1-2 minutes. Remove from heat, sprinkle with sesame seeds, and serve hot.
          </li>
        </ol>
      </div>
      <div className="recipe-text5">
        <h2>Nutrition</h2>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td>450kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>85g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>8g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>10g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tteokbokki;

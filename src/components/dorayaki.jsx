import React, { useState } from 'react';
import './dorayaki.css';
import dorayaki1 from '../assests/dorayaki.jpg';

const Dorayaki = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Dorayaki Recipe',
          text: 'Check out this simple and delicious Dorayaki recipe!',
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
      <img src={dorayaki1} alt="dorayaki" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Dorayaki</h1>
        <p>
        A beloved Japanese treat, Dorayaki is a delightful dessert that features two fluffy, pancake-like cakes filled with sweet red bean paste. This classic confection offers a perfect balance of soft texture and rich sweetness, making it a comforting and nostalgic favorite. The combination of the light, spongy cakes with the smooth, flavorful filling captures the essence of Japanese indulgence.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 30 minutes</li>
          <li>Preparation: 10 minutes</li>
          <li>Cooking: 20 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          1 cup all-purpose flour
          </li>
          <li>
          1/2 cup sugar
          </li>
          <li>
          1/2 teaspoon baking powder
          </li>
          <li>
          1/2 teaspoon baking soda
          </li>
          <li>
          1/2 cup milk
          </li>
          <li>
          2 large eggs
          </li>
          <li>
          1 tablespoon honey
          </li>
          <li>
          1 teaspoon sesame oil
          </li>
          <li>
          1 tablespoon vegetable oil
          </li>
          <li>
          1 cup sweet red bean paste (anko)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the batter: In a large bowl, whisk together the flour, sugar, baking powder, and baking soda. In another bowl, mix the milk, eggs, honey, and vegetable oil until well combined. Gradually add the wet ingredients to the dry ingredients, stirring until smooth.
          </li>
          <li>
          Cook the pancakes: Heat a non-stick skillet or griddle over medium-low heat. Lightly grease with oil. Pour a small amount of batter onto the skillet to form a round pancake. Cook until bubbles form on the surface, then flip and cook the other side until golden brown. Repeat with the remaining batter, keeping the pancakes warm.
          </li>
          <li>
          Prepare the filling: If the red bean paste is not pre-sweetened, adjust the sweetness to taste. You can also lightly heat it to make it easier to spread.
          </li>
          <li>
          Assemble the Dorayaki: Place a spoonful of sweet red bean paste in the center of one pancake. Top with another pancake, pressing gently to spread the filling evenly.
          </li>
          <li>
          Serve: Enjoy the Dorayaki warm or at room temperature.
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
              <td>200kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>30g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>6g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>8g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dorayaki;

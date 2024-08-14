import React, { useState } from 'react';
import './hargow.css';
import hargow1 from '../assests/hargow1.jpg';

const Hargow = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Hargow Recipe',
          text: 'Check out this simple and delicious Hargow recipe!',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that do not support the Web Share API
      const shareUrl = window.location.href;
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Link copied to clipboard. You can share it manually!'))
        .catch(() => alert('Failed to copy the link. Please copy it manually: ' + shareUrl));
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
      <img src={hargow1} alt="hargow" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Hargow</h1>
        <p>
        A treasured dim sum classic, Har Gow is a delightful Cantonese dumpling known for its delicate, translucent wrapper and succulent shrimp filling. These steamed dumplings offer a perfect harmony of textures, with a slightly chewy exterior encasing a savory and flavorful shrimp mixture. The light, elegant flavors make Har Gow a cherished favorite in Chinese cuisine.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 1 hour</li>
          <li>Preparation: 30 minutes</li>
          <li>Cooking: 30 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          200 grams shrimp, peeled and deveined
          </li>
          <li>
          1/4 cup bamboo shoots, finely chopped
          </li>
          <li>
          1/4 cup water chestnuts, finely chopped
          </li>
          <li>
          1 tablespoon cornstarch
          </li>
          <li>
          1 tablespoon soy sauce
          </li>
          <li>
          1 tablespoon oyster sauce
          </li>
          <li>
          1 teaspoon sesame oil
          </li>
          <li>
          1 teaspoon sugar
          </li>
          <li>
          1/2 teaspoon salt
          </li>
          <li>
          1/4 teaspoon white pepper
          </li>
          <li>
          Har Gow wrappers (store-bought or homemade)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the filling: Finely chop the shrimp, bamboo shoots, and water chestnuts. In a bowl, combine the chopped shrimp, bamboo shoots, water chestnuts, cornstarch, soy sauce, oyster sauce, sesame oil, sugar, salt, and white pepper. Mix well until all ingredients are evenly incorporated.
          </li>
          <li>
          Prepare the wrappers: If using store-bought wrappers, keep them covered with a damp cloth to prevent drying out. If making homemade wrappers, roll out the dough thinly and cut into small circles.
          </li>
          <li>
          Assemble the dumplings: Place a small spoonful of filling in the center of each wrapper. Fold the wrapper in half and pleat the edges to seal the dumpling. Pinch the edges together to ensure a tight seal.
          </li>
          <li>
          Steam the dumplings: Arrange the dumplings in a steamer lined with parchment paper or cabbage leaves. Steam over boiling water for 10-12 minutes, or until the wrappers are translucent and the filling is cooked through.
          </li>
          <li>
          Serve: Remove the dumplings from the steamer and serve hot with dipping sauce or soy sauce.
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
              <td>70kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>8g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>6g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>2g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Hargow;

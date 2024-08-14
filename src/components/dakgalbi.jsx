import React, { useState } from 'react';
import './dakgalbi.css';
import dakgalbi1 from '../assests/dakgalbi.jpg';

const DakGalbi = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Dakgalbi',
          text: 'Check out this simple and delicious Dakgalbi recipe!',
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
      <img src={dakgalbi1} alt="dakgalbi" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Dak Galbi</h1>
        <p>
        Dak Galbi is a popular Korean dish known for its bold and spicy flavors. It features marinated chicken pieces stir-fried with an array of vegetables, including cabbage, sweet potatoes, and onions, all coated in a savory and slightly sweet chili sauce. The dish is often cooked at the table, allowing diners to enjoy the sizzling aroma and vibrant colors. Dak Galbi offers a satisfying combination of tender chicken, crunchy vegetables, and the signature heat of gochujang (Korean chili paste), making it a favorite for anyone craving a flavorful and hearty meal.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 1 hour</li>
          <li>Preparation: 20 minutes</li>
          <li>Cooking: 40 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          500 grams boneless chicken thighs, cut into bite-sized pieces
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
          1 tablespoon sugar
          </li>
          <li>
          1 tablespoon sesame oil
          </li>
          <li>
          2 cloves garlic, minced
          </li>
          <li>
          1 tablespoon ginger, minced
          </li>
          <li>
          1/2 cup cabbage, chopped
          </li>
          <li>
          1 sweet potato, peeled and sliced
          </li>
          <li>
          1 onion, sliced
          </li>
          <li>
          1/2 cup carrots, julienned
          </li>
          <li>
          1/2 cup rice cakes (tteok), soaked in warm water
          </li>
          <li>
          2 green onions, sliced
          </li>
          <li>
          1 tablespoon sesame seeds, toasted (for garnish)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Marinate the Chicken: In a large bowl, combine the gochujang, gochugaru, soy sauce, sugar, sesame oil, minced garlic, and ginger. Add the chicken pieces and mix well to coat. Marinate for at least 30 minutes.
          </li>
          <li>
          Prepare the Vegetables: While the chicken is marinating, prepare the cabbage, sweet potato, onion, and carrots. Set aside.
          </li>
          <li>
          Cook the Dak Galbi: Heat a large skillet or wok over medium-high heat. Add the marinated chicken and cook until it begins to brown.
          </li>
          <li>
          Add Vegetables: Add the cabbage, sweet potato, onion, and carrots to the skillet. Stir-fry until the vegetables are tender and the chicken is cooked through.
          </li>
          <li>
          Add Rice Cakes: Add the soaked rice cakes to the skillet and stir well to combine with the sauce and vegetables. Cook for an additional 5-7 minutes until the rice cakes are soft.
          </li>
          <li>
          Finish and Serve: Stir in the sliced green onions and cook for another minute. Transfer to a serving dish and garnish with toasted sesame seeds.
          </li>
          <li>
          Enjoy: Serve hot as a main dish, often accompanied by rice or lettuce wraps.
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
              <td>550kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>60g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>35g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>20g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DakGalbi;

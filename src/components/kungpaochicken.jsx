import React, { useState } from 'react';
import './kungpaochicken.css';
import kungpaochicken1 from '../assests/kungpaochicken.jpg';

const Kungpaochicken = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Kung pao chicken Recipe',
          text: 'Check out this simple and delicious Kung pao chicken recipe!',
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
      <img src={kungpaochicken1} alt="kungpaochicken" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Kung pao chicken</h1>
        <p>
        A beloved dish in Sichuan cuisine, Kung Pao Chicken is a vibrant stir-fry known for its bold, spicy flavors and satisfying crunch. This classic recipe features tender chunks of chicken cooked with peanuts, bell peppers, and dried chilies, all coated in a savory and tangy sauce. The harmonious blend of heat, sweetness, and umami makes Kung Pao Chicken a standout favorite, offering a perfect balance of flavors and textures.
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
          500 grams chicken breast or thighs, diced
          </li>
          <li>
          1/4 cup roasted peanuts
          </li>
          <li>
          1/4 cup dried red chilies
          </li>
          <li>
          1/2 cup bell peppers, diced
          </li>
          <li>
          1/2 cup onion, diced
          </li>
          <li>
          2 cloves garlic, minced
          </li>
          <li>
          1 tablespoon ginger, minced
          </li>
          <li>
          3 tablespoons soy sauce
          </li>
          <li>
          2 tablespoons rice vinegar
          </li>
          <li>
          1 tablespoon hoisin sauce
          </li>
          <li>
          1 tablespoon oyster sauce
          </li>
          <li>
          1 tablespoon sugar
          </li>
          <li>
          1 teaspoon sesame oil
          </li>
          <li>
          1 teaspoon cornstarch mixed with 2 tablespoons water (for thickening)
          </li>
          <li>
          2 tablespoons vegetable oil
          </li>
          <li>
          1/4 teaspoon red pepper flakes (optional, for extra heat)
          </li>
          <li>
          Salt and pepper to taste
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the chicken: Dice the chicken into bite-sized pieces. Season with a pinch of salt and pepper.
          </li>
          <li>
          Prepare the sauce: In a small bowl, mix together the soy sauce, rice vinegar, hoisin sauce, oyster sauce, sugar, and sesame oil. Set aside.
          </li>
          <li>
          Stir-fry the aromatics: Heat vegetable oil in a large skillet or wok over medium-high heat. Add the minced garlic, ginger, and dried red chilies. Stir-fry for 1-2 minutes until fragrant.
          </li>
          <li>
          Cook the chicken: Add the diced chicken to the skillet. Stir-fry for 5-7 minutes until the chicken is cooked through and slightly golden.
          </li>
          <li>
          Add vegetables: Add the diced bell peppers and onions to the skillet. Stir-fry for 3-4 minutes until they are tender-crisp.
          </li>
          <li>
          Add the sauce: Pour the prepared sauce over the chicken and vegetables. Stir well to coat everything evenly.
          </li>
          <li>
          Thicken the sauce: Stir in the cornstarch mixture and cook for another 1-2 minutes until the sauce thickens and becomes glossy.
          </li>
          <li>
          Add peanuts: Toss in the roasted peanuts and mix well.
          </li>
          <li>
          Serve: Garnish with additional red pepper flakes if desired and serve hot over rice or noodles.
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
              <td>300kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>15g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>15g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kungpaochicken;

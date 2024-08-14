import React, { useState } from 'react';
import './branzinnoalforno.css';
import branzinnoalforno1 from '../assests/branzinnoalforno.jpg';

const BranzinnoalForno = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Branzinno al Forno',
          text: 'Check out this simple and delicious Branzinno al Forno recipe!',
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
      <img src={branzinnoalforno1} alt="branzinnoalforno" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Branzinno al Forno</h1>
        <p>
           A classic and elegant Italian dish, Branzino al Forno features tender and flaky branzino fish baked to perfection with a blend of fresh herbs and zesty lemon. This dish highlights the delicate flavor of the fish, enhanced by a crisp, golden crust and aromatic seasoning. Often accompanied by roasted vegetables or a light salad, Branzino al Forno offers a sophisticated and satisfying meal that beautifully captures the essence of Mediterranean cuisine.
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
          2 whole branzino (sea bass), cleaned and scaled
          </li>
          <li>
          2 tablespoons olive oil
          </li>
          <li>
          1 lemon, thinly sliced
          </li>
          <li>
          3 cloves garlic, minced
          </li>
          <li>
          1 tablespoon fresh rosemary, chopped
          </li>
          <li>
          1 tablespoon fresh thyme, chopped
          </li>
          <li>
          1 teaspoon dried oregano
          </li>
          <li>
          Salt and freshly ground black pepper, to taste
          </li>
          <li>
          1/4 cup white wine (optional)
          </li>
          <li>
          1/4 cup fresh parsley, chopped (for garnish)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Preheat the Oven: Preheat your oven to 375°F (190°C).
          </li>
          <li>
          Prepare the Branzino: Rinse the branzino under cold water and pat dry with paper towels. Make sure the fish is cleaned and scaled.
          </li>
          <li>
          Season the Fish: Rub the outside and inside of each fish with olive oil. Season generously with salt and black pepper.
          </li>
          <li>
          Stuff the Fish: Insert lemon slices, minced garlic, rosemary, and thyme into the cavity of each fish. You can also place a few lemon slices on top of the fish for extra flavor.
          </li>
          <li>
          Prepare for Baking: Place the fish on a baking sheet lined with parchment paper or in a baking dish. Drizzle with additional olive oil and pour white wine over the fish if using.
          </li>
          <li>
          Bake: Bake in the preheated oven for 25-30 minutes, or until the fish flakes easily with a fork and is cooked through. The skin should be crisp and golden.
          </li>
          <li>
          Garnish and Serve: Remove the fish from the oven and garnish with fresh parsley. Serve hot with your choice of side dishes, such as roasted vegetables or a light salad.
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
              <td>250kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>30g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>10g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>12g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranzinnoalForno;

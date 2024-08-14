import React, { useState } from 'react';
import './ratatouille.css'; // Make sure this matches the desired CSS file
import ratatouille1 from '../assests/ratatouille.jpg'; // Ensure the path is correct

const Ratatouille = () => {
  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Ratatouille Recipe',
          text: 'Check out this simple and delicious Ratatouille recipe!',
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

  return (
    <div className="recipe-container">
      <div className="recipe-image">
        <img src={ratatouille1} alt="Ratatouille" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Ratatouille</h1>
        <p>
          A classic French vegetable dish that celebrates the flavors of summer, Ratatouille is a vibrant and rustic medley of eggplant, zucchini, bell peppers, and tomatoes. These fresh vegetables are simmered together with aromatic herbs and olive oil, creating a dish that is both hearty and healthy. Perfect as a side dish or a main course, Ratatouille can be enjoyed hot or at room temperature, making it versatile for any occasion. Its harmonious blend of flavors and textures makes it a delightful addition to any meal.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 1 hour</li>
          <li>Preparation: 15 minutes</li>
          <li>Cooking: 45 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>1 medium eggplant, diced</li>
          <li>2 zucchini, sliced</li>
          <li>1 red bell pepper, diced</li>
          <li>1 yellow bell pepper, diced</li>
          <li>1 onion, chopped</li>
          <li>3 cloves garlic, minced</li>
          <li>4 tomatoes, chopped</li>
          <li>2 tablespoons olive oil</li>
          <li>1 teaspoon dried thyme</li>
          <li>1 teaspoon dried oregano</li>
          <li>Salt and pepper to taste</li>
          <li>Fresh basil leaves for garnish (optional)</li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
            Prepare the vegetables: Dice the eggplant and set aside. Slice the zucchini, dice the red and yellow bell peppers, chop the onion, and mince the garlic.
          </li>
          <li>
            Cook the onion and garlic: In a large skillet or Dutch oven, heat the olive oil over medium heat. Add the chopped onion and minced garlic, and sauté until the onion is translucent, about 5 minutes.
          </li>
          <li>
            Add the vegetables: Add the diced eggplant, zucchini, and bell peppers to the skillet. Stir well to combine and cook for about 10 minutes, or until the vegetables start to soften.
          </li>
          <li>
            Add tomatoes and herbs: Add the chopped tomatoes, dried thyme, dried oregano, salt, and pepper to the skillet. Stir everything together, then reduce the heat to low.
          </li>
          <li>
            Simmer: Cover the skillet and let the mixture simmer for 30–40 minutes, stirring occasionally, until the vegetables are tender and the flavors have melded together. If the mixture becomes too dry, add a splash of water or vegetable broth.
          </li>
          <li>
            Adjust seasoning: Taste and adjust the seasoning with more salt and pepper if needed.
          </li>
          <li>
            Serve: Transfer the Ratatouille to a serving dish and garnish with fresh basil leaves if desired. Serve warm or at room temperature as a side dish or main course.
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
              <td>150kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>20g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>3g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>9g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ratatouille ;

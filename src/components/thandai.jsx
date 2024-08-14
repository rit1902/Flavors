import React, { useState } from 'react';
import './thandai.css';
import thandai1 from '../assests/thandai.jpg';

const Thandai = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Thandai Recipe',
          text: 'Check out this simple and delicious Thandai recipe!',
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
      <img src={thandai1} alt="thandai" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Thandai</h1>
        <p>
        A refreshing and aromatic drink, Thandai is a delightful treat for the senses. This traditional Indian beverage features a blend of cooling spices, nuts, and seeds, mixed with milk and served chilled. The harmonious combination of flavors creates a revitalizing experience that captures the essence of Indian festive traditions.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 2 hour</li>
          <li>Preparation: 30 minutes</li>
          <li>Chilling: 1 hour 30 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          1/2 cup almonds, soaked overnight
          </li>
          <li>
          1/4 cup cashews, soaked overnight
          </li>
          <li>
          1/4 cup melon seeds (char magaz), soaked overnight
          </li>
          <li>
          1/4 cup pistachios, soaked overnight
          </li>
          <li>
          1 cup milk
          </li>
          <li>
          1/2 cup sugar (adjust to taste)
          </li>
          <li>
          1 tablespoon fennel seeds
          </li>
          <li>
          1 tablespoon poppy seeds
          </li>
          <li>
          1 teaspoon cardamom seeds (from about 6 pods)
          </li>
          <li>
          1/4 teaspoon black pepper
          </li>
          <li>
          1 tablespoon rose water
          </li>
          <li>
          1 tablespoon kewra water (optional)
          </li>
          <li>
          1/4 cup fresh coriander leaves, chopped
          </li>
          <li>
          1/4 cup dried rose petals (for garnish, optional)
          </li>
          <li>
          1/4 cup vegetable oil or ghee
          </li>
          <li>
          Ice cubes (for serving)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the nuts and seeds: Drain the soaked almonds, cashews, melon seeds, and pistachios. Blend them together with a little water to form a smooth paste.
          </li>
          <li>
          Make the spice blend: In a small pan, dry roast the fennel seeds, poppy seeds, and cardamom seeds until aromatic. Allow them to cool, then grind into a fine powder.
          </li>
          <li>
          Combine ingredients: In a large bowl, mix the nut paste, spice blend, and sugar with the milk until well combined.
          </li>
          <li>
          Add flavorings: Stir in the rose water and kewra water (if using). Mix well.
          </li>
          <li>
          Chill the Thandai: Refrigerate the mixture for at least 1 hour to allow the flavors to meld.
          </li>
          <li>
          Serve: Strain the chilled Thandai through a fine mesh sieve into glasses over ice cubes. Garnish with dried rose petals if desired.
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
              <td>40g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>8g</td>
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

export default Thandai;

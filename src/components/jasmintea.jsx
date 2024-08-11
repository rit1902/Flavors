import React, { useState } from 'react';
import './jasmintea.css';
import jasmintea1 from '../assests/jasminetea.jpg';

const Jasmintea = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Jasmin Tea Recipe',
          text: 'Check out this simple and delicious Jasmin Tea recipe!',
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
      <img src={jasmintea1} alt="jasmintea" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Jasmin Tea</h1>
        <p>
        A soothing and aromatic beverage, Jasmine Tea is a fragrant delight that embodies elegance and calm. This classic tea features high-quality green or white tea leaves infused with the delicate scent of jasmine flowers. The gentle, floral aroma and subtle, refreshing flavor create a serene drinking experience, making Jasmine Tea a cherished choice for moments of relaxation and tranquility.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 1 hour</li>
          <li>Preparation: 30 minutes</li>
          <li>Steeping: 30 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          1 tablespoon loose jasmine tea leaves (or 1 jasmine tea bag)
          </li>
          <li>
          2 cups water
          </li>
          <li>
          Optional: 1-2 teaspoons honey or sugar, to taste
          </li>
          <li>
          Optional: Lemon slices or fresh mint leaves, for garnish
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Boil Water: Heat 2 cups of water in a kettle or pot until it reaches a rolling boil.
          </li>
          <li>
          Prepare the Tea: Place the jasmine tea leaves in a teapot or heatproof container. If using a tea bag, simply place it in the teapot.
          </li>
          <li>
          Steep the Tea: Pour the boiling water over the tea leaves or tea bag. Let it steep for about 3-5 minutes, depending on your desired strength.
          </li>
          <li>
          Optional Additions: If you prefer, add honey or sugar to taste. You can also garnish with lemon slices or fresh mint leaves for extra flavor.
          </li>
          <li>
          Serve: Remove the tea leaves or tea bag. Pour the tea into cups and serve hot.
          </li>
          <li>
          Enjoy: Relax and enjoy the delicate, floral aroma of your Jasmine Tea.
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
              <td>2kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>0g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>0g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>0g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jasmintea;

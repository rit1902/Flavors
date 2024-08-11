import React, { useState } from 'react';
import './pannertikka.css';
import pannertikka1 from '../assests/paneertikka.jpg';

const Pannertikka = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Paneertikka Recipe',
          text: 'Check out this simple and delicious Paneertikka recipe!',
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
      <img src={pannertikka1} alt="Pannertikka" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Paneertikka</h1>
        <p>
        A vibrant and flavorful dish, Paneer Tikka is a delightful treat for any occasion. This Indian classic features cubes of soft paneer marinated in a spicy yogurt blend, grilled to perfection for a smoky, charred finish. The combination of aromatic spices and creamy paneer creates an irresistible culinary experience.
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
          250 grams paneer, cut into cubes
          </li>
          <li>
          1 cup plain yogurt
          </li>
          <li>
          1 tablespoon ginger-garlic paste
          </li>
          <li>
          1 teaspoon red chili powder
          </li>
          <li>
          1 teaspoon turmeric powder
          </li>
          <li>
          1 teaspoon garam masala
          </li>
          <li>
          1 teaspoon cumin powder
          </li>
          <li>
          1 tablespoon lemon juice
          </li>
          <li>
          1 tablespoon vegetable oil
          </li>
          <li>
          Salt, to taste
          </li>
          <li>
          1 bell pepper, cut into cubes
          </li>
          <li>
          1 onion, cut into cubes
          </li>
          <li>
          Wooden or metal skewers
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the marinade: In a large bowl, mix together the yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, cumin powder, lemon juice, vegetable oil, and salt until smooth and well combined.
          </li>
          <li>
          Marinate the paneer and vegetables: Add the paneer cubes, bell pepper, and onion to the marinade, making sure each piece is well coated. Cover the bowl and refrigerate for at least 30 minutes to allow the flavors to meld.
          </li>
          <li>
          Preheat the grill: Preheat your grill or grill pan over medium-high heat. If using an oven, preheat to 400°F (200°C).
          </li>
          <li>
          Prepare the skewers: Thread the marinated paneer, bell pepper, and onion alternately onto the skewers, leaving a little space between each piece for even cooking.
          </li>
          <li>
          Grill the skewers: Place the skewers on the preheated grill or in the oven, and cook for 15-20 minutes, turning occasionally, until the paneer is lightly charred and the vegetables are tender.
          </li>
          <li>
          Serve: Remove the skewers from the grill or oven and allow them to cool slightly. Serve the Paneer Tikka hot, garnished with lemon wedges and fresh coriander leaves.
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
              <td>12g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>14g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>18g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pannertikka;

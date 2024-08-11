import React, { useState } from 'react';
import './soba.css';
import soba1 from '../assests/soba.jpg';

const Soba = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Soba Recipe',
          text: 'Check out this simple and delicious Soba recipe!',
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
      <img src={soba1} alt="soba" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Soba</h1>
        <p>
        A simple yet satisfying dish, Soba is a delightful Japanese noodle experience. These buckwheat noodles are served cold with a light, savory dipping sauce or in a hot broth, offering a perfect balance of texture and flavor. The subtle earthiness of the buckwheat combined with the umami-rich sauce creates a refreshing and authentic taste of Japanese cuisine.
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
          200 grams soba noodles
          </li>
          <li>
          4 cups water
          </li>
          <li>
          2 tablespoons soy sauce
          </li>
          <li>
          1 tablespoon mirin
          </li>
          <li>
          1 tablespoon sesame oil
          </li>
          <li>
          1 teaspoon rice vinegar
          </li>
          <li>
          1 teaspoon sugar
          </li>
          <li>
          1/2 teaspoon grated ginger
          </li>
          <li>
          1 clove garlic, minced
          </li>
          <li>
          1 green onion, finely chopped
          </li>
          <li>
          1 tablespoon sesame seeds, toasted
          </li>
          <li>
          1/4 cup fresh cilantro, chopped (optional)
          </li>
          <li>
          1/4 cup thinly sliced radishes (optional)
          </li>
          <li>
          1/4 cup shredded carrots (optional)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Cook the noodles: Bring 4 cups of water to a boil in a large pot. Add the soba noodles and cook according to package instructions, usually about 4-5 minutes. Drain and rinse under cold water to stop the cooking process and cool the noodles.
          </li>
          <li>
          Prepare the sauce: In a small bowl, whisk together the soy sauce, mirin, sesame oil, rice vinegar, sugar, grated ginger, and minced garlic until the sugar is dissolved.
          </li>
          <li>
          Combine and serve: Toss the cooked soba noodles with the sauce until well coated. Garnish with chopped green onion, toasted sesame seeds, cilantro, radishes, and shredded carrots if desired.
          </li>
          <li>
          Chill or serve warm: Serve the soba noodles chilled or at room temperature. For a warm dish, you can also lightly heat the noodles with the sauce in a pan.
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
              <td>7g</td>
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

export default Soba;

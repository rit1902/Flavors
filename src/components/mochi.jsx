import React, { useState } from 'react';
import './mochi.css';
import mochi1 from '../assests/mochi.jpg';

const Mochi = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Mochi',
          text: 'Check out this simple and delicious Mochi recipe!',
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
      <img src={mochi1} alt="mochi" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Mochi</h1>
        <p>
        Mochi is a traditional Japanese confection known for its chewy texture and subtle sweetness. Made from glutinous rice that has been steamed and pounded into a smooth dough, mochi can be enjoyed plain or filled with a variety of sweet or savory ingredients. Popular fillings include sweet red bean paste, fresh fruit, or ice cream. Mochi's soft and sticky consistency, combined with its delicate flavor, makes it a beloved treat in Japanese cuisine. Often enjoyed during special occasions and festivals, mochi offers a delightful and unique taste experience.
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
          <li>
          2 cups glutinous rice flour (mochiko)
          </li>
          <li>
          1 cup sugar
          </li>
          <li>
          1 1/2 cups water
          </li>
          <li>
          Cornstarch or potato starch, for dusting
          </li>
          <li>
          Optional Fillings: sweet red bean paste, fresh fruit, or ice cream
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the Mixture: In a large microwave-safe bowl, combine the glutinous rice flour, sugar, and water. Mix until smooth and well combined.
          </li>
          <li>
          Cook the Mochi: Cover the bowl with plastic wrap and microwave on high for 3-4 minutes. Stir the mixture halfway through cooking. The mochi should be thick and sticky.
          </li>
          <li>
          Dust with Starch: Generously dust a clean surface with cornstarch or potato starch. Transfer the cooked mochi onto the surface and dust your hands with starch to prevent sticking.
          </li>
          <li>
          Shape the Mochi: Divide the mochi into small portions and flatten each piece into a circle. If using fillings, place a small amount in the center of each circle, then fold the edges over to enclose the filling and shape it into a ball.
          </li>
          <li>
          Chill and Serve: Allow the mochi to cool completely before serving. If using ice cream as a filling, freeze the mochi balls until firm.
          </li>
          <li>
          Enjoy: Serve mochi at room temperature or chilled, depending on your preference.
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
              <td>120kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>27g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>1g</td>
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

export default Mochi;

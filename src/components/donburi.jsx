import React, { useState } from 'react';
import './donburi.css';
import donburi1 from '../assests/donburi.jpg';

const Donburi = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Donburi Recipe',
          text: 'Check out this simple and delicious Donburi recipe!',
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
      <img src={donburi1} alt="donburi" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Donburi</h1>
        <p>
        A comforting and hearty dish, Donburi is a quintessential Japanese meal that features a bowl of rice topped with a savory combination of meat, vegetables, and sauce. The dish offers a satisfying mix of flavors and textures, with tender ingredients simmered in a rich, umami sauce. This all-in-one bowl delivers a fulfilling taste of Japanese home cooking.
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
          2 cups cooked rice (white or brown)
          </li>
          <li>
          200 grams meat (chicken, beef, or pork), thinly sliced
          </li>
          <li>
          1 cup mixed vegetables (such as bell peppers, onions, and carrots), sliced
          </li>
          <li>
          2 tablespoons soy sauce
          </li>
          <li>
          1 tablespoon mirin
          </li>
          <li>
          1 tablespoon sake (optional)
          </li>
          <li>
          1 tablespoon sugar
          </li>
          <li>
          1 teaspoon sesame oil
          </li>
          <li>
          1/2 teaspoon grated ginger
          </li>
          <li>
          1 clove garlic, minced
          </li>
          <li>
          1 green onion, chopped
          </li>
          <li>
          1 tablespoon sesame seeds, toasted
          </li>
          <li>
          1/4 cup fresh cilantro or green onions, chopped (optional)
          </li>
          <li>
          1/4 cup pickled ginger (optional, for garnish)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the ingredients: Heat sesame oil in a skillet over medium heat. Add the garlic and ginger, cooking until fragrant.
          </li>
          <li>
          Cook the meat: Add the sliced meat to the skillet and cook until browned and cooked through.
          </li>
          <li>
          Add vegetables: Add the sliced vegetables to the skillet and stir-fry until they are tender but still crisp.
          </li>
          <li>
          Prepare the sauce: In a small bowl, mix together soy sauce, mirin, sake (if using), and sugar until the sugar is dissolved.
          </li>
          <li>
          Combine and simmer: Pour the sauce over the meat and vegetables. Stir well and let it simmer for a few minutes to allow the flavors to meld.
          </li>
          <li>
          Assemble the Donburi: Spoon cooked rice into bowls. Top with the meat and vegetable mixture, ensuring each bowl is well covered.
          </li>
          <li>
          Garnish and serve: Sprinkle with chopped green onions, toasted sesame seeds, and fresh cilantro or pickled ginger if desired. Serve hot.
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
              <td>350kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>45g</td>
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

export default Donburi;

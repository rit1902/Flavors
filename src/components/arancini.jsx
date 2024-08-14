import React, { useState } from 'react';
import './arancini.css';
import arancini1 from '../assests/arancini.jpg';

const Arancini = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Arancini Recipe',
          text: 'Check out this simple and delicious Arancini recipe!',
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
      <img src={arancini1} alt="arancini" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Arancini</h1>
        <p>
        A delightful and savory Italian treat, Arancini are crispy rice balls stuffed with rich and flavorful fillings. These golden, breadcrumb-coated delights are made from creamy risotto that’s been cooled, shaped into balls, and then fried to a perfect crunch. Often filled with ingredients like cheese, meat, or vegetables, Arancini offer a satisfying contrast of textures and tastes, making them a popular choice for appetizers or snacks. The combination of a crispy exterior and a gooey, flavorful interior creates a deliciously indulgent experience.
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
          2 cups cooked risotto, cooled
          </li>
          <li>
          1/2 cup mozzarella cheese, cubed
          </li>
          <li>
          1/2 cup Parmesan cheese, grated
          </li>
          <li>
          1/2 cup all-purpose flour
          </li>
          <li>
          2 large eggs, beaten
          </li>
          <li>
          1 cup breadcrumbs
          </li>
          <li>
          Vegetable oil, for frying
          </li>
          <li>
          Salt and pepper, to taste
          </li>
          <li>
          Marinara sauce, for dipping (optional)
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the Risotto: If you don't have leftover risotto, cook and cool it according to your recipe. The risotto should be firm and cool enough to handle.
          </li>
          <li>
          Form the Arancini: Take a small amount of the cooled risotto and flatten it in your hand. Place a cube of mozzarella cheese in the center, then mold the risotto around the cheese to form a ball. Repeat until all risotto is used.
          </li>
          <li>
          Bread the Arancini: Set up a breading station with three shallow dishes. Place flour in one dish, beaten eggs in another, and breadcrumbs in the third. Roll each risotto ball in flour, then dip in the beaten eggs, and finally coat with breadcrumbs. Make sure each ball is evenly coated.
          </li>
          <li>
          Heat the Oil: In a large skillet or deep fryer, heat vegetable oil to 350°F (175°C). You need enough oil to submerge the arancini.
          </li>
          <li>
          Fry the Arancini: Fry the arancini in batches, without overcrowding the pan, until they are golden brown and crispy, about 3-4 minutes. Use a slotted spoon to transfer them to a paper towel-lined plate to drain.
          </li>
          <li>
          Serve: Serve the arancini hot with marinara sauce for dipping, if desired. Enjoy the crispy exterior and gooey, cheesy interior!
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

export default Arancini;

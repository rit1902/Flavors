import React, { useState } from 'react';
import './tiramisu.css';
import tiramisu1 from '../assests/tiramisu.jpg';

const Tiramisu = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Tiramisu',
          text: 'Check out this simple and delicious Tiramisu recipe!',
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
      <img src={tiramisu1} alt="tiramisu" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Tiramisu</h1>
        <p>
        A classic and indulgent Italian dessert, Tiramisu is a luxurious treat that layers creamy mascarpone cheese with coffee-soaked ladyfingers. This beloved dessert features a delightful combination of rich, smooth textures and bold coffee flavors, often enhanced with a hint of cocoa powder. Tiramisu offers a perfect balance of sweetness and bitterness, making it a sophisticated and comforting end to any meal. Its elegant presentation and delectable taste capture the essence of Italian culinary artistry.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 4 hour</li>
          <li>Preparation: 30 minutes</li>
          <li>Chilling: 3.5 hours</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          6 large egg yolks
          </li>
          <li>
          3/4 cup granulated sugar
          </li>
          <li>
          1 cup mascarpone cheese
          </li>
          <li>
          1 cup heavy cream
          </li>
          <li>
          1 cup brewed espresso or strong coffee, cooled
          </li>
          <li>
          1/2 cup coffee liqueur (optional)
          </li>
          <li>
          24-30 ladyfingers
          </li>
          <li>
          Unsweetened cocoa powder, for dusting
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the Mascarpone Mixture: In a large bowl, whisk together the egg yolks and sugar until pale and creamy. Add the mascarpone cheese and mix until smooth
          </li>
          <li>
          Whip the Cream: In a separate bowl, whip the heavy cream until stiff peaks form. Gently fold the whipped cream into the mascarpone mixture until well combined.
          </li>
          <li>
          Prepare Coffee Mixture: In a shallow dish, combine the cooled espresso or coffee with the coffee liqueur if using.
          </li>
          <li>
          Assemble the Tiramisu: Briefly dip each ladyfinger into the coffee mixture, making sure not to soak them. Arrange a layer of soaked ladyfingers in the bottom of a serving dish.
          </li>
          <li>
          Layer and Chill: Spread half of the mascarpone mixture over the ladyfingers. Add another layer of soaked ladyfingers, and top with the remaining mascarpone mixture.
          </li>
          <li>
          Chill: Cover and refrigerate for at least 4 hours or overnight to allow the flavors to meld and the dessert to set.
          </li>
          <li>
          Serve: Before serving, dust the top with unsweetened cocoa powder.
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
              <td>450kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>45g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>7g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>25g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tiramisu;

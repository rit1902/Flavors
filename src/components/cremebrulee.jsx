import React, { useState } from 'react';
import './cremebrulee.css'; // Assuming the CSS is saved in a file named cremebrulee.css
import cremebrulee1 from '../assests/cremebrulee.jpg'

const Cremebrulee = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Creme Brulee Recipe',
          text: 'Check out this simple and delicious CremeBrulee recipe!',
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
      <img src={cremebrulee1} alt="Creme Brulee" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Creme Brulee</h1>
        <p>
        A decadent and elegant dessert, perfect for any occasion. This classic crème brûlée features a rich, creamy custard base topped with a layer of caramelized sugar, offering a delightful contrast in textures and flavors
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 10 minutes</li>
          <li>Preparation: 5 minutes</li>
          <li>Cooking: 5 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          2 cups heavy cream
          </li>
          <li>
          1 vanilla bean (or 1 teaspoon vanilla extract)
          </li>
          <li>
          5 large egg yolks
          </li>
          <li>
          1/2 cup granulated sugar (plus extra for caramelizing)
          </li>
          <li>
            Optional fillings: Pinch of salt
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Preheat oven and prepare ramekins: Preheat your oven to 325°F (163°C). Place 4-6 ramekins in a baking dish.
          </li>
          <li>
          Heat the cream: In a medium saucepan, heat the heavy cream and the vanilla bean (split and seeds scraped) over medium heat until it just begins to simmer. Remove from heat and let it cool slightly. If using vanilla extract, add it after removing from heat.
          </li>
          <li>
          Prepare the custard: In a separate bowl, whisk together the egg yolks, 1/2 cup granulated sugar, and a pinch of salt until well combined and slightly pale.
          </li>
          <li>
          Combine the mixtures: Gradually pour the warm cream into the egg yolk mixture, whisking constantly to prevent the eggs from cooking. Continue until all the cream is incorporated.
          </li>
          <li>
          Strain and pour: Strain the mixture through a fine mesh sieve to remove any cooked egg bits and the vanilla bean. Pour the strained custard into the ramekins, filling them about three-quarters full.
          </li>
          <li>Bake: Pour hot water into the baking dish until it reaches halfway up the sides of the ramekins. Carefully place the baking dish in the preheated oven. Bake for 40-45 minutes, or until the custards are set but still slightly jiggly in the center.</li>
          <li>
          Cool and refrigerate: Remove the ramekins from the water bath and let them cool to room temperature. Cover each ramekin with plastic wrap and refrigerate for at least 2 hours, or overnight.
          </li>
          <li>
          Caramelize the sugar: When ready to serve, sprinkle a thin, even layer of granulated sugar over the top of each custard. Use a kitchen torch to caramelize the sugar until it forms a golden brown crust. Alternatively, you can place the ramekins under a broiler for a few minutes, watching carefully to prevent burning.
          </li>
          <li>
          Serve: Allow the caramelized sugar to harden for a minute or two, then serve immediately. Enjoy the delightful contrast of creamy custard and crunchy caramelized sugar.
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
              <td>31g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>6g</td>
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

export default Cremebrulee;

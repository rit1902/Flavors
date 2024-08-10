import React, { useState } from 'react';
import './quichlorraine.css'; // Assuming the CSS is saved in a file named cremebrulee.css
import quichlorraine1 from '../assests/Quichlorraine1.jpg'

const Cremebrulee = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'QuichLorraine Recipe',
          text: 'Check out this simple and delicious QuichLorraine recipe!',
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
      <img src={quichlorraine1} alt="QuichLorraine" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Quich Lorraine</h1>
        <p>
        A classic and sophisticated dish, Quiche Lorraine is perfect for any occasion. This savory pie features a rich, creamy custard base with bacon and cheese, baked to perfection in a flaky crust. The combination of flavors and textures makes it an irresistible treat.</p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 1 hour 10 minutes</li>
          <li>Preparation: 20 minutes</li>
          <li>Cooking: 50 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          1 pie crust (store-bought or homemade)
          </li>
          <li>
          6 slices of bacon, cooked and crumbled
          </li>
          <li>
          1 cup shredded Gruyère cheese
          </li>
          <li>
          3 large eggs
          </li>
          <li>
          1 cup heavy cream
          </li>
          <li>
          1/4 cup milk
          </li>
          <li>
          1/4 teaspoon salt
          </li>
          <li>
          1/4 teaspoon black pepper
          </li>
          <li>
          1/8 teaspoon ground nutmeg
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Preheat oven: Preheat your oven to 375°F (190°C).
          </li>
          <li>
          Prepare the crust: Roll out the pie crust and fit it into a 9-inch pie pan. Trim any excess dough and crimp the edges. Prick the bottom of the crust with a fork to prevent it from puffing up during baking.
          </li>
          <li>
          Blind bake the crust: Line the crust with parchment paper or aluminum foil and fill it with pie weights or dried beans. Bake for 10-15 minutes, or until the edges are lightly golden. Remove the weights and lining, and bake for another 5 minutes to set the bottom. Remove from oven and let cool slightly.
          </li>
          <li>
          Cook the bacon: In a skillet over medium heat, cook the bacon until crispy. Remove from the skillet and drain on paper towels. Once cooled, crumble the bacon.
          </li>
          <li>
          Prepare the filling: In a bowl, whisk together the eggs, heavy cream, milk, salt, pepper, and nutmeg until well combined.
          </li>
          <li>
          Assemble the quiche: Sprinkle the crumbled bacon and shredded Gruyère cheese evenly over the bottom of the prepared crust. Pour the egg mixture over the top.
          </li>
          <li>
          Bake: Place the quiche on a baking sheet and bake in the preheated oven for 35-40 minutes, or until the filling is set and the top is golden brown. The center should be slightly jiggly but not liquid.
          </li>
          <li>
          Cool and serve: Allow the quiche to cool for about 10 minutes before slicing. Serve warm or at room temperature.
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
              <td>24g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>15g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>36g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cremebrulee;

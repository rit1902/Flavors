import React, { useState } from 'react';
import './biriyani.css';
import hyderabadibiriyani1 from '../assests/hyderabadibiriyany.jpg';

const Biriyani = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleShare = () => {
    // Logic to share the recipe
    if (navigator.share) {
      navigator
        .share({
          title: 'Hyderabadi Biriyani Recipe',
          text: 'Check out this simple and delicious Hyderabadi Biriyani recipe!',
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
      <img src={hyderabadibiriyani1} alt="hyderabadibiriyani" />
        <div className="recipe-share">
          <button onClick={handleShare}>Share Recipe</button>
        </div>
      </div>
      <div className="recipe-text1">
        <h1>Hyderabadi Biriyani</h1>
        <p>
        A rich and aromatic dish, Hyderabadi Biryani is a regal feast for the senses. This culinary masterpiece features tender pieces of marinated meat or vegetables layered with fragrant basmati rice, slow-cooked to perfection with a blend of exotic spices. The symphony of flavors and textures creates an irresistible experience that captures the essence of Indian cuisine.
        </p>
      </div>
      <div className="recipe-text2">
        <h2>Preparation Time</h2>
        <ul>
          <li>Total: Approximately 2 hour</li>
          <li>Preparation: 30 minutes</li>
          <li>Cooking: 1 hour 30 minutes</li>
        </ul>
      </div>
      <div className="recipe-text3">
        <h2>Ingredients</h2>
        <ul>
          <li>
          500 grams basmati rice, soaked for 30 minutes
          </li>
          <li>
          500 grams chicken or mutton, cut into pieces (or mixed vegetables for a vegetarian version)
          </li>
          <li>
          1 cup plain yogurt
          </li>
          <li>
          2 large onions, thinly sliced
          </li>
          <li>
          2 tablespoons ginger-garlic paste
          </li>
          <li>
          1 teaspoon red chili powder
          </li>
          <li>
          1/2 teaspoon turmeric powder
          </li>
          <li>
          1 teaspoon garam masala
          </li>
          <li>
          1 teaspoon coriander powder
          </li>
          <li>
          1/2 teaspoon saffron strands, soaked in warm milk
          </li>
          <li>
          1 bell pepper, cut into cubes
          </li>
          <li>
          1/4 cup fresh mint leaves, chopped
          </li>
          <li>
          1/4 cup fresh coriander leaves, chopped
          </li>
          <li>
          4 green chilies, slit
          </li>
          <li>
          1/4 cup vegetable oil or ghee
          </li>
          <li>
          3 cups water
          </li>
          <li>
          Salt, to taste
          </li>
          <li>
          Whole spices: 4 cloves, 2-inch cinnamon stick, 4 green cardamom pods, 1 bay leaf
          </li>
        </ul>
      </div>
      <div className="recipe-text4">
        <h2>Instructions</h2>
        <ol>
          <li>
          Prepare the marinade: In a large bowl, combine the yogurt, ginger-garlic paste, red chili powder, turmeric powder, garam masala, coriander powder, and salt. Mix well until smooth and well combined.
          </li>
          <li>
          Marinate the meat or vegetables: Add the chicken, mutton, or vegetables to the marinade, ensuring each piece is well coated. Cover the bowl and refrigerate for at least 1 hour to allow the flavors to develop.
          </li>
          <li>
          Cook the onions: In a large pan, heat the oil or ghee over medium heat. Add the sliced onions and cook until they are golden brown and crispy. Remove half of the onions and set aside for garnishing.
          </li>
          <li>
          Cook the meat or vegetables: In the same pan, add the marinated meat or vegetables and cook over medium heat until they are cooked through and the oil separates from the masala. Add the slit green chilies, mint, and coriander leaves, and mix well.
          </li>
          <li>
          Cook the rice: In a large pot, bring 3 cups of water to a boil. Add the soaked basmati rice, whole spices (cloves, cinnamon, cardamom, and bay leaf), and salt. Cook until the rice is 70% cooked, then drain and set aside.
          </li>
          <li>
          Layer the biryani: In a large, heavy-bottomed pot, layer half of the partially cooked rice. Add the cooked meat or vegetables on top, followed by the remaining rice. Drizzle the saffron-infused milk over the top and sprinkle the reserved crispy onions.
          </li>
          <li>
          Dum cooking: Cover the pot with a tight-fitting lid or seal it with dough to prevent steam from escaping. Cook the biryani on low heat for 20-25 minutes, allowing the flavors to meld and the rice to finish cooking.
          </li>
          <li>
          Serve: Gently fluff the biryani with a fork and serve hot, garnished with additional fresh mint and coriander leaves.
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
              <td>400kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>50g</td>
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

export default Biriyani;

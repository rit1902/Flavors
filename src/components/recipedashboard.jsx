import React, { useState } from "react";
import "./recipedashboard.css";
import { Link } from 'react-router-dom';

function RecipeDashboard() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Quiche Lorraine', ingredients: '1 pie crust (store-bought or homemade), 6 slices of bacon, cooked and crumbled,1 cup shredded Gruyère cheese,3 large eggs,1 cup heavy cream,1/4 cup milk,1/4 teaspoon salt,1/4 teaspoon black pepper,1/8 teaspoon ground nutmeg.', instructions: 'Preheat oven: Preheat your oven to 375°F (190°C),' },
    { id: 2, name: 'Ratatouille', ingredients: '    1 medium eggplant, diced, 2 zucchini, sliced,1 red bell pepper, diced,1 yellow bell pepper, diced,1 onion, chopped, 3 cloves garlic, minced, 4 tomatoes, chopped, 2 tablespoons olive oil, 1 teaspoon dried thyme, 1 teaspoon dried oregano, Salt and pepper to taste, Fresh basil leaves for garnish (optional)', instructions: 'Cook chicken and add curry powder and milk.' },
    { id: 3, name: 'Creme Brulee', ingredients: '    2 cups heavy cream, 1 vanilla bean (or 1 teaspoon vanilla extract), 5 large egg yolks,1/2 cup granulated sugar (plus extra for caramelizing),Optional fillings: Pinch of salt', instructions: 'Cook beef and mix with mushrooms and sour cream.' },
    { id: 4, name: 'Paneer Tikka', ingredients: '250 grams paneer, cut into cubes,1 cup plain yogurt,1 tablespoon ginger-garlic paste,1 teaspoon red chili powder,1 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon cumin powder,1 tablespoon lemon juice,1 tablespoon vegetable oil,Salt, to taste', instructions: 'Stir-fry vegetables with garlic and soy sauce.' },
    { id: 5, name: 'Hyderabadi Biriyani', ingredients: '500 grams basmati rice, soaked for 30 minutes,500 grams chicken or mutton, cut into pieces (or mixed vegetables for a vegetarian version),1 cup plain yogurt,2 large onions, thinly sliced,2 tablespoons ginger-garlic paste,1 teaspoon red chili powder,1/2 teaspoon turmeric powder,1 teaspoon garam masala,1 teaspoon coriander powder,1/2 teaspoon saffron strands, soaked in warm milk,1 bell pepper, cut into cubes,1/4 cup fresh mint leaves, chopped,1/4 cup fresh coriander leaves, chopped,4 green chilies, slit', instructions: 'Mix ingredients and bake in a pie crust.' },
    { id: 6, name: 'Thandai', ingredients: '1/2 cup almonds, soaked overnight,1/4 cup cashews, soaked overnight,1/4 cup melon seeds (char magaz), soaked overnight,1/4 cup pistachios, soaked overnight,1 cup milk,1/2 cup sugar (adjust to taste),1 tablespoon fennel seeds,1 tablespoon poppy seeds,1 teaspoon cardamom seeds (from about 6 pods),1/4 teaspoon black pepper,1 tablespoon rose water,1 tablespoon kewra water (optional),1/4 cup fresh coriander leaves, chopped,1/4 cup dried rose petals (for garnish, optional),1/4 cup vegetable oil or ghee,Ice cubes (for serving)', instructions: 'Cook beef and assemble with toppings.' },
    { id: 7, name: 'Soba', ingredients: '200 grams soba noodles,4 cups water,2 tablespoons soy sauce,1 tablespoon mirin,1 tablespoon sesame oil,1 teaspoon rice vinegar,1 teaspoon sugar,1/2 teaspoon grated ginger,1 clove garlic, minced,1 green onion, finely chopped,1 tablespoon sesame seeds, toasted,1/4 cup fresh cilantro, chopped (optional),1/4 cup thinly sliced radishes (optional),1/4 cup shredded carrots (optional)', instructions: 'Toss lettuce with dressing and croutons.' },
    { id: 8, name: 'Donburi', ingredients: '2 cups cooked rice (white or brown),200 grams meat (chicken, beef, or pork), thinly sliced,1 cup mixed vegetables (such as bell peppers, onions, and carrots), sliced,2 tablespoons soy sauce,1 tablespoon mirin,1 tablespoon sake (optional),1 tablespoon sugar,1 teaspoon sesame oil,1/2 teaspoon grated ginger,1 clove garlic, minced,1 green onion, chopped,1 tablespoon sesame seeds, toasted,1/4 cup fresh cilantro or green onions, chopped (optional),1/4 cup pickled ginger (optional, for garnish)', instructions: 'Mix ingredients and bake.' },
    { id: 9, name: 'Dorayaki', ingredients: '1 cup all-purpose flour,1/2 cup sugar,1/2 teaspoon baking powder,1/2 teaspoon baking soda,1/2 cup milk,2 large eggs,1 tablespoon honey,,1 teaspoon sesame oil,1 tablespoon vegetable oil,1 cup sweet red bean paste (anko)', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 10, name: 'Har Gow', ingredients: '200 grams shrimp, peeled and deveined,1/4 cup bamboo shoots, finely chopped,1/4 cup water chestnuts, finely chopped,1 tablespoon cornstarch,1 tablespoon soy sauce,1 tablespoon oyster sauce,1 teaspoon sesame oil,1 teaspoon sugar,1/2 teaspoon salt,1/4 teaspoon white pepper,Har Gow wrappers (store-bought or homemade)', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 11, name: 'Kung Pao Chicken', ingredients: '500 grams chicken breast or thighs, diced.1/4 cup roasted peanuts,1/4 cup dried red chilies,1/2 cup bell peppers, diced,1/2 cup onion, diced,2 cloves garlic, minced,1 tablespoon ginger, minced,3 tablespoons soy sauce,2 tablespoons rice vinegar,1 tablespoon hoisin sauce,1 tablespoon oyster sauce,1 tablespoon sugar,1 teaspoon sesame oil,1 teaspoon cornstarch mixed with 2 tablespoons water (for thickening),2 tablespoons vegetable oil,1/4 teaspoon red pepper flakes (optional, for extra heat),Salt and pepper to taste', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Jasmine tea', ingredients: '1 tablespoon loose jasmine tea leaves (or 1 jasmine tea bag),2 cups water,Optional: 1-2 teaspoons honey or sugar, to taste,Optional: Lemon slices or fresh mint leaves, for garnish', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Arancini', ingredients: '2 cups cooked risotto, cooled,1/2 cup mozzarella cheese, cubed,1/2 cup Parmesan cheese, grated,1/2 cup all-purpose flour,2 large eggs, beaten,1 cup breadcrumbs,Vegetable oil, for frying,Salt and pepper, to taste,Marinara sauce, for dipping (optional)', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Branzinno al Forno', ingredients: '2 whole branzino (sea bass), cleaned and scaled,2 tablespoons olive oil,1 lemon, thinly sliced,3 cloves garlic, minced,1 tablespoon fresh rosemary, chopped,1 tablespoon fresh thyme, chopped,1 teaspoon dried oregano,Salt and freshly ground black pepper, to taste,1/4 cup white wine (optional),1/4 cup fresh parsley, chopped (for garnish)', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Tiramisu', ingredients: '6 large egg yolks,3/4 cup granulated sugar,1 cup mascarpone cheese,1 cup heavy cream,1 cup brewed espresso or strong coffee, cooled,1/2 cup coffee liqueur (optional),24-30 ladyfingers,Unsweetened cocoa powder, for dusting', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Tteokbokki', ingredients: '400 grams tteok (Korean rice cakes),2 tablespoons gochujang (Korean red chili paste),1 tablespoon gochugaru (Korean red chili flakes),2 tablespoons soy sauce,2 tablespoons sugar,1 teaspoon sesame oil,1 clove garlic, minced,3 cups water or dashi (Korean soup stock),1/2 cup fish cake, sliced (optional),1 green onion, chopped,Sesame seeds, for garnish', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Dak Galbi', ingredients: '500 grams boneless chicken thighs, cut into bite-sized pieces,2 tablespoons gochujang (Korean red chili paste),1 tablespoon gochugaru (Korean red chili flakes),2 tablespoons soy sauce,1 tablespoon sugar,1 tablespoon sesame oil,2 cloves garlic, minced,1 tablespoon ginger, minced,1/2 cup cabbage, chopped,1 sweet potato, peeled and sliced,1 onion, sliced,1/2 cup carrots, julienned,1/2 cup rice cakes (tteok), soaked in warm water,2 green onions, sliced,1 tablespoon sesame seeds, toasted (for garnish)', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Mochi', ingredients: '2 cups glutinous rice flour (mochiko),1 cup sugar, 1 1/2 cups water,Cornstarch or potato starch, for dusting,Optional Fillings: sweet red bean paste, fresh fruit, or ice cream', instructions: 'Mix lemon juice with water and sugar.' },
  ]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setEditingRecipe(null);
  };

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
    setEditingRecipe(null);
  };

  const handleAddRecipe = () => {
    setSelectedRecipe(null);
    setEditingRecipe({ name: '', ingredients: '', instructions: '' });
    toggleForm();
  };

  const handleSaveRecipe = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const recipe = {
      id: editingRecipe ? editingRecipe.id : Date.now(),
      name: formData.get('name'),
      ingredients: formData.get('ingredients'),
      instructions: formData.get('instructions'),
    };

    if (editingRecipe) {
      setRecipes(recipes.map(r => r.id === recipe.id ? recipe : r));
    } else {
      setRecipes([...recipes, recipe]);
    }

    setSelectedRecipe(recipe);
    toggleForm();
  };

  const handleDeleteRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRecipes(recipes.filter(recipe => recipe.id !== id));
      setSelectedRecipe(null);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < Math.ceil(filteredRecipes.length / recipesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <Link to='/admindashboard'><li>Dashboard</li></Link>
          <li>Manage Recipes</li>
          <Link to='/users'><li>Users</li></Link>
          {/* <li>Settings</li> */}
        </ul>
      </div>
      <div className="content">
        <header className="header-dash">
          <h1>Recipe Suggestion Admin</h1>
          <button onClick={handleAddRecipe} className="add-recipe-btn">
            Add Recipe
          </button>
        </header>
        {/* <div className="parallax"></div> */}
        <div className="main-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="recipe-list">
            <h2>Recipes</h2>
            <div className="recipe-cards">
              {paginatedRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="recipe-card"
                  onClick={() => handleRecipeSelect(recipe)}
                >
                  <h3>{recipe.name}</h3>
                  <p>{recipe.ingredients}</p>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>Previous</button>
              <span>Page {currentPage} of {Math.ceil(filteredRecipes.length / recipesPerPage)}</span>
              <button onClick={() => handlePageChange('next')} disabled={currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)}>Next</button>
            </div>
          </div>
          {selectedRecipe && (
            <div className="recipe-detail">
              <h2>{selectedRecipe.name}</h2>
              <p><strong>Ingredients:</strong> {selectedRecipe.ingredients}</p>
              <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
              <button onClick={() => {
                setEditingRecipe(selectedRecipe);
                toggleForm();
              }} className="edit-recipe-btn">
                Edit Recipe
              </button>
              <button onClick={() => handleDeleteRecipe(selectedRecipe.id)} className="delete-recipe-btn">
                Delete Recipe
              </button>
            </div>
          )}
          {isFormOpen && (
            <div className="recipe-form">
              <h2>{editingRecipe ? 'Edit Recipe' : 'Add Recipe'}</h2>
              <form onSubmit={handleSaveRecipe}>
                <label>
                  Name:
                  <input type="text" name="name" defaultValue={editingRecipe ? editingRecipe.name : ''} required />
                </label>
                <label>
                  Ingredients:
                  <textarea name="ingredients" defaultValue={editingRecipe ? editingRecipe.ingredients : ''} required />
                </label>
                <label>
                  Instructions:
                  <textarea name="instructions" defaultValue={editingRecipe ? editingRecipe.instructions : ''} required />
                </label>
                <button type="submit">Save</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeDashboard;

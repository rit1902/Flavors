import React, { useState } from "react";
import "./recipedashboard.css";
import { Link } from 'react-router-dom';

function RecipeDashboard() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: 'Spaghetti Bolognese', ingredients: 'Pasta, Meat, Tomato Sauce', instructions: 'Cook pasta and mix with sauce.' },
    { id: 2, name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: 'Cook chicken and add curry powder and milk.' },
    { id: 3, name: 'Beef Stroganoff', ingredients: 'Beef, Mushrooms, Sour Cream', instructions: 'Cook beef and mix with mushrooms and sour cream.' },
    { id: 4, name: 'Vegetable Stir-Fry', ingredients: 'Mixed Vegetables, Soy Sauce, Garlic', instructions: 'Stir-fry vegetables with garlic and soy sauce.' },
    { id: 5, name: 'Quiche Lorraine', ingredients: 'Eggs, Cream, Bacon, Cheese', instructions: 'Mix ingredients and bake in a pie crust.' },
    { id: 6, name: 'Tacos', ingredients: 'Tortillas, Ground Beef, Lettuce, Tomato', instructions: 'Cook beef and assemble with toppings.' },
    { id: 7, name: 'Caesar Salad', ingredients: 'Romaine Lettuce, Croutons, Caesar Dressing', instructions: 'Toss lettuce with dressing and croutons.' },
    { id: 8, name: 'Chocolate Cake', ingredients: 'Flour, Cocoa Powder, Eggs, Sugar', instructions: 'Mix ingredients and bake.' },
    { id: 9, name: 'Lemonade', ingredients: 'Lemon, Sugar, Water', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 10, name: 'Lemonade', ingredients: 'Lemon, Sugar, Water', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 11, name: 'Lemonade', ingredients: 'Lemon, Sugar, Water', instructions: 'Mix lemon juice with water and sugar.' },
    { id: 12, name: 'Lemonade', ingredients: 'Lemon, Sugar, Water', instructions: 'Mix lemon juice with water and sugar.' },
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
          <li>Recipes</li>
          <li>Users</li>
          <li>Settings</li>
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

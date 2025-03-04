import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Siderbar from "./components/Siderbar";
import React from 'react';

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [recipeQueue, setRecipeQueue]=useState([]);
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(p => p.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      toast('Alredy isExist')
    }
  
  }
  
  console.log(recipeQueue);
  
  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* banner */}
      <Banner></Banner>
      {/* ore recipes sections */}
      <OurRecipes></OurRecipes>
      {/* recipescart sections */}
      <section className="flex w-11/12 mx-auto flex-col md:flex-row gap-6
      ">
        {/* Cards section  */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* siderbar */}
        <Siderbar recipeQueue={recipeQueue}></Siderbar>
      </section>
    </div>
  );
};

export default App;
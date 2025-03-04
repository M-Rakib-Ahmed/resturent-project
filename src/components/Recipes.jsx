import { useEffect, useState } from "react";
import { TfiTimer } from "react-icons/tfi";
import { BsFire } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line no-unused-vars
const Recipes = ({ addRecipeToQueue }) => {
    const [recipes, setRecipes]=useState([]);
    useEffect(()=>{
        fetch('/cookdata.json')
        .then(res => res.json())
        .then(data => setRecipes(data)
        )
    },[])
    
    return (
        <div className="md:w-2/3">
           <div className="grid grid-cols-1 gap-7 mb-10 lg:grid-cols-2 ">
            {
                recipes.map(recipe => <div className="card bg-base-100  border-2 text-gray-300 ">
                    <figure>
                        <img  className="w-full p-7 "
                            src={recipe.recipe_image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-medium text-gray-700">{recipe.recipe_name}</h2>
                        <p className="text-[15px] text-gray-600">{recipe.short_description}</p>
                        <p className="border-b-2 text-gray-400 pt-10"></p>
                        <h3 className="text-xl font-semibold">Ingredients:{recipe.ingredients.length}</h3>
                        <ul className="list-disc text-gray-500 ml-5">
                            {recipe.ingredients.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-3">

                               <TfiTimer></TfiTimer>
                                <span className="text-gray-500 ">30 minutes</span>
                            </div>
                            <div className="flex items-center gap-3">

                               <BsFire></BsFire>
                                <span className="text-gray-500 ">600 calories</span>
                            </div>

                        </div>
                        <div className="card-actions ">
                            <button onClick={() => addRecipeToQueue(recipe)} className="btn btn-primary capitalize rounded-full">want to cook</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Recipes;
import { useEffect, useState } from "react";


const Recipes = () => {
    const [recipes, setRecipes]=useState([]);
    useEffect(()=>{
        fetch('/cookdata.json')
        .then(res => res.json())
        .then(data => setRecipes(data)
        )
    },[])
    console.log(recipes);
    
    return (
        <div className="md:w-2/3">
           <div className="grid grid-cols-1 gap-7 mb-10 lg:grid-cols-2">
            {
                recipes.map(recipe => <div className="card bg-base-100  shadow-xl">
                    <figure>
                        <img className="w-full"
                            src={recipe.recipe_image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl font-medium text-gray-700">{recipe.recipe_name}</h2>
                        <p className="text-[15px] text-gray-600">{recipe.short_description}</p>
                        <p className="border-b-2 text-gray-400 pt-10"></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Recipes;
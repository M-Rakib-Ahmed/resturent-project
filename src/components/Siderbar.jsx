

const Siderbar = ({ recipeQueue }) => {
    return (
        <div className="md:w-1/3">
          <h2>Want to cook:{recipeQueue.length}</h2>  
        </div>
    );
};

export default Siderbar;
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Siderbar from "./components/Siderbar";


const App = () => {
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
        <Recipes></Recipes>
        {/* siderbar */}
        <Siderbar></Siderbar>
      </section>
    </div>
  );
};

export default App;
import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";


const App = () => {
  return (
    <div>
      {/* header */}
      <Header></Header>
      {/* banner */}
      <Banner></Banner>
      {/* ore recipes sections */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;
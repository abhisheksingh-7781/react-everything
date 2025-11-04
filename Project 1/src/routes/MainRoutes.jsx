import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import Create from "../pages/Create";
import SingleRecipes from "../pages/SingleRecipes";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/recipe" element={<Recipes />} />
      <Route path="/recipe/details/:id" element={<SingleRecipes />} />
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;

import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
<<<<<<< HEAD
import { Home } from "./pages/home"
import { Cocktails } from "./pages/cocktails"
import { CocktailDetail } from "./pages/cocktailDetail" 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
=======
import { Home } from "./pages/Home"
import { Cocktails } from "./pages/Cocktails"
import { CocktailDetail} from "./pages/CocktailDetail" 

>>>>>>> 3a8b2ff761aff6b9c8d376415afea1a4f69821c1

export const App = ()  =>{
  return (
  <BrowserRouter>
 
  <Routes>
    <Route path = "/" element = { <Home/>} />
    <Route path = "/cocktails" element = { <Cocktails/>}/>
    <Route path = "/cocktails/:cocktailid" element = { <CocktailDetail/>}/>
  </Routes>
  </BrowserRouter>
)
 }
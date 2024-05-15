import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/Home";
// import { Cocktails } from "./pages/Cocktails"
import { CocktailDetail } from "./pages/CocktailDetail" 
import { CocktailList } from "./pages/CocktailList";


import 'bootstrap/dist/css/bootstrap.min.css';





export const App = ()  =>{
  return (
  <BrowserRouter>
 
  <Routes>
    <Route path = "/" element = { <Home/>} />
    <Route path = "/cocktails" element = { <CocktailList/>}/>
    <Route path = "/cocktails/:cocktailid" element = { <CocktailDetail/>}/>
  </Routes>
  </BrowserRouter>
)
 }
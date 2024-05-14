import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Home } from "./pages/Home"
import { Cocktails } from "./pages/Cocktails"
import { CocktailDetail} from "./pages/CocktailDetail" 


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
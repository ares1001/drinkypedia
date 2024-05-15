import {BrowserRouter,Routes,Route,Link} from "react-router-dom"


import { CocktailDetail } from "./pages/CocktailDetail" 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Home } from "./pages/Home"
import { Cocktails } from "./pages/Cocktails"




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
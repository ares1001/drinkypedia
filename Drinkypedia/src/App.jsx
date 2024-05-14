import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Home } from "./pages/home"
import { Cocktails } from "./pages/cocktails"
import { CocktailDetail } from "./pages/cocktailDetail" 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
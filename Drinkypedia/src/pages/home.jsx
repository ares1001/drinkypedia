import { Link } from "react-router-dom";
import { Carrousel } from "../components/Carrousel";

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'


import '../css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <div className="link"><Link to={`/cocktails`} className="btn btn-outline-light btn-lg boton">
        <i>Discover new cocktails!</i>

      </Link>
      </div>
      <Footer />
    </>
  );
};

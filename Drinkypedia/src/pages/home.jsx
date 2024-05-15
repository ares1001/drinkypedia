import { Link } from "react-router-dom";

import { Footer } from "../components/Footer"
import { Carrousel } from "../components/Carrousel";
import '../pages/home.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export const Home = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <div className="link"><Link to={`/cocktails`} className="btn btn-outline-light btn-lg boton">
                        <i>Discover new cocktails!</i>
                      </Link></div>
      <Footer />
    </>
  );
};

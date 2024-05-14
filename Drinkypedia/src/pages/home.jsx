<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
=======
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
>>>>>>> 3a8b2ff761aff6b9c8d376415afea1a4f69821c1
import { Carrousel } from "../components/carrousel";
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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

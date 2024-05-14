export const Footer = () => {
    return (
        <footer>
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <a className="navbar__link" href="./register.html">REGISTRARSE</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./login.html">INGRESAR</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">CONTACTO</a>
                    </li>
                </ul>
            </nav>
            <p className="footer__copy">All rights reserved 2024 - Drinkypedia &copy;</p>
        </footer>
    );
}
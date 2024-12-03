import logo from '../assets/logo.svg'
import { useState,useEffect  } from 'react';
import './Header.css'

export function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < lastScrollY && window.scrollY > 0) {
                setIsSticky(true); // El usuario está subiendo
                setIsVisible(true); // Mostrar el header
            } else if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Ocultar el header al bajar
            }

            if (window.scrollY === 0) {
                setIsSticky(false); // El usuario está en la parte superior
                setIsVisible(true); // Mostrar el header en la parte superior
            }

            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        <div className={`spacer ${isSticky ? 'active' : ''}`} />
        <header className={`cabecera ${isSticky ? 'sticky' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
            <nav>
                <div>
                    <img alt="logo"className='cabecera_logo' src={logo}/>
                </div> 

                <button className="menu_hamburguesa" onClick={toggleMenu}>
                    ☰
                </button>

                <div className={`cabecera_enlaces ${menuOpen ? 'open' : ''}`}>
                    <a href="#sobre-mi">Sobre mí</a>
                    <a href="#proyectos">Proyectos</a>
                    <a href="#contacto">Contacto</a>
                </div>
                

            </nav>
            
        </header></>
    )
}
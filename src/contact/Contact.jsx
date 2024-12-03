import './Contact.css'
import { ReactSVG } from 'react-svg'
import correo from '../assets/correo.png'
import mail from '../assets/icon-mail.svg'
import github from '../assets/icon-github.svg'

export function Contact(){

    const email = 'ronaldolezamagarcia@gmail.com'; 
    const subject = 'Oportunidad de trabajo';
    const body = 'Hola Ronaldo Lezama, me gustaría contactarte para...';

    return (
        <div className='contact_pie'>
        <section className='contact'>
            <div className='contenedor_info'>
                <p className='contact_titulo'>Contáctame</p>
                <p className='contact_texto'>
                    Actualmente, estoy <span className='resaltar'>buscando oportunidades</span> de trabajo.
                    <br></br>
                    Si crees que puedo encajar en tu equipo, no dudes en escribirme.
                    <br></br>
                    Estoy <span className='resaltar'>disponible</span> para conversar.
                </p>
                <div className="contact_container" onClick={() => window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}>
                    <ReactSVG src={mail} className="contact_icon" />
                    <img src={correo} className="contact_correo" />
                </div>
            </div>
            
        </section>

        <footer className='pie'>
            <p>
                <ReactSVG src={github} />
                Página onstruida por Ronaldo Lezama
                <br></br>
                ©2024 Portafolio
                
            </p>
        </footer>
        </div>
        
    )
}
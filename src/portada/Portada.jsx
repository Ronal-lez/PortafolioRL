import './Portada.css'
import linkedin from '../assets/icon-linkedin.svg'
import github from '../assets/icon-github.svg'
import instagram from '../assets/icon-instagram.svg'
import descargar from '../assets/icon-download.svg'
import { ReactSVG } from 'react-svg'
import pdfFile from '../assets/pdfcv.pdf';

export function Portada(){
    const handleOpenPdf = () => {
        window.open(pdfFile, '_blank');
    };
    return(
        <main className='portada'>
            <section className='portada_info'>
                <div className='portada_text'>Hola, mi nombre es</div>
                <div className='portada_text1'>Ronaldo Lezama G.</div>
                <div className='portada_text2'>Desarrollador web y movil</div>

                <p className='portada_text3'>Soy un desarrollador web en formación, con conocimientos 
                    básicos de front-end y back-end. Mi enfoque es crear 
                    aplicaciones web eficientes y con buenas prácticas de 
                    desarrollo.
                </p>

                <button className='portada_btn'onClick={handleOpenPdf}>
                    <ReactSVG className='portada_icon_descarga' src={descargar}/>
                    <div className='portada_cv'>CV</div>
                </button>
            </section>
            

            <section className='portada_icons'>
                <a href='https://www.linkedin.com/in/ronaldo-lezama-b76500272/' target='_blank' rel='noopener noreferrer'>
                    <ReactSVG className='portada_linkedin' src={linkedin}/>
                </a>
                <a href='https://github.com/Ronal-lez' target='_blank' rel='noopener noreferrer'>
                    <ReactSVG className='portada_github' src={github}/>
                    </a>
                <a href='' target='_blank' rel='noopener noreferrer'>
                    <ReactSVG className='portada_instagram' src={instagram}/>
                </a>
                
                
            </section>


        </main>
    )
}
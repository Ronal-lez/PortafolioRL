import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg'
import externallink from '../../assets/icon-external-link.svg'
import github from '../../assets/icon-github.svg'
import './WorkDesign.css'

export function WorkDesign({titulo, texto,img, link}){

    return(
        <div className="workdesign">
            <div className="workdesign_contenido">
                <p className='workdesign_contenido_titulo'>{titulo}</p>
                <p className='workdesign_contenido_texto'>{texto}</p>
                <figure className='workdesign_icon'>
                    <ReactSVG className='workdesign_icon_externallink' src={externallink}/>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <ReactSVG className='workdesign_icon_github' src={github}/>
                    </a>
                    
                </figure>
                
            </div>
            <div className='workdesign_contenedorimg'>
                <img src={img} alt="" className='workdesign_contenido_img' />
            </div>

        </div>
    )
}
WorkDesign.propTypes = {
    titulo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired, 
    img: PropTypes.string, 
    link: PropTypes.string.isRequired
};
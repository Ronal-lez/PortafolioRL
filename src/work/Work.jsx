import './Work.css'
import {WorkDesign} from './component/WorkDesign.jsx'
export function Work(){
    let img1='https://i.postimg.cc/GtQ0bM1r/Inicio-App.jpg'
    return(
        <main className="work">
            <p className="work-titulo">Proyectos</p>
            <article className='work_proyecto'>
                <WorkDesign titulo='Comercial Zavaleta' 
                texto='Aplicación móvil para Android, desarrollada en equipo como proyecto académico para la tienda "Comercial Zavaleta". 
                Permite a los usuarios buscar productos, agregarlos al carrito y seleccionar entre recoger en tienda 
                o pagar contra entrega. Los administradores pueden gestionar productos a través de su cuenta. 
                Utiliza Firebase para autenticación y base de datos, y Kotlin para el desarrollo.'
                img={img1} link='https://github.com/YhonelEspinola/appmobile'/>
            </article>
        </main>
    )
}
import './About.css'
import img_rl from '../assets/img_rl.png'
import java from '../assets/icon-java.svg'
import javascript from '../assets/icon-javascript.svg'
import springboot from '../assets/icon-spring-boot.svg'
import css from '../assets/icon-css.svg'
import html from '../assets/icon-html.svg'
import sqlserver from '../assets/icon-sql-server.svg'
import mysql from '../assets/icon-my-sql.svg'
import react from '../assets/icon-react.svg'
import angular from '../assets/icon-angular.svg'
import git from '../assets/icon-git.svg'
import postman from '../assets/icon-postman.svg'
import kotlin from '../assets/icon-kotlin.svg'

const skills = [
    { src: java, name: 'Java' },
    { src: javascript, name: 'JavaScript' },
    { src: springboot, name: 'SpringBoot' },
    { src: css, name: 'CSS' },
    { src: html, name: 'HTML' },
    { src: sqlserver, name: 'SQL Server' },
    { src: mysql, name: 'MySQL' },
    { src: react, name: 'React' },
    { src: angular, name: 'Angular' },
    { src: git, name: 'Git' },
    { src: postman, name: 'Postman' },
    { src: kotlin, name: 'Kotlin' },
];

export function About(){
    return(
        <main className='about' >
            <div className='about_seccion'>
                <section className='about_titulo'>
                    <p className='about_titulo_text'>Sobre mi</p>
                </section>
                <section className='about_info'>
                    <div className='about_texto'>
                        Soy Ronaldo Lezama García, estudiante de <b className='resaltar'>Computación e Informática</b> en el instituto Cibertec, cursando el sexto ciclo, con una curiosidad por entender cómo se construyen las páginas web.
                        <br></br>
                        <br></br>
                        Soy una persona <b className='resaltar'>adaptable, responsable</b> y con capacidad para <b className='resaltar'>trabajar en equipo</b>, buscando aprender, teniendo interés en el <b className='resaltar'>desarrollo web y móvil</b> tanto en <b className='resaltar'>front-end</b> como en <b className='resaltar'>back-end.</b>
                        <br></br>
                        <br></br>
                        Además de la programación, me apasiona el deporte y el dibujo, lo que me permite mantener un equilibrio entre mis habilidades técnicas y mis intereses personales.

                    </div>
                    <div className='about_img_container'>
                        <img src={img_rl} alt="" className='about_img' />    
                    </div>
                    
                </section>
            </div>
            

            <section className='about_seccion'>
                <p className='about_titulo_skills'>Tecnologias</p>
                <div className='about_icons'>
                {skills.map(skill => (
                        <div className='icons' key={skill.name}>
                            <img src={skill.src} alt={skill.name} className={`icon-${skill.name.toLowerCase()}`} />
                            {skill.name}
                        </div>
                    ))}
                                 
                </div>
            </section>
        </main>
    )
}
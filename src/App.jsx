import {Header} from './header/Header.jsx'
import {Portada} from './portada/Portada.jsx'
import {About} from './about/About.jsx'
import{Work} from './work/Work.jsx'
import {Contact} from './contact/Contact.jsx'
import './App.css'

function App() {

  return (
    <>
    <main >
      <section className='app_hp'>
        <div>
          <Header/>    
        </div>
        <div className='app_portada'>
          <Portada/>
        </div>
      </section>

      <section className='app_about' id='sobre-mi'>
        <About/>
      </section>
      <section className='app_work' id='proyectos'>
        <Work/>
      </section>
      <section className='app_contact' id='contacto'>
        <Contact/>
      </section>
    </main>
    
    </>
      
  )
}

export default App

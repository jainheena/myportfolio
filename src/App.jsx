import './App.css'
import Info from "./components/Info"
import Intro from "./components/Intro"
import About from "./components/About"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
return(
  <>
  <Info />
  <section id="home"><Intro /></section>
  <section id="about"><About /></section>
  <section id="skills"><Skills /></section>
  <section id="edu"><Education /></section>
  <section id="contact"><Contact /></section>
  </>
)
}

export default App

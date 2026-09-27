import About from "./Components/About";
import Homeclass from "./Components/Homeclass";
import Aboutclass from "./Components/Aboutclass";
import Contact from "./Components/Contact";
import Home from "./Home";

// This is a functional component
function App() {
  return(
  <>
    <h1>Welcome to react!</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam fugiat cumque repellendus natus dolores, est porro amet eum ratione tenetur cum pariatur quod. Quos, facilis adipisci accusamus molestias autem corrupti.</p>
      <Home />
      <About />
      <Contact />
      <Homeclass />
      <Aboutclass />
      <h3>Thank You!</h3>
  </>
  )
}

export default App; 
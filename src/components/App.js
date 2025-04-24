import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}
const About = () =>{
  return(
      <div>About</div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      {/* add the <Home> component here */}
      <About />
    </div>
  );
}

export default App;

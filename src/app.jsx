import './app.css'
import ButtonGroup from "./buttonGroup.jsx";

function App() {
  return (
      <>
          <h1>Octubre</h1>
          <h2>Home of projects</h2>

          <p> This website is yet under construction :) 👷 </p>

          <p>
              This is a linking page. Click on one of the buttons to go to the specified project, website or subdomain.
          </p>

          <div className="App">
              <ButtonGroup buttons={[ ["Home", "https://home.octubre.be"], ["Cloud", "https://cloud.octubre.be"], ["Me", "https://me.octubre.be"], ["Chat", "https://chat.octubre.be"], ["Archive", "https://archive.octubre.be"], ["Dev", "https://dev.octubre.be"], ["Blog", "https://blog.octubre.be"], ["Status", "https://status.octubre.be"], ["Log", "https://home.octubre.be"]]}/>
              {/*<ButtonGroup buttons={[["Chat", "https://chat.octubre.be"], ["Archive", "https://archive.octubre.be"], ["Dev", "https://dev.octubre.be"] ]}/>*/}
              {/*<ButtonGroup buttons={[["Blog", "https://blog.octubre.be"], ["Status", "https://status.octubre.be"], ["Log", "https://home.octubre.be"]]}/>*/}
          </div>

          <h3>Contact</h3>

          <p>
              Please register any bugs of this website on <a href={"https://github.com/JeCheeseSmith/Octubre/issues"}> GitHub</a>.
          </p>
      </>
  )
}

export default App

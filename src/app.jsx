import './app.css'
import ButtonGroup from "./buttonGroup.jsx";
import Button from "./button.jsx";

function App() {
  return (
      <>
          <h1>Octubre</h1>
          <h2>Home of projects</h2>

          <p> This website is yet under construction :) 👷 </p>

          <p>
              This is a linking page. Click on one of the buttons to go to the specified project, website or subdomain.
          </p>

          <div className="buttonGroup">
              <ButtonGroup
                  buttons={[["Home", "https://home.octubre.be", "Home Automation Platform using HomeAssistant"], ["Cloud", "https://cloud.octubre.be", "Personal Office Infrastructure using Nextcloud"], ["Media", "https://media.octubre.be", "Multimedia management solution using Immich"], ["Blog", "https://blog.octubre.be", "Blog about this hobby project and it's development roadmap"], ["Me", "https://me.octubre.be", "My portfolio page"], ["Chat", "https://chat.octubre.be", "Federated chat instance using Matrix & Element"], ["Log", "https://log.octubre.be", "Update log linked to the blog - Under construction"], ["Status", "https://status.octubre.be", "External status page of the different Octubre services"], ["Git", "https://git.octubre.be", "Forgejo based gitserver, alternative for my Github account"], ["#Soon", "", "Pyros? - Under construction"], ["Archive", "https://archive.octubre.be", "Separate website to host old, no longer maintained packages & websites - Under construction"], ["Dev", "https://dev.octubre.be", "Development subdomain for alfa & beta releases"]]}/>
          </div>
          {/*test*/}

          <h3>Contact</h3>

          <p>
              Reach out to me using <a
              href={"https://karsvanvelzen.be"}> this link!</a>
          </p>

          <p>
              Please register any bugs of this website on <a
              href={"https://github.com/JeCheeseSmith/Octubre/issues"}> GitHub</a>.
          </p>
      </>
  )
}

export default App

import Header from "./Components/Header"
import Screen from "./Components/Screen"
import Main from "./Components/Main"
import "./App.css"

function App() {
  return (
    <div className='calc'>
      <Header />
      <Screen />
      <Main />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
      </div>
    </div>
  )
}

export default App

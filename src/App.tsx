import Display from "./Display"
import Footer from "./Footer"

function App() {

  return (
    <div className="app">
      <h2>Hey! Welcome to the NASA ROVER pic of the day app</h2>
      {/**TODO
       * Two boxes
       * One for displaying images
       * Other for selecting calendar
       */}
      <Display />
      <Footer />
    </div>
  )
}

export default App

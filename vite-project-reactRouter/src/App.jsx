import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <header>
          <Header />
        </header>
      </div>

      <main>
        <Main />
      </main>
    </div>
  )
}

export default App

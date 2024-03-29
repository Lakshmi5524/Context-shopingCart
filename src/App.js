import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App

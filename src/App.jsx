import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className='App'>

      <Header></Header>

      <div className="min-h-[calc(100vh-100px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      
    </div>
  )
}

export default App

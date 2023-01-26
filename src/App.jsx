import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default App

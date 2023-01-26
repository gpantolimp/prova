import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

function App() {
  return (
    <div className="App">
      <div class="container mx-auto">
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App

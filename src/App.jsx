import Header from "./components/Header"
import Footer from "./components/Footer"
import Content from "./components/Content"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-zinc-50 to-zinc-100">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App

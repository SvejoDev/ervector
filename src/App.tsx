import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Services } from "./components/Services"
import { Approach } from "./components/Approach"
import { ContactForm } from "./components/ContactForm"
import { Press } from "./components/Press"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Approach />
        <ContactForm />
        <Press />
      </main>
      <Footer />
    </div>
  )
}

export default App


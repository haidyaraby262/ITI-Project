import Hero from './Hero'
import Navbar from './Navbar'
import Offer from './Offer'
import Bestproduct from './Bestproduct'
import Customersay from './Customersay'
import Footer from './Footer'

function HomePage() {
  return (
    <>
    <Navbar/>

    <section id="home">
      <Hero />
    </section>

      <Bestproduct />

      <Offer />

      <section id="customersays">
        <Customersay />
      </section>
      
      <footer id="footer">
        <Footer />
      </footer>
    </>
  )
}

export default HomePage
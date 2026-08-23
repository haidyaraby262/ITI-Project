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
      <Hero />
      <Bestproduct />
      <Offer />
      <Customersay />
      <Footer />
    </>
  )
}

export default HomePage
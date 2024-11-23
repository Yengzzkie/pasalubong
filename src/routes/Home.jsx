import FeaturedCarousel from "../components/Carousel";
import About from "../components/About";
import Banner from "../components/Banner";
import Partners from "../components/Partners";

function Home() {
  return (
    <div>
      <FeaturedCarousel />
      <About />
      <Banner />
      <Partners />
    </div>
  )
}

export default Home
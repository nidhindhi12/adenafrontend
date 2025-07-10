
import homeImg1 from '../images/homeImg1.jpeg'
import homeImg2 from '../images/homeImg2.jpeg'
import homeImg3 from '../images/homeImg3.webp'
import Slider from './Slider'
import Collection from './Admin/Collection'
import Categories from './Categories'
import Gender from './Gender'
import Stories from './Stories'




const Home = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, };

  const homeSlider = [homeImg2, homeImg1, homeImg3]
  return (
    <>
      <Slider />
      <Collection />
      <Categories />
      <Gender />
      <Stories />

    </>
  )
}

export default Home

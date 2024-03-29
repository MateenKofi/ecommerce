import { Link } from 'react-router-dom'
import banner from '../assets/main banner 3.jpg'

const Hero = () => {
  return (
    <div
  className="hero min-h-96 text-white"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="hero-overlay bg-opacity-15"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-full">
    <h1 className="text-6xl font-bold max-md:text-4xl text-[#f5eded]">Black Nana, Providing the quality brand!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-[#f5eded]">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae
          et a id nisi.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Shop Now</Link>
      </div>
  </div>
</div>
  )
}

export default Hero
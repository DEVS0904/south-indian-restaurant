import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-amber-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/south-indian-thali.jpg"
          alt="South Indian Food Thali"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience Authentic South Indian Cuisine
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-8">
            Savor the rich flavors and aromatic spices of South India right here in Rajkot. From crispy dosas to fluffy idlis, we bring the authentic taste of South India to your plate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-amber-900">Reserve a Table</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

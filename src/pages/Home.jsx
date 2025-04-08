import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />

      {/* About Section Preview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="section-title">Authentic South Indian Experience</motion.h2>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-amber-900 mb-6">
                Welcome to Dakshin Delight, Rajkot's premier destination for authentic South Indian cuisine. Our restaurant brings the rich culinary traditions of South India to Gujarat, offering a menu filled with delicious, made-from-scratch dishes prepared using traditional recipes and techniques.
              </motion.p>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-amber-900 mb-8">
                From crispy dosas to fluffy idlis, steaming vadas to flavorful uttapams - we serve a wide variety of South Indian delicacies made with the finest ingredients. Our chefs, who hail from South India, ensure that every dish captures the authentic flavors and essence of the region.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}>
                  <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/south-indian-thali.jpg"
                alt="South Indian Thali"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedItems />

      <Testimonials />

      {/* Call to Action */}
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-amber-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Taste of South India Today</h2>
          <p className="max-w-2xl mx-auto mb-10 text-amber-100">
            Visit us for an unforgettable dining experience or order online. We're ready to serve you the most authentic South Indian cuisine in Rajkot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-amber-800 hover:bg-amber-100">Reserve a Table</Link>
            <Link to="/menu" className="btn border-2 border-white text-white hover:bg-amber-700">View Menu</Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;

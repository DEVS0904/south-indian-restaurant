import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-16 md:py-24 bg-amber-50">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">Our Story</h1>
          <p className="max-w-3xl mx-auto text-amber-900">
            Bringing the authentic flavors of South India to the heart of Rajkot since 2018.
          </p>
        </div>

        {/* Our History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="section-title">How We Started</h2>
            <p className="text-amber-900 mb-6">
              Dakshin Delight was born from a passion to share the rich and diverse culinary
              traditions of South India with the people of Rajkot. Our founder, Chef Ramesh Iyer,
              having spent over 15 years perfecting his craft in renowned restaurants across Chennai,
              Bangalore, and Hyderabad, dreamed of bringing authentic South Indian cuisine to Gujarat.
            </p>
            <p className="text-amber-900">
              In 2018, that dream became a reality when we opened our doors in the bustling city of
              Rajkot. Since then, we've been dedicated to serving traditional South Indian dishes made
              with authentic recipes, fresh ingredients, and a lot of heart.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/uttapam.jpg"
              alt="Chef preparing South Indian food"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/paper-dosa.jpg"
              alt="Traditional South Indian cooking"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="section-title">Our Philosophy</h2>
            <p className="text-amber-900 mb-6">
              At Dakshin Delight, we believe in preserving the authenticity of South Indian cuisine
              while providing a memorable dining experience. Every dish we serve is a tribute to the
              rich culinary heritage of South India, prepared with traditional methods and spices
              sourced directly from the region.
            </p>
            <p className="text-amber-900">
              We are committed to quality and freshness. Our batters are prepared fresh daily, our
              spices are ground in-house, and we use only the finest ingredients. We also believe in
              customization, allowing our guests to adjust the spice levels and ingredients to suit
              their preferences.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-24">
          <h2 className="section-title text-center mx-auto mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-amber-100">
                {/* Placeholder for chef image */}
                <div className="w-full h-full flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Chef Dev Patel</h3>
              <p className="text-amber-600 mb-4">Founder & Head Chef</p>
              <p className="text-amber-700">
                With over 15 years of experience in South Indian cuisine, Chef Ramesh brings authentic
                flavors and traditional cooking techniques to every dish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-amber-100">
                {/* Placeholder for chef image */}
                <div className="w-full h-full flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Lakshmi Nair</h3>
              <p className="text-amber-600 mb-4">Dosa Specialist</p>
              <p className="text-amber-700">
                Known for creating the perfect dosa, Lakshmi's expertise in South Indian breakfast
                items has made our morning menu a customer favorite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-amber-100">
                {/* Placeholder for chef image */}
                <div className="w-full h-full flex items-center justify-center text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">Vijay Menon</h3>
              <p className="text-amber-600 mb-4">Restaurant Manager</p>
              <p className="text-amber-700">
                With his warm hospitality and attention to detail, Vijay ensures every guest at
                Dakshin Delight has a memorable dining experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 px-6 bg-amber-100 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-amber-800 mb-6">Come Experience Our Food</h2>
          <p className="max-w-3xl mx-auto mb-8 text-amber-900">
            We invite you to visit Dakshin Delight and experience the authentic flavors of South India.
            Whether you're a long-time fan of South Indian cuisine or trying it for the first time,
            we're sure you'll find something to love on our menu.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="btn btn-outline border-amber-600">
              Make a Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

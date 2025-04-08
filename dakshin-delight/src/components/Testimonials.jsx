const testimonials = [
  {
    id: 1,
    name: 'Rahul Patel',
    review: 'The most authentic South Indian food I\'ve had in Rajkot! The dosas were perfectly crispy and the chutneys were so flavorful. Will definitely come back!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Shah',
    review: 'Amazing ambiance and even better food! The idli sambar was just like what I had in Chennai. Great service and reasonable prices.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Arun Mehta',
    review: 'Being from Bangalore, I was skeptical about South Indian food in Gujarat, but Dakshin Delight truly impressed me with their authentic flavors and excellent service.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-amber-100">
      <div className="container">
        <h2 className="section-title text-center mx-auto mb-16">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="italic text-amber-900 mb-4">"{testimonial.review}"</p>
              </div>
              <div className="pt-4 border-t border-amber-200">
                <h4 className="font-bold text-amber-800">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

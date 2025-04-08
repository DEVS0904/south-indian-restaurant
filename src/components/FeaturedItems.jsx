import { Link } from 'react-router-dom';

const featuredItems = [
  {
    id: 1,
    name: 'Masala Dosa',
    description: 'Crispy rice and lentil crepe filled with spiced potato masala, served with coconut chutney and sambar.',
    image: '/images/masala-dosa.jpg',
    price: '₹120',
    options: [
      { name: 'Regular', price: '₹120' },
      { name: 'Butter', price: '₹140' },
      { name: 'Cheese', price: '₹160' },
      { name: 'Paneer', price: '₹180' },
    ]
  },
  {
    id: 2,
    name: 'Idli Vada Combo',
    description: 'Soft steamed rice cakes and crispy lentil donuts, served with coconut chutney and sambar.',
    image: '/images/idli-vada.jpg',
    price: '₹100',
    options: [
      { name: 'Regular (2 Idli, 1 Vada)', price: '₹100' },
      { name: 'Large (4 Idli, 2 Vada)', price: '₹180' },
      { name: 'Mini (4 Mini Idli, 1 Vada)', price: '₹110' },
    ]
  },
  {
    id: 3,
    name: 'Medu Vada',
    description: 'Crispy, savory lentil donuts with a soft interior, served with coconut chutney and sambar.',
    image: '/images/medu-vada-sambar.jpg',
    price: '₹80',
    options: [
      { name: 'Regular (2 Vada)', price: '₹80' },
      { name: 'Large (4 Vada)', price: '₹150' },
      { name: 'Sambar Vada', price: '₹110' },
    ]
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container">
        <h2 className="section-title text-center mx-auto mb-16">Our Signature Dishes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-amber-800">{item.name}</h3>
                  <span className="text-amber-600 font-bold">{item.price}</span>
                </div>
                <p className="text-amber-900 mb-6">{item.description}</p>
                <div className="mt-2">
                  <h4 className="font-semibold mb-2 text-amber-700">Customize:</h4>
                  <div className="text-sm text-amber-600">
                    {item.options.map((option, index) => (
                      <span key={index} className="inline-block mr-4 mb-2">
                        {option.name} ({option.price})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/menu" className="btn btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;

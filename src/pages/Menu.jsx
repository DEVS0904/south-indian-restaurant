import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/MenuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuItems[0].category);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-16 md:py-24 bg-amber-50"
    >
      <div className="container">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">Our Menu</h1>
          <p className="max-w-3xl mx-auto text-amber-900">
            Discover our wide range of authentic South Indian delicacies made with fresh ingredients
            and traditional recipes. Customize your order to suit your taste preferences.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex overflow-x-auto pb-4 mb-12">
          <div className="flex space-x-2 md:space-x-4 mx-auto">
            {menuItems.map((category, index) => (
                <motion.button
                  key={category.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category.category
                      ? 'bg-amber-600 text-white font-medium shadow-lg'
                      : 'bg-white text-amber-800 shadow-md hover:bg-amber-100'
                  }`}
                  onClick={() => handleCategoryClick(category.category)}
                >
                  {category.category}
                </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
        >
          {menuItems
            .find((category) => category.category === activeCategory)
            .items.map((item) => (
              <motion.div
                key={item.id} // Ensure key is on the motion component for AnimatePresence
                variants={itemVariants}
                layout // Add layout prop for smooth transition when category changes
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300"
                onClick={() => handleItemClick(item)}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="h-56 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-amber-800">{item.name}</h3>
                    <span className="font-bold text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-amber-700 mb-4 line-clamp-2">{item.description}</p>
                  <div className="text-center">
                    {/* The button inside doesn't need separate animation here, but could have whileTap */}
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Item Detail Modal */}
        <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog" // Add role for accessibility
              aria-modal="true"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-amber-800">{selectedItem.name}</h3>
                  <button
                    onClick={closeModal}
                    className="text-amber-800 hover:text-amber-600"
                    aria-label="Close modal" // Add aria-label for accessibility
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="h-64 md:h-auto rounded-lg overflow-hidden">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-2">Description</h4>
                    <p className="text-amber-700 mb-6">{selectedItem.description}</p>

                    <h4 className="font-semibold text-amber-800 mb-3">Customize Options</h4>
                    <div className="space-y-2 mb-6">
                      {selectedItem.options.map((option, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b border-amber-100 pb-2"
                        >
                          <span>{option.name}</span>
                          <span className="font-medium">{option.price}</span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Menu;

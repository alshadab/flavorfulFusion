import React from 'react';

const manufacturers = [
  {
    name: "Brand A",
    imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description: "Known for quality products and exceptional service."
  },
  {
    name: "Brand B",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8d1b5a1e7f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description: "Innovative designs that meet customer needs."
  },
  {
    name: "Brand C",
    imageUrl: "https://images.unsplash.com/photo-1521791061660-2f44b6e9e4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description: "Commitment to sustainability and ethical practices."
  },
  {
    name: "Brand D",
    imageUrl: "https://images.unsplash.com/photo-1561378269175-f6b8e5de688c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description: "Leaders in technology and innovation."
  },
  {
    name: "Brand E",
    imageUrl: "https://images.unsplash.com/photo-1584579897343-4021f43036f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description: "Reliable products with a focus on customer satisfaction."
  }
];

const Manufacturers = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">Our Manufacturers & Publishers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {manufacturers.map((manufacturer, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img 
              src={manufacturer.imageUrl} 
              alt={manufacturer.name} 
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400'; }} // Fallback image
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{manufacturer.name}</h2>
              <p className="text-gray-600 mt-2">{manufacturer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manufacturers;

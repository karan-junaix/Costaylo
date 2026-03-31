import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedPGs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const [properties, setProperties] = useState<any[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("http://127.0.0.1:8000/pgs/featured")
    .then(res => res.json())
    .then(data => {
      const formatted = data.map((pg: any) => ({
        id: pg.id,
        name: pg.title,
        location: pg.locality,
        price: pg.starting_price,
        occupancy: pg.occupancy || "N/A",
        image: pg.images?.[0]?.image_url
          ? `http://127.0.0.1:8000/${pg.images[0].image_url}`
          : "/placeholder.jpg",
        amenities: Array.isArray(pg.amenities)
    ? pg.amenities.filter((a: any) => typeof a === "string")
    : [] ,
        rating: pg.rating || 4.5,
        featured: true
      }));

      setProperties(formatted);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
}, []);


  const itemsPerView = 4;
  const maxIndex = Math.max(0, properties.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured PGs
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked premium accommodations for you
            </p>
          </div>
          <Link
            to="/pgs"
            className="text-[#c8155f] font-semibold hover:text-[#041e40] transition-colors flex items-center space-x-2 cursor-pointer"
          >
            <span>View All</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-[#c8155f] hover:to-[#041e40] hover:text-white transition-all cursor-pointer"
            >
              <i className="ri-arrow-left-s-line text-2xl"></i>
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-[#c8155f] hover:to-[#041e40] hover:text-white transition-all cursor-pointer"
            >
              <i className="ri-arrow-right-s-line text-2xl"></i>
            </button>
          )}

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <Link
                    to={`/pg/${property.id}`}
                    className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative w-full h-48">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {property.featured && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center space-x-1">
                        <i className="ri-star-fill text-yellow-500 text-sm"></i>
                        <span className="text-sm font-semibold text-gray-800">{property.rating}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {property.name}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <i className="ri-map-pin-line mr-1"></i>
                        <span>{property.location}</span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                            ₹{property.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">per month</div>
                        </div>
                        <div className="bg-gradient-to-r from-[#c8155f]/10 to-[#041e40]/10 text-[#c8155f] px-3 py-1 rounded-full text-xs font-medium">
                          {property.occupancy}
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="grid grid-cols-2 gap-2">
                        {Array.isArray(property.amenities) &&
  property.amenities.map((amenity, index) => (
    <div
      key={index}
      className="flex items-center text-xs text-gray-600"
    >
      <i className="ri-check-line text-[#c8155f] mr-1"></i>
      <span>{amenity || "N/A"}</span>
    </div>
  ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPGs;

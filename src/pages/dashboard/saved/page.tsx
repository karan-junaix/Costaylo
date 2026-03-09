import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

interface SavedPG {
  id: number;
  name: string;
  location: string;
  priceRange: { min: number; max: number };
  image: string;
  rating: number;
  reviews: number;
  type: 'Boys' | 'Girls' | 'Co-ed';
  distance: string;
  amenities: string[];
}

const SavedPGsPage = () => {
  const [sortBy, setSortBy] = useState('rating');
  const [savedPGs, setSavedPGs] = useState<SavedPG[]>([
    {
      id: 1,
      name: 'Green Valley Residency',
      location: 'Velachery, Chennai',
      priceRange: { min: 8000, max: 12000 },
      image: 'https://readdy.ai/api/search-image?query=Modern%20premium%20PG%20accommodation%20with%20clean%20white%20building%20exterior%2C%20contemporary%20architecture%2C%20landscaped%20entrance%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-001&orientation=landscape',
      rating: 4.8,
      reviews: 156,
      type: 'Co-ed',
      distance: '2.3 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Gym']
    },
    {
      id: 2,
      name: 'Sunrise Homes',
      location: 'Adyar, Chennai',
      priceRange: { min: 10000, max: 15000 },
      image: 'https://readdy.ai/api/search-image?query=Elegant%20PG%20hostel%20building%20with%20modern%20facade%2C%20glass%20windows%2C%20well-maintained%20entrance%2C%20natural%20lighting%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-002&orientation=landscape',
      rating: 4.9,
      reviews: 203,
      type: 'Boys',
      distance: '1.8 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry']
    },
    {
      id: 3,
      name: 'Pearl Residency',
      location: 'T Nagar, Chennai',
      priceRange: { min: 9000, max: 13000 },
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20PG%20accommodation%20building%20with%20clean%20architecture%2C%20modern%20design%2C%20bright%20exterior%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-003&orientation=landscape',
      rating: 4.7,
      reviews: 142,
      type: 'Girls',
      distance: '3.1 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Security']
    },
    {
      id: 4,
      name: 'Skyline Heights',
      location: 'Anna Nagar, Chennai',
      priceRange: { min: 11000, max: 16000 },
      image: 'https://readdy.ai/api/search-image?query=Luxury%20PG%20building%20with%20premium%20architecture%2C%20modern%20glass%20facade%2C%20landscaped%20surroundings%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-004&orientation=landscape',
      rating: 4.9,
      reviews: 187,
      type: 'Co-ed',
      distance: '4.5 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Gym', 'Pool']
    },
    {
      id: 5,
      name: 'Comfort Inn PG',
      location: 'Porur, Chennai',
      priceRange: { min: 7500, max: 11000 },
      image: 'https://readdy.ai/api/search-image?query=Affordable%20modern%20PG%20hostel%20with%20clean%20white%20building%2C%20simple%20contemporary%20design%2C%20well-lit%20entrance%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-005&orientation=landscape',
      rating: 4.6,
      reviews: 98,
      type: 'Boys',
      distance: '5.2 km',
      amenities: ['WiFi', 'AC', 'Meals']
    },
    {
      id: 6,
      name: 'Royal Nest',
      location: 'Nungambakkam, Chennai',
      priceRange: { min: 12000, max: 18000 },
      image: 'https://readdy.ai/api/search-image?query=Premium%20luxury%20PG%20building%20with%20elegant%20architecture%2C%20modern%20design%2C%20sophisticated%20entrance%2C%20bright%20natural%20light%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-006&orientation=landscape',
      rating: 4.8,
      reviews: 165,
      type: 'Girls',
      distance: '2.7 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Gym', 'Laundry']
    },
    {
      id: 7,
      name: 'Urban Living Spaces',
      location: 'Guindy, Chennai',
      priceRange: { min: 8500, max: 12500 },
      image: 'https://readdy.ai/api/search-image?query=Modern%20urban%20PG%20accommodation%20with%20contemporary%20architecture%2C%20clean%20lines%2C%20bright%20facade%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-007&orientation=landscape',
      rating: 4.7,
      reviews: 134,
      type: 'Co-ed',
      distance: '3.8 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Parking']
    },
    {
      id: 8,
      name: 'Elite Residency',
      location: 'Mylapore, Chennai',
      priceRange: { min: 10500, max: 14500 },
      image: 'https://readdy.ai/api/search-image?query=High-end%20PG%20building%20with%20premium%20modern%20architecture%2C%20glass%20windows%2C%20elegant%20entrance%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-008&orientation=landscape',
      rating: 4.8,
      reviews: 178,
      type: 'Boys',
      distance: '2.1 km',
      amenities: ['WiFi', 'AC', 'Meals', 'Gym', 'Security']
    },
    {
      id: 9,
      name: 'Harmony Homes',
      location: 'Chromepet, Chennai',
      priceRange: { min: 7000, max: 10000 },
      image: 'https://readdy.ai/api/search-image?query=Budget-friendly%20modern%20PG%20hostel%20with%20clean%20simple%20architecture%2C%20white%20building%2C%20well-maintained%20entrance%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=saved-pg-009&orientation=landscape',
      rating: 4.5,
      reviews: 89,
      type: 'Girls',
      distance: '6.4 km',
      amenities: ['WiFi', 'Meals', 'Security']
    }
  ]);

  const handleRemove = (id: number) => {
    setSavedPGs(savedPGs.filter(pg => pg.id !== id));
  };

  const getSortedPGs = () => {
    const sorted = [...savedPGs];
    
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'price-low':
        return sorted.sort((a, b) => a.priceRange.min - b.priceRange.min);
      case 'price-high':
        return sorted.sort((a, b) => b.priceRange.max - a.priceRange.max);
      case 'distance':
        return sorted.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
      default:
        return sorted;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Boys':
        return 'bg-blue-100 text-blue-700';
      case 'Girls':
        return 'bg-pink-100 text-pink-700';
      case 'Co-ed':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const sortedPGs = getSortedPGs();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Saved PGs</h1>
            <p className="text-sm text-gray-600 mt-1">
              {savedPGs.length} {savedPGs.length === 1 ? 'property' : 'properties'} saved
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-3">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm bg-white cursor-pointer"
            >
              <option value="rating">Highest Rating</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="distance">Nearest First</option>
            </select>
          </div>
        </div>

        {/* PGs Grid */}
        {sortedPGs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPGs.map((pg) => (
              <div
                key={pg.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pg.image}
                    alt={pg.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(pg.id)}
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all cursor-pointer group/heart"
                    title="Remove from saved"
                  >
                    <i className="ri-heart-fill text-xl text-red-500 group-hover/heart:scale-125 transition-transform"></i>
                  </button>

                  {/* Type Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(pg.type)}`}>
                    {pg.type}
                  </div>

                  {/* Distance Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 flex items-center space-x-1">
                    <i className="ri-map-pin-line"></i>
                    <span>{pg.distance} away</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name & Location */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#c8155f] transition-colors">
                      {pg.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <i className="ri-map-pin-line mr-1"></i>
                      <span>{pg.location}</span>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-3">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                      ₹{pg.priceRange.min.toLocaleString()} - ₹{pg.priceRange.max.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">per month</div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-semibold">
                      <i className="ri-star-fill"></i>
                      <span>{pg.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">({pg.reviews} reviews)</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pg.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/pg/${pg.id}`}
                    className="block w-full text-center bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-nowrap cursor-pointer"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10 rounded-full mx-auto mb-4">
              <i className="ri-heart-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Saved PGs Yet</h3>
            <p className="text-gray-600 mb-6">
              Start exploring and save your favorite PGs to view them here
            </p>
            <Link
              to="/pgs"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line"></i>
              <span>Browse PGs</span>
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SavedPGsPage;

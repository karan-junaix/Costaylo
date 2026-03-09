import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';

interface RecentPG {
  id: number;
  name: string;
  location: string;
  priceRange: { min: number; max: number };
  image: string;
  rating: number;
  reviews: number;
  type: 'Boys' | 'Girls' | 'Co-ed';
  amenities: string[];
  viewedAt: string;
  isSaved: boolean;
}

const RecentlyViewedPage = () => {
  const [recentPGs, setRecentPGs] = useState<RecentPG[]>([
    {
      id: 1,
      name: 'Green Valley Residency',
      location: 'Velachery, Chennai',
      priceRange: { min: 8000, max: 12000 },
      image: 'https://readdy.ai/api/search-image?query=Modern%20premium%20PG%20accommodation%20with%20clean%20white%20building%20exterior%2C%20contemporary%20architecture%2C%20landscaped%20entrance%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-001&orientation=landscape',
      rating: 4.8,
      reviews: 156,
      type: 'Co-ed',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Parking'],
      viewedAt: '2024-01-28T10:30:00',
      isSaved: false
    },
    {
      id: 2,
      name: 'Sunrise Homes',
      location: 'Adyar, Chennai',
      priceRange: { min: 10000, max: 15000 },
      image: 'https://readdy.ai/api/search-image?query=Elegant%20PG%20hostel%20building%20with%20modern%20facade%2C%20glass%20windows%2C%20well-maintained%20entrance%2C%20natural%20lighting%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-002&orientation=landscape',
      rating: 4.9,
      reviews: 203,
      type: 'Boys',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry'],
      viewedAt: '2024-01-27T15:45:00',
      isSaved: true
    },
    {
      id: 3,
      name: 'Pearl Residency',
      location: 'T Nagar, Chennai',
      priceRange: { min: 9000, max: 13000 },
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20PG%20accommodation%20building%20with%20clean%20architecture%2C%20modern%20design%2C%20bright%20exterior%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-003&orientation=landscape',
      rating: 4.7,
      reviews: 142,
      type: 'Girls',
      amenities: ['WiFi', 'AC', 'Meals', 'Parking'],
      viewedAt: '2024-01-26T09:20:00',
      isSaved: false
    },
    {
      id: 4,
      name: 'Skyline Heights',
      location: 'Anna Nagar, Chennai',
      priceRange: { min: 11000, max: 16000 },
      image: 'https://readdy.ai/api/search-image?query=Luxury%20PG%20building%20with%20premium%20architecture%2C%20modern%20glass%20facade%2C%20landscaped%20surroundings%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-004&orientation=landscape',
      rating: 4.9,
      reviews: 187,
      type: 'Co-ed',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Parking'],
      viewedAt: '2024-01-25T14:10:00',
      isSaved: true
    },
    {
      id: 5,
      name: 'Comfort Inn PG',
      location: 'Porur, Chennai',
      priceRange: { min: 7500, max: 11000 },
      image: 'https://readdy.ai/api/search-image?query=Affordable%20modern%20PG%20hostel%20with%20clean%20white%20building%2C%20simple%20contemporary%20design%2C%20well-lit%20entrance%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-005&orientation=landscape',
      rating: 4.6,
      reviews: 98,
      type: 'Boys',
      amenities: ['WiFi', 'AC', 'Meals'],
      viewedAt: '2024-01-24T11:30:00',
      isSaved: false
    },
    {
      id: 6,
      name: 'Royal Nest',
      location: 'Nungambakkam, Chennai',
      priceRange: { min: 12000, max: 18000 },
      image: 'https://readdy.ai/api/search-image?query=Premium%20luxury%20PG%20building%20with%20elegant%20architecture%2C%20modern%20design%2C%20sophisticated%20entrance%2C%20bright%20natural%20light%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-006&orientation=landscape',
      rating: 4.8,
      reviews: 165,
      type: 'Girls',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry', 'Parking'],
      viewedAt: '2024-01-23T16:45:00',
      isSaved: false
    },
    {
      id: 7,
      name: 'Urban Living Spaces',
      location: 'Guindy, Chennai',
      priceRange: { min: 8500, max: 12500 },
      image: 'https://readdy.ai/api/search-image?query=Modern%20urban%20PG%20accommodation%20with%20contemporary%20architecture%2C%20clean%20lines%2C%20bright%20facade%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-007&orientation=landscape',
      rating: 4.7,
      reviews: 134,
      type: 'Co-ed',
      amenities: ['WiFi', 'AC', 'Meals', 'Parking'],
      viewedAt: '2024-01-22T13:20:00',
      isSaved: true
    },
    {
      id: 8,
      name: 'Elite Residency',
      location: 'Mylapore, Chennai',
      priceRange: { min: 10500, max: 14500 },
      image: 'https://readdy.ai/api/search-image?query=High-end%20PG%20building%20with%20premium%20modern%20architecture%2C%20glass%20windows%2C%20elegant%20entrance%2C%20bright%20daylight%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-008&orientation=landscape',
      rating: 4.8,
      reviews: 178,
      type: 'Boys',
      amenities: ['WiFi', 'AC', 'Meals', 'Laundry'],
      viewedAt: '2024-01-21T10:15:00',
      isSaved: false
    },
    {
      id: 9,
      name: 'Harmony Homes',
      location: 'Chromepet, Chennai',
      priceRange: { min: 7000, max: 10000 },
      image: 'https://readdy.ai/api/search-image?query=Budget-friendly%20modern%20PG%20hostel%20with%20clean%20simple%20architecture%2C%20white%20building%2C%20well-maintained%20entrance%2C%20professional%20real%20estate%20photography&width=400&height=300&seq=recent-pg-009&orientation=landscape',
      rating: 4.5,
      reviews: 89,
      type: 'Girls',
      amenities: ['WiFi', 'Meals', 'Parking'],
      viewedAt: '2024-01-20T08:40:00',
      isSaved: false
    }
  ]);

  const toggleSave = (id: number) => {
    setRecentPGs(recentPGs.map(pg => 
      pg.id === id ? { ...pg, isSaved: !pg.isSaved } : pg
    ));
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

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'WiFi':
        return 'ri-wifi-line';
      case 'AC':
        return 'ri-temp-cold-line';
      case 'Meals':
        return 'ri-restaurant-line';
      case 'Laundry':
        return 'ri-shirt-line';
      case 'Parking':
        return 'ri-parking-box-line';
      default:
        return 'ri-checkbox-circle-line';
    }
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const viewed = new Date(dateString);
    const diffInMs = now.getTime() - viewed.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInDays > 0) {
      return `Viewed ${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    } else if (diffInHours > 0) {
      return `Viewed ${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else if (diffInMinutes > 0) {
      return `Viewed ${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return 'Viewed just now';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recently Viewed</h1>
          <p className="text-sm text-gray-600 mt-1">
            {recentPGs.length} {recentPGs.length === 1 ? 'property' : 'properties'} in your viewing history
          </p>
        </div>

        {/* PGs Grid */}
        {recentPGs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPGs.map((pg) => (
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
                  
                  {/* Save Button */}
                  <button
                    onClick={() => toggleSave(pg.id)}
                    className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all cursor-pointer group/heart"
                    title={pg.isSaved ? 'Remove from saved' : 'Save this PG'}
                  >
                    <i className={`${pg.isSaved ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-700'} text-xl group-hover/heart:scale-125 transition-transform`}></i>
                  </button>

                  {/* Type Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(pg.type)}`}>
                    {pg.type}
                  </div>

                  {/* Last Viewed Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 flex items-center space-x-1">
                    <i className="ri-time-line"></i>
                    <span>{getTimeAgo(pg.viewedAt)}</span>
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

                  {/* Amenities Icons */}
                  <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-200">
                    {pg.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 hover:bg-[#c8155f] hover:text-white transition-all cursor-pointer"
                        title={amenity}
                      >
                        <i className={`${getAmenityIcon(amenity)} text-base`}></i>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`/pg/${pg.id}`}
                      className="flex-1 text-center bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02] whitespace-nowrap cursor-pointer"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => toggleSave(pg.id)}
                      className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        pg.isSaved
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pg.isSaved ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10 rounded-full mx-auto mb-4">
              <i className="ri-eye-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Recently Viewed PGs Yet</h3>
            <p className="text-gray-600 mb-6">
              Start exploring PGs and they will appear here for quick access
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

export default RecentlyViewedPage;

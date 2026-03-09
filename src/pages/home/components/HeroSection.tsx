import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([5000, 20000]);
  const [occupancy, setOccupancy] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  const bannerImages = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20exterior%20building%20with%20clean%20architecture%2C%20welcoming%20entrance%2C%20well-maintained%20facade%2C%20bright%20daylight%2C%20professional%20photography%2C%20inviting%20atmosphere%2C%20contemporary%20design%2C%20Chennai%20residential%20area&width=1400&height=500&seq=banner-001&orientation=landscape',
      title: 'Premium PG Accommodations',
      subtitle: 'Find your perfect home in Chennai'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=Spacious%20comfortable%20PG%20common%20area%20with%20modern%20furniture%2C%20dining%20space%2C%20recreational%20zone%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20contemporary%20interior%20design%2C%20welcoming%20atmosphere%2C%20professional%20photography&width=1400&height=500&seq=banner-002&orientation=landscape',
      title: 'Comfortable Living Spaces',
      subtitle: 'Fully furnished rooms with all amenities'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=Happy%20diverse%20young%20professionals%20and%20students%20in%20PG%20accommodation%2C%20smiling%20faces%2C%20friendly%20atmosphere%2C%20modern%20interior%2C%20bright%20lighting%2C%20community%20living%2C%20professional%20photography%2C%20welcoming%20environment&width=1400&height=500&seq=banner-003&orientation=landscape',
      title: 'Safe & Secure Environment',
      subtitle: 'Join thousands of happy residents'
    }
  ];

  const areas = [
    'T. Nagar',
    'Velachery',
    'OMR (Old Mahabalipuram Road)',
    'Guindy',
    'Anna Nagar',
    'Tambaram',
    'Adyar',
    'Porur',
    'Chromepet',
    'Perungudi'
  ];

  const properties = [
    {
      id: 1,
      name: 'Comfort Stay PG',
      location: 'T. Nagar, Chennai',
      price: 8500,
      occupancy: 'Double Sharing',
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20room%20interior%20with%20two%20beds%2C%20clean%20white%20walls%2C%20wooden%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%20from%20large%20window%2C%20minimalist%20decor%2C%20cozy%20atmosphere%2C%20professional%20photography%2C%20neat%20and%20organized%20space&width=800&height=600&seq=pg-001&orientation=landscape',
      amenities: ['WiFi', 'AC', 'Food', 'Laundry'],
      rating: 4.5,
      featured: true
    },
    {
      id: 2,
      name: 'Elite Residency',
      location: 'Velachery, Chennai',
      price: 12000,
      occupancy: 'Single Room',
      image: 'https://readdy.ai/api/search-image?query=Premium%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20study%20table%2C%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20design%2C%20professional%20photography%2C%20spacious%20and%20comfortable&width=800&height=600&seq=pg-002&orientation=landscape',
      amenities: ['WiFi', 'AC', 'Food', 'Gym'],
      rating: 4.7,
      featured: true
    },
    {
      id: 3,
      name: 'Urban Nest PG',
      location: 'OMR, Chennai',
      price: 9500,
      occupancy: 'Double Sharing',
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20double%20sharing%20PG%20accommodation%20with%20twin%20beds%2C%20modern%20furniture%2C%20study%20area%2C%20storage%20space%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20minimalist%20aesthetic%2C%20professional%20photography%2C%20comfortable%20living%20space&width=800&height=600&seq=pg-003&orientation=landscape',
      amenities: ['WiFi', 'AC', 'Food', 'Parking'],
      rating: 4.6,
      featured: true
    },
    {
      id: 4,
      name: 'Green Valley PG',
      location: 'Anna Nagar, Chennai',
      price: 7500,
      occupancy: 'Triple Sharing',
      image: 'https://readdy.ai/api/search-image?query=Spacious%20triple%20sharing%20PG%20room%20with%20three%20beds%2C%20study%20desks%2C%20wardrobes%2C%20clean%20white%20walls%2C%20bright%20natural%20lighting%2C%20organized%20layout%2C%20modern%20furniture%2C%20professional%20photography%2C%20comfortable%20and%20affordable%20accommodation&width=800&height=600&seq=pg-004&orientation=landscape',
      amenities: ['WiFi', 'Food', 'Laundry', 'Security'],
      rating: 4.4,
      featured: true
    },
    {
      id: 5,
      name: 'Prime Stay',
      location: 'Guindy, Chennai',
      price: 11000,
      occupancy: 'Single Room',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20single%20room%20PG%20with%20queen%20bed%2C%20work%20desk%2C%20modern%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20clean%20white%20walls%2C%20wooden%20accents%2C%20bright%20lighting%2C%20professional%20photography%2C%20premium%20accommodation&width=800&height=600&seq=pg-005&orientation=landscape',
      amenities: ['WiFi', 'AC', 'Food', 'Housekeeping'],
      rating: 4.8,
      featured: true
    },
    {
      id: 6,
      name: 'Cozy Corner PG',
      location: 'Tambaram, Chennai',
      price: 6500,
      occupancy: 'Triple Sharing',
      image: 'https://readdy.ai/api/search-image?query=Budget-friendly%20triple%20sharing%20PG%20room%20with%20three%20single%20beds%2C%20study%20area%2C%20storage%20units%2C%20clean%20white%20walls%2C%20adequate%20lighting%2C%20simple%20furniture%2C%20professional%20photography%2C%20affordable%20and%20comfortable%20living&width=800&height=600&seq=pg-006&orientation=landscape',
      amenities: ['WiFi', 'Food', 'Laundry', 'Security'],
      rating: 4.3,
      featured: true
    },
    {
      id: 7,
      name: 'Skyline Residency',
      location: 'Adyar, Chennai',
      price: 13500,
      occupancy: 'Single Room',
      image: 'https://readdy.ai/api/search-image?query=Luxurious%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20premium%20furniture%2C%20study%20desk%2C%20wardrobe%2C%20air%20conditioning%2C%20clean%20white%20walls%2C%20elegant%20decor%2C%20bright%20lighting%2C%20professional%20photography%2C%20upscale%20accommodation&width=800&height=600&seq=pg-007&orientation=landscape',
      amenities: ['WiFi', 'AC', 'Food', 'Gym'],
      rating: 4.9,
      featured: true
    },
    {
      id: 8,
      name: 'Student Hub PG',
      location: 'Porur, Chennai',
      price: 8000,
      occupancy: 'Double Sharing',
      image: 'https://readdy.ai/api/search-image?query=Student-friendly%20double%20sharing%20PG%20room%20with%20two%20beds%2C%20study%20tables%2C%20bookshelves%2C%20wardrobes%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20organized%20space%2C%20professional%20photography%2C%20ideal%20for%20students&width=800&height=600&seq=pg-008&orientation=landscape',
      amenities: ['WiFi', 'Food', 'Laundry', 'Study Room'],
      rating: 4.5,
      featured: true
    }
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, properties.length - itemsPerView);

  // Banner auto-play
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(bannerInterval);
  }, [bannerImages.length]);

  // Auto-play functionality for Featured PGs
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handleSearch = () => {
    // Navigate to PGs page with filters
    const params = new URLSearchParams();
    if (location) params.append('location', location);
    params.append('minPrice', priceRange[0].toString());
    params.append('maxPrice', priceRange[1].toString());
    if (occupancy) params.append('occupancy', occupancy);
    
    navigate(`/pgs?${params.toString()}`);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#c8155f]/5 via-white to-[#041e40]/5 pt-24">
      {/* Banner Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {bannerImages.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === bannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
              
              {/* Banner Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {banner.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow-md">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Banner Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setBannerIndex(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === bannerIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12">
        {/* Hero Text & Search */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Search PGs in Chennai
            </h1>
            <p className="text-xl text-gray-700 font-light">
              Find your perfect home away from home with verified listings
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Location Select */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-map-pin-line mr-2 text-[#c8155f]"></i>
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Area</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-money-rupee-circle-line mr-2 text-[#c8155f]"></i>
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="3000"
                    max="30000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#c8155f] cursor-pointer"
                  />
                  <div className="text-sm text-gray-600 font-medium">
                    ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Occupancy */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <i className="ri-user-line mr-2 text-[#c8155f]"></i>
                  Occupancy
                </label>
                <select
                  value={occupancy}
                  onChange={(e) => setOccupancy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Type</option>
                  <option value="single">Single</option>
                  <option value="double">Double</option>
                  <option value="triple">Triple</option>
                  <option value="four">Four Sharing</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1 flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-search-line text-xl"></i>
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">2,500+</div>
              <div className="text-sm text-gray-600">Verified PGs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-sm text-gray-600">Localities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-sm text-gray-600">Happy Residents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Featured PGs Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
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

          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
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
                          {property.amenities.map((amenity, index) => (
                            <div
                              key={index}
                              className="flex items-center text-xs text-gray-600"
                            >
                              <i className="ri-check-line text-[#c8155f] mr-1"></i>
                              <span>{amenity}</span>
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
      </div>
    </section>
  );
};

export default HeroSection;

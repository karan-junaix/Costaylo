import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PGCard from '../pgs/components/PGCard';

const HostelsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([5000, 20000]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Hostels in Chennai - Affordable Student & Working Professional Hostels | PG Finder';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find affordable hostels in Chennai for students and working professionals. Verified hostel accommodations with modern amenities, WiFi, food, and 24/7 security across all major localities in Chennai.');
    }
  }, []);

  const filters = [
    { id: 'all', label: 'All Hostels', icon: 'ri-home-4-line' },
    { id: 'boys', label: 'Boys Hostels', icon: 'ri-user-line' },
    { id: 'girls', label: 'Girls Hostels', icon: 'ri-user-2-line' },
    { id: 'students', label: 'Student Hostels', icon: 'ri-book-line' },
    { id: 'working', label: 'Working Professional', icon: 'ri-briefcase-line' }
  ];

  const hostels = [
    {
      id: 'h1',
      name: 'Elite Boys Hostel',
      location: 'Adyar, Chennai',
      price: 8500,
      rating: 4.7,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=Modern%20boys%20hostel%20dormitory%20room%20with%20bunk%20beds%2C%20study%20desks%2C%20lockers%2C%20bright%20natural%20lighting%2C%20clean%20organized%20space%2C%20contemporary%20interior%20design%2C%20comfortable%20student%20accommodation%2C%20simple%20background&width=800&height=600&seq=hostel-001&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'Laundry', 'AC Rooms'],
      occupancy: 'Double/Triple Sharing',
      verified: true
    },
    {
      id: 'h2',
      name: 'Sunshine Girls Hostel',
      location: 'Anna Nagar, Chennai',
      price: 9000,
      rating: 4.8,
      reviews: 203,
      image: 'https://readdy.ai/api/search-image?query=Modern%20girls%20hostel%20bedroom%20with%20comfortable%20beds%2C%20study%20area%2C%20wardrobe%2C%20bright%20cheerful%20colors%2C%20natural%20lighting%2C%20clean%20organized%20space%2C%20contemporary%20interior%20design%2C%20safe%20accommodation%2C%20simple%20background&width=800&height=600&seq=hostel-002&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'Security', 'AC Rooms'],
      occupancy: 'Double/Triple Sharing',
      verified: true
    },
    {
      id: 'h3',
      name: 'Tech Park Working Hostel',
      location: 'OMR, Chennai',
      price: 12000,
      rating: 4.6,
      reviews: 178,
      image: 'https://readdy.ai/api/search-image?query=Modern%20working%20professional%20hostel%20room%20with%20single%20bed%2C%20work%20desk%2C%20chair%2C%20wardrobe%2C%20contemporary%20minimalist%20design%2C%20bright%20lighting%2C%20clean%20organized%20space%2C%20comfortable%20accommodation%2C%20simple%20background&width=800&height=600&seq=hostel-003&orientation=landscape',
      type: 'working',
      amenities: ['WiFi', 'Food', 'Gym', 'AC Rooms'],
      occupancy: 'Single/Double Sharing',
      verified: true
    },
    {
      id: 'h4',
      name: 'Student Hub Hostel',
      location: 'Velachery, Chennai',
      price: 7500,
      rating: 4.5,
      reviews: 142,
      image: 'https://readdy.ai/api/search-image?query=Student%20hostel%20common%20study%20area%20with%20multiple%20desks%2C%20chairs%2C%20bookshelves%2C%20bright%20lighting%2C%20collaborative%20learning%20space%2C%20modern%20interior%20design%2C%20comfortable%20environment%2C%20simple%20background&width=800&height=600&seq=hostel-004&orientation=landscape',
      type: 'students',
      amenities: ['WiFi', 'Food', 'Study Room', 'Library'],
      occupancy: 'Triple/Four Sharing',
      verified: true
    },
    {
      id: 'h5',
      name: 'Green Valley Boys Hostel',
      location: 'Porur, Chennai',
      price: 8000,
      rating: 4.6,
      reviews: 134,
      image: 'https://readdy.ai/api/search-image?query=Modern%20boys%20hostel%20recreation%20room%20with%20gaming%20area%2C%20TV%2C%20comfortable%20seating%2C%20bright%20natural%20lighting%2C%20contemporary%20design%2C%20social%20space%2C%20clean%20organized%20environment%2C%20simple%20background&width=800&height=600&seq=hostel-005&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'Games Room', 'Parking'],
      occupancy: 'Double/Triple Sharing',
      verified: true
    },
    {
      id: 'h6',
      name: 'Royal Girls Hostel',
      location: 'T Nagar, Chennai',
      price: 10000,
      rating: 4.9,
      reviews: 221,
      image: 'https://readdy.ai/api/search-image?query=Premium%20girls%20hostel%20lounge%20area%20with%20comfortable%20sofas%2C%20decorative%20elements%2C%20bright%20natural%20lighting%2C%20elegant%20contemporary%20design%2C%20welcoming%20atmosphere%2C%20clean%20organized%20space%2C%20simple%20background&width=800&height=600&seq=hostel-006&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'Security', 'AC Rooms'],
      occupancy: 'Single/Double Sharing',
      verified: true
    },
    {
      id: 'h7',
      name: 'IT Professionals Hostel',
      location: 'Sholinganallur, Chennai',
      price: 11500,
      rating: 4.7,
      reviews: 189,
      image: 'https://readdy.ai/api/search-image?query=Modern%20IT%20professional%20hostel%20workspace%20with%20ergonomic%20desk%2C%20chair%2C%20laptop%20setup%2C%20good%20lighting%2C%20contemporary%20minimalist%20design%2C%20productive%20environment%2C%20clean%20organized%20space%2C%20simple%20background&width=800&height=600&seq=hostel-007&orientation=landscape',
      type: 'working',
      amenities: ['WiFi', 'Food', 'Gym', 'Laundry'],
      occupancy: 'Single/Double Sharing',
      verified: true
    },
    {
      id: 'h8',
      name: 'Campus View Student Hostel',
      location: 'Guindy, Chennai',
      price: 7000,
      rating: 4.4,
      reviews: 167,
      image: 'https://readdy.ai/api/search-image?query=Student%20hostel%20dining%20hall%20with%20multiple%20tables%2C%20chairs%2C%20clean%20modern%20cafeteria%20design%2C%20bright%20lighting%2C%20spacious%20comfortable%20eating%20area%2C%20contemporary%20interior%2C%20simple%20background&width=800&height=600&seq=hostel-008&orientation=landscape',
      type: 'students',
      amenities: ['WiFi', 'Food', 'Study Room', 'Sports'],
      occupancy: 'Triple/Four Sharing',
      verified: true
    },
    {
      id: 'h9',
      name: 'Metro Boys Hostel',
      location: 'Nungambakkam, Chennai',
      price: 9500,
      rating: 4.6,
      reviews: 145,
      image: 'https://readdy.ai/api/search-image?query=Modern%20boys%20hostel%20bathroom%20with%20clean%20fixtures%2C%20shower%20area%2C%20contemporary%20design%2C%20bright%20lighting%2C%20hygienic%20facilities%2C%20organized%20space%2C%20simple%20background&width=800&height=600&seq=hostel-009&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'AC Rooms', 'Parking'],
      occupancy: 'Double/Triple Sharing',
      verified: true
    },
    {
      id: 'h10',
      name: 'Safe Haven Girls Hostel',
      location: 'Mylapore, Chennai',
      price: 9500,
      rating: 4.8,
      reviews: 198,
      image: 'https://readdy.ai/api/search-image?query=Girls%20hostel%20security%20entrance%20with%20modern%20access%20control%2C%20CCTV%20cameras%2C%20reception%20desk%2C%20bright%20welcoming%20lobby%2C%20contemporary%20design%2C%20safe%20environment%2C%20simple%20background&width=800&height=600&seq=hostel-010&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'Security', 'CCTV'],
      occupancy: 'Double/Triple Sharing',
      verified: true
    },
    {
      id: 'h11',
      name: 'Executive Working Hostel',
      location: 'Perungudi, Chennai',
      price: 13000,
      rating: 4.7,
      reviews: 176,
      image: 'https://readdy.ai/api/search-image?query=Executive%20hostel%20gym%20facility%20with%20modern%20equipment%2C%20treadmills%2C%20weights%2C%20bright%20lighting%2C%20contemporary%20fitness%20center%20design%2C%20clean%20organized%20space%2C%20simple%20background&width=800&height=600&seq=hostel-011&orientation=landscape',
      type: 'working',
      amenities: ['WiFi', 'Food', 'Gym', 'AC Rooms'],
      occupancy: 'Single Sharing',
      verified: true
    },
    {
      id: 'h12',
      name: 'Scholar Student Hostel',
      location: 'Chromepet, Chennai',
      price: 6500,
      rating: 4.5,
      reviews: 153,
      image: 'https://readdy.ai/api/search-image?query=Student%20hostel%20library%20with%20bookshelves%2C%20reading%20tables%2C%20study%20lamps%2C%20quiet%20learning%20environment%2C%20contemporary%20design%2C%20bright%20natural%20lighting%2C%20organized%20space%2C%20simple%20background&width=800&height=600&seq=hostel-012&orientation=landscape',
      type: 'students',
      amenities: ['WiFi', 'Food', 'Library', 'Study Room'],
      occupancy: 'Triple/Four Sharing',
      verified: true
    }
  ];

  const filteredHostels = hostels.filter(hostel => {
    if (selectedFilter === 'all') return true;
    return hostel.type === selectedFilter;
  }).filter(hostel => {
    return hostel.price >= priceRange[0] && hostel.price <= priceRange[1];
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20hostel%20building%20exterior%20with%20multiple%20floors%2C%20contemporary%20architecture%2C%20bright%20natural%20lighting%2C%20welcoming%20entrance%2C%20clean%20organized%20facade%2C%20urban%20setting%2C%20simple%20background&width=1920&height=600&seq=hostel-hero-001&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect Hostel in Chennai
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover affordable, safe, and comfortable hostel accommodations for students and working professionals across Chennai
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">150+</div>
              <div className="text-sm text-white/80">Verified Hostels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">₹6,500+</div>
              <div className="text-sm text-white/80">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Security</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className={`${filter.icon} text-lg mr-2`}></i>
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredHostels.length} Hostels Found
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {selectedFilter === 'all' ? 'All hostels' : filters.find(f => f.id === selectedFilter)?.label} in Chennai
              </p>
            </div>

            {/* Price Range Filter */}
            <div className="hidden md:flex items-center gap-4">
              <span className="text-sm text-gray-600">Price Range:</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">₹{priceRange[0]}</span>
                <span className="text-gray-400">-</span>
                <span className="text-sm font-semibold text-gray-900">₹{priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Hostels Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHostels.map(hostel => (
              <PGCard key={hostel.id} pg={hostel} />
            ))}
          </div>

          {filteredHostels.length === 0 && (
            <div className="text-center py-20">
              <i className="ri-home-4-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hostels Found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Hostels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hostel Accommodation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hostels offer unique benefits for students and working professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-money-rupee-circle-line',
                title: 'Cost-Effective',
                description: 'Affordable accommodation with all amenities included in one price'
              },
              {
                icon: 'ri-team-line',
                title: 'Community Living',
                description: 'Meet new people and build lasting friendships with fellow residents'
              },
              {
                icon: 'ri-restaurant-line',
                title: 'Food Included',
                description: 'Nutritious meals provided, saving time and effort on cooking'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Safe & Secure',
                description: '24/7 security, CCTV surveillance, and secure access control'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl mb-4">
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c8155f] to-[#041e40]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our team and we'll help you find the perfect hostel that meets your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/help"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-customer-service-2-line text-xl mr-2"></i>
              Contact Support
            </a>
            <a
              href="/pgs"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line text-xl mr-2"></i>
              Browse All PGs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HostelsPage;

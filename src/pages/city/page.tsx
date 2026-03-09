import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PGCard from '../pgs/components/PGCard';

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const [cityData, setCityData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Map city to data
    const citiesData: any = {
      'chennai': {
        name: 'Chennai',
        description: 'Find the best PG accommodations in Chennai, the cultural capital of South India. With excellent educational institutions, IT parks, and a vibrant lifestyle, Chennai offers perfect living options for students and professionals.',
        image: 'https://readdy.ai/api/search-image?query=Chennai%20city%20skyline%20with%20Marina%20Beach%2C%20modern%20buildings%2C%20coastal%20cityscape%2C%20bright%20daylight%2C%20urban%20development%2C%20contemporary%20architecture%2C%20vibrant%20city%20atmosphere&width=1920&height=600&seq=city-chennai-001&orientation=landscape',
        properties: 500,
        localities: 50,
        avgPrice: 9500,
        highlights: ['IT Hub', 'Educational Institutions', 'Beach City', 'Cultural Heritage', 'Metro Connectivity', 'Affordable Living']
      },
      'bangalore': {
        name: 'Bangalore',
        description: 'Discover quality PG accommodations in Bangalore, India\'s Silicon Valley. Known for its pleasant weather, thriving tech industry, and cosmopolitan culture, Bangalore is ideal for IT professionals and students.',
        image: 'https://readdy.ai/api/search-image?query=Bangalore%20city%20skyline%20with%20modern%20tech%20parks%2C%20green%20spaces%2C%20urban%20landscape%2C%20bright%20daylight%2C%20contemporary%20architecture%2C%20IT%20hub%20atmosphere%2C%20vibrant%20cityscape&width=1920&height=600&seq=city-bangalore-001&orientation=landscape',
        properties: 800,
        localities: 75,
        avgPrice: 12000,
        highlights: ['Silicon Valley of India', 'Pleasant Weather', 'Tech Parks', 'Startup Hub', 'Cosmopolitan Culture', 'Nightlife']
      },
      'mumbai': {
        name: 'Mumbai',
        description: 'Explore PG accommodations in Mumbai, the financial capital of India. From bustling business districts to serene suburbs, Mumbai offers diverse living options for professionals and students.',
        image: 'https://readdy.ai/api/search-image?query=Mumbai%20city%20skyline%20with%20Gateway%20of%20India%2C%20Marine%20Drive%2C%20modern%20skyscrapers%2C%20coastal%20cityscape%2C%20bright%20daylight%2C%20bustling%20metropolitan%20atmosphere&width=1920&height=600&seq=city-mumbai-001&orientation=landscape',
        properties: 1000,
        localities: 100,
        avgPrice: 15000,
        highlights: ['Financial Capital', 'Entertainment Industry', 'Business Hub', 'Coastal City', 'Local Train Network', 'Diverse Culture']
      },
      'delhi': {
        name: 'Delhi',
        description: 'Find verified PG accommodations in Delhi, India\'s capital city. With its rich history, government offices, and educational institutions, Delhi provides excellent living options across various localities.',
        image: 'https://readdy.ai/api/search-image?query=Delhi%20city%20skyline%20with%20India%20Gate%2C%20modern%20metro%2C%20urban%20landscape%2C%20bright%20daylight%2C%20capital%20city%20atmosphere%2C%20contemporary%20development%2C%20historical%20monuments&width=1920&height=600&seq=city-delhi-001&orientation=landscape',
        properties: 900,
        localities: 85,
        avgPrice: 13000,
        highlights: ['Capital City', 'Metro Connectivity', 'Educational Hub', 'Government Offices', 'Historical Sites', 'Cultural Diversity']
      },
      'hyderabad': {
        name: 'Hyderabad',
        description: 'Browse PG accommodations in Hyderabad, the City of Pearls. Known for its IT industry, historical landmarks, and delicious cuisine, Hyderabad offers great living options for tech professionals.',
        image: 'https://readdy.ai/api/search-image?query=Hyderabad%20city%20skyline%20with%20Charminar%2C%20HITEC%20City%2C%20modern%20IT%20parks%2C%20urban%20landscape%2C%20bright%20daylight%2C%20tech%20hub%20atmosphere%2C%20historical%20architecture&width=1920&height=600&seq=city-hyderabad-001&orientation=landscape',
        properties: 600,
        localities: 60,
        avgPrice: 10000,
        highlights: ['IT Hub', 'Affordable Living', 'Historical Heritage', 'Food Paradise', 'Metro Connectivity', 'Growing Economy']
      },
      'pune': {
        name: 'Pune',
        description: 'Discover PG accommodations in Pune, the Oxford of the East. With numerous educational institutions, IT companies, and pleasant weather, Pune is perfect for students and young professionals.',
        image: 'https://readdy.ai/api/search-image?query=Pune%20city%20landscape%20with%20educational%20institutions%2C%20modern%20IT%20parks%2C%20green%20hills%2C%20urban%20development%2C%20bright%20daylight%2C%20student-friendly%20atmosphere&width=1920&height=600&seq=city-pune-001&orientation=landscape',
        properties: 700,
        localities: 65,
        avgPrice: 11000,
        highlights: ['Educational Hub', 'IT Industry', 'Pleasant Weather', 'Student City', 'Cultural Events', 'Startup Ecosystem']
      }
    };

    const data = citiesData[city || ''];
    if (data) {
      setCityData(data);
      document.title = `PG in ${data.name} - Find Best Paying Guest Accommodations | PG Finder`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Find verified PG accommodations in ${data.name}. ${data.properties}+ properties across ${data.localities}+ localities. ${data.description}`);
      }
    }
  }, [city]);

  const properties = [
    {
      id: 'pg1',
      name: 'Premium Executive PG',
      location: cityData?.name || 'City',
      price: cityData?.avgPrice || 10000,
      rating: 4.8,
      reviews: 234,
      image: 'https://readdy.ai/api/search-image?query=Premium%20executive%20PG%20accommodation%20with%20modern%20bedroom%2C%20comfortable%20bed%2C%20work%20desk%2C%20contemporary%20interior%20design%2C%20bright%20natural%20lighting%2C%20clean%20organized%20space%2C%20simple%20background&width=800&height=600&seq=city-pg-001&orientation=landscape',
      type: 'working',
      amenities: ['WiFi', 'Food', 'AC', 'Gym'],
      occupancy: 'Single Sharing',
      verified: true
    },
    {
      id: 'pg2',
      name: 'Safe Haven Ladies PG',
      location: cityData?.name || 'City',
      price: (cityData?.avgPrice || 10000) - 500,
      rating: 4.9,
      reviews: 298,
      image: 'https://readdy.ai/api/search-image?query=Safe%20ladies%20PG%20accommodation%20with%20comfortable%20bedroom%2C%20security%20features%2C%20modern%20amenities%2C%20bright%20cheerful%20colors%2C%20natural%20lighting%2C%20welcoming%20atmosphere%2C%20simple%20background&width=800&height=600&seq=city-pg-002&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'AC', 'Security'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg3',
      name: 'Student Hub PG',
      location: cityData?.name || 'City',
      price: (cityData?.avgPrice || 10000) - 2000,
      rating: 4.6,
      reviews: 187,
      image: 'https://readdy.ai/api/search-image?query=Student%20PG%20accommodation%20with%20study%20area%2C%20multiple%20beds%2C%20bookshelves%2C%20bright%20natural%20lighting%2C%20collaborative%20learning%20space%2C%20contemporary%20design%2C%20simple%20background&width=800&height=600&seq=city-pg-003&orientation=landscape',
      type: 'students',
      amenities: ['WiFi', 'Food', 'Study Room', 'Library'],
      occupancy: 'Triple Sharing',
      verified: true
    },
    {
      id: 'pg4',
      name: 'Elite Boys Hostel',
      location: cityData?.name || 'City',
      price: (cityData?.avgPrice || 10000) - 1000,
      rating: 4.7,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=Modern%20boys%20hostel%20with%20comfortable%20dormitory%2C%20study%20desks%2C%20lockers%2C%20bright%20natural%20lighting%2C%20clean%20organized%20space%2C%20contemporary%20interior%2C%20simple%20background&width=800&height=600&seq=city-pg-004&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'AC', 'Games Room'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg5',
      name: 'Comfort Living PG',
      location: cityData?.name || 'City',
      price: cityData?.avgPrice || 10000,
      rating: 4.5,
      reviews: 142,
      image: 'https://readdy.ai/api/search-image?query=Comfortable%20PG%20accommodation%20common%20area%20with%20seating%2C%20entertainment%20zone%2C%20modern%20interior%20design%2C%20bright%20lighting%2C%20social%20space%2C%20contemporary%20style%2C%20simple%20background&width=800&height=600&seq=city-pg-005&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'AC', 'Laundry'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg6',
      name: 'Royal Ladies Residence',
      location: cityData?.name || 'City',
      price: (cityData?.avgPrice || 10000) + 500,
      rating: 4.8,
      reviews: 221,
      image: 'https://readdy.ai/api/search-image?query=Premium%20ladies%20PG%20residence%20with%20elegant%20bedroom%2C%20modern%20amenities%2C%20bright%20natural%20lighting%2C%20sophisticated%20interior%20design%2C%20welcoming%20atmosphere%2C%20simple%20background&width=800&height=600&seq=city-pg-006&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'AC', 'CCTV'],
      occupancy: 'Single Sharing',
      verified: true
    }
  ];

  if (!cityData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-map-pin-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">City Not Available</h2>
          <p className="text-gray-600 mb-6">We're currently available in Chennai. More cities coming soon!</p>
          <a
            href="/pgs"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-search-line text-lg mr-2"></i>
            Browse Chennai Properties
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${cityData.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find PG in {cityData.name}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
            {cityData.description}
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{cityData.properties}+</div>
              <div className="text-sm text-white/80">Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{cityData.localities}+</div>
              <div className="text-sm text-white/80">Localities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">₹{cityData.avgPrice}</div>
              <div className="text-sm text-white/80">Avg. Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white/80">Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose {cityData.name}?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cityData.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-4">
                <i className="ri-checkbox-circle-fill text-xl text-[#c8155f]"></i>
                <span className="text-sm font-medium text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Properties in {cityData.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Handpicked accommodations across the city
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <PGCard key={property.id} pg={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice for Other Cities */}
      {city !== 'chennai' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl mb-6">
              <i className="ri-time-line text-4xl text-white"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coming Soon to {cityData.name}!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently available in Chennai and expanding to {cityData.name} soon. Meanwhile, check out our Chennai properties or get notified when we launch in your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pgs"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-search-line text-lg mr-2"></i>
                Browse Chennai Properties
              </a>
              <a
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-notification-line text-lg mr-2"></i>
                Notify Me
              </a>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c8155f] to-[#041e40]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect PG?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Browse through verified properties and book your ideal accommodation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pgs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line text-xl mr-2"></i>
              Search Properties
            </a>
            <a
              href="/list-property"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-home-4-line text-xl mr-2"></i>
              List Your Property
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityPage;

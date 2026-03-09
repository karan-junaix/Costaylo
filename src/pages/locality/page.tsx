import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import PGCard from '../pgs/components/PGCard';

const LocalityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [locality, setLocality] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Map slug to locality data
    const localityData: any = {
      'anna-nagar': {
        name: 'Anna Nagar',
        description: 'One of Chennai\'s most sought-after residential areas, Anna Nagar offers excellent connectivity, shopping centers, and a peaceful environment perfect for students and professionals.',
        image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20neighborhood%20street%20view%20in%20Chennai%20India%2C%20tree-lined%20roads%2C%20contemporary%20buildings%2C%20urban%20landscape%2C%20bright%20daylight%2C%20clean%20organized%20cityscape%2C%20welcoming%20atmosphere&width=1920&height=600&seq=locality-anna-nagar-001&orientation=landscape',
        properties: 45,
        avgPrice: 9500,
        highlights: ['Excellent Metro Connectivity', 'Shopping Malls Nearby', 'Educational Institutions', 'Parks & Recreation', 'Safe Neighborhood', '24/7 Public Transport']
      },
      'adyar': {
        name: 'Adyar',
        description: 'A premium locality known for its educational institutions, IT parks, and proximity to the beach. Adyar is ideal for students and working professionals seeking quality accommodation.',
        image: 'https://readdy.ai/api/search-image?query=Upscale%20residential%20area%20in%20Chennai%20with%20modern%20buildings%2C%20green%20spaces%2C%20coastal%20proximity%2C%20urban%20development%2C%20bright%20natural%20lighting%2C%20contemporary%20cityscape&width=1920&height=600&seq=locality-adyar-001&orientation=landscape',
        properties: 52,
        avgPrice: 11000,
        highlights: ['IT Parks Nearby', 'Beach Access', 'Premium Colleges', 'Shopping Districts', 'Healthcare Facilities', 'Restaurants & Cafes']
      },
      'velachery': {
        name: 'Velachery',
        description: 'A rapidly developing area with excellent infrastructure, Velachery offers affordable accommodation options with great connectivity to IT corridors and educational institutions.',
        image: 'https://readdy.ai/api/search-image?query=Developing%20urban%20locality%20in%20Chennai%20with%20mixed%20residential%20commercial%20buildings%2C%20wide%20roads%2C%20modern%20infrastructure%2C%20bright%20daylight%2C%20bustling%20neighborhood%20atmosphere&width=1920&height=600&seq=locality-velachery-001&orientation=landscape',
        properties: 38,
        avgPrice: 8500,
        highlights: ['Metro Station', 'IT Corridor Access', 'Affordable Options', 'Shopping Malls', 'Educational Hubs', 'Good Connectivity']
      },
      't-nagar': {
        name: 'T Nagar',
        description: 'Chennai\'s busiest shopping district, T Nagar is a vibrant locality with excellent public transport, entertainment options, and a wide range of accommodation choices.',
        image: 'https://readdy.ai/api/search-image?query=Busy%20commercial%20shopping%20district%20in%20Chennai%20India%2C%20crowded%20streets%2C%20retail%20stores%2C%20urban%20commercial%20area%2C%20vibrant%20city%20life%2C%20bright%20daylight%2C%20bustling%20atmosphere&width=1920&height=600&seq=locality-tnagar-001&orientation=landscape',
        properties: 41,
        avgPrice: 10000,
        highlights: ['Shopping Paradise', 'Metro Connectivity', 'Entertainment Options', 'Restaurants & Eateries', 'Central Location', 'Public Transport Hub']
      },
      'porur': {
        name: 'Porur',
        description: 'A well-connected locality on the western side of Chennai, Porur offers a perfect blend of residential comfort and proximity to IT parks and industrial areas.',
        image: 'https://readdy.ai/api/search-image?query=Suburban%20residential%20area%20in%20Chennai%20with%20modern%20apartments%2C%20green%20spaces%2C%20wide%20roads%2C%20peaceful%20neighborhood%2C%20bright%20natural%20lighting%2C%20contemporary%20development&width=1920&height=600&seq=locality-porur-001&orientation=landscape',
        properties: 33,
        avgPrice: 8000,
        highlights: ['IT Park Proximity', 'Industrial Area Access', 'Affordable Living', 'Good Road Network', 'Shopping Centers', 'Peaceful Environment']
      },
      'omr': {
        name: 'OMR (Old Mahabalipuram Road)',
        description: 'Chennai\'s premier IT corridor, OMR is home to numerous tech parks and offers modern accommodation options perfect for IT professionals and students.',
        image: 'https://readdy.ai/api/search-image?query=Modern%20IT%20corridor%20highway%20in%20Chennai%20with%20tech%20parks%2C%20contemporary%20office%20buildings%2C%20wide%20expressway%2C%20urban%20development%2C%20bright%20daylight%2C%20professional%20business%20district&width=1920&height=600&seq=locality-omr-001&orientation=landscape',
        properties: 67,
        avgPrice: 12000,
        highlights: ['IT Hub', 'Tech Parks', 'Modern Infrastructure', 'Beach Proximity', 'Entertainment Zones', 'Premium Amenities']
      }
    };

    const data = localityData[slug || ''];
    if (data) {
      setLocality(data);
      document.title = `PG in ${data.name}, Chennai - Find Best Paying Guest Accommodations | PG Finder`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Find verified PG accommodations in ${data.name}, Chennai. ${data.properties}+ properties available with prices starting from ₹${data.avgPrice}. ${data.description}`);
      }
    }
  }, [slug]);

  const properties = [
    {
      id: 'pg1',
      name: 'Green Valley PG',
      location: locality?.name || 'Chennai',
      price: 8500,
      rating: 4.5,
      reviews: 124,
      image: 'https://readdy.ai/api/search-image?query=Modern%20PG%20accommodation%20bedroom%20with%20comfortable%20bed%2C%20study%20desk%2C%20wardrobe%2C%20bright%20natural%20lighting%2C%20clean%20organized%20space%2C%20contemporary%20interior%20design%2C%20welcoming%20atmosphere%2C%20simple%20background&width=800&height=600&seq=pg-locality-001&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'AC', 'Laundry'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg2',
      name: 'Comfort Stay Ladies PG',
      location: locality?.name || 'Chennai',
      price: 9000,
      rating: 4.7,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=Modern%20ladies%20PG%20accommodation%20room%20with%20twin%20beds%2C%20study%20area%2C%20wardrobe%2C%20bright%20cheerful%20colors%2C%20natural%20lighting%2C%20clean%20organized%20space%2C%20contemporary%20design%2C%20simple%20background&width=800&height=600&seq=pg-locality-002&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'AC', 'Security'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg3',
      name: 'Executive PG for Working Professionals',
      location: locality?.name || 'Chennai',
      price: 11000,
      rating: 4.6,
      reviews: 98,
      image: 'https://readdy.ai/api/search-image?query=Premium%20working%20professional%20PG%20room%20with%20single%20bed%2C%20work%20desk%2C%20ergonomic%20chair%2C%20modern%20amenities%2C%20bright%20lighting%2C%20contemporary%20minimalist%20design%2C%20simple%20background&width=800&height=600&seq=pg-locality-003&orientation=landscape',
      type: 'working',
      amenities: ['WiFi', 'Food', 'AC', 'Gym'],
      occupancy: 'Single Sharing',
      verified: true
    },
    {
      id: 'pg4',
      name: 'Student Hub PG',
      location: locality?.name || 'Chennai',
      price: 7500,
      rating: 4.4,
      reviews: 142,
      image: 'https://readdy.ai/api/search-image?query=Student%20PG%20accommodation%20with%20multiple%20beds%2C%20study%20desks%2C%20bookshelves%2C%20bright%20natural%20lighting%2C%20collaborative%20learning%20space%2C%20contemporary%20design%2C%20simple%20background&width=800&height=600&seq=pg-locality-004&orientation=landscape',
      type: 'students',
      amenities: ['WiFi', 'Food', 'Study Room', 'Library'],
      occupancy: 'Triple Sharing',
      verified: true
    },
    {
      id: 'pg5',
      name: 'Premium Boys Hostel',
      location: locality?.name || 'Chennai',
      price: 9500,
      rating: 4.8,
      reviews: 187,
      image: 'https://readdy.ai/api/search-image?query=Premium%20boys%20hostel%20common%20area%20with%20comfortable%20seating%2C%20entertainment%20zone%2C%20modern%20interior%20design%2C%20bright%20lighting%2C%20social%20space%2C%20contemporary%20style%2C%20simple%20background&width=800&height=600&seq=pg-locality-005&orientation=landscape',
      type: 'boys',
      amenities: ['WiFi', 'Food', 'AC', 'Games Room'],
      occupancy: 'Double Sharing',
      verified: true
    },
    {
      id: 'pg6',
      name: 'Safe Haven Ladies PG',
      location: locality?.name || 'Chennai',
      price: 10000,
      rating: 4.9,
      reviews: 203,
      image: 'https://readdy.ai/api/search-image?query=Safe%20ladies%20PG%20accommodation%20with%20security%20features%2C%20comfortable%20bedroom%2C%20modern%20amenities%2C%20bright%20natural%20lighting%2C%20welcoming%20atmosphere%2C%20contemporary%20design%2C%20simple%20background&width=800&height=600&seq=pg-locality-006&orientation=landscape',
      type: 'girls',
      amenities: ['WiFi', 'Food', 'AC', 'CCTV'],
      occupancy: 'Double Sharing',
      verified: true
    }
  ];

  if (!locality) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-map-pin-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Locality Not Found</h2>
          <p className="text-gray-600 mb-6">The locality you're looking for doesn't exist.</p>
          <a
            href="/pgs"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-search-line text-lg mr-2"></i>
            Browse All Properties
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
          backgroundImage: `url(${locality.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-white/80 mb-4">
            <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
            <i className="ri-arrow-right-s-line"></i>
            <a href="/pgs" className="hover:text-white transition-colors cursor-pointer">PG Listings</a>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-white">{locality.name}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            PG in {locality.name}, Chennai
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed mb-8">
            {locality.description}
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <i className="ri-home-4-line text-2xl text-white"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{locality.properties}+</div>
                <div className="text-sm text-white/80">Properties</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <i className="ri-money-rupee-circle-line text-2xl text-white"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">₹{locality.avgPrice}</div>
                <div className="text-sm text-white/80">Avg. Price/Month</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-white/80">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose {locality.name}?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {locality.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-4">
                <i className="ri-checkbox-circle-fill text-xl text-[#c8155f]"></i>
                <span className="text-sm font-medium text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Available Properties in {locality.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                {properties.length} verified PG accommodations
              </p>
            </div>
            <a
              href="/pgs"
              className="hidden md:inline-flex items-center gap-2 text-[#c8155f] font-semibold hover:underline cursor-pointer"
            >
              View All Properties
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map(property => (
              <PGCard key={property.id} pg={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c8155f] to-[#041e40]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Looking for PG in Other Localities?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Explore verified PG accommodations across all major localities in Chennai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pgs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line text-xl mr-2"></i>
              Browse All Localities
            </a>
            <a
              href="/help"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-customer-service-2-line text-xl mr-2"></i>
              Need Help?
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalityPage;

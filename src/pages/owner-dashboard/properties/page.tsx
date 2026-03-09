
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

const PropertiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const properties = [
    { 
      id: 1, 
      name: 'Sunshine PG - Velachery', 
      location: 'Velachery, Chennai',
      status: 'Active',
      occupancy: '18/24',
      revenue: '₹2.16L',
      rating: 4.5,
      views: 1234,
      leads: 45,
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20building%20exterior%20with%20clean%20white%20walls%2C%20well-maintained%20entrance%2C%20professional%20photography%2C%20bright%20daylight%2C%20simple%20background&width=400&height=300&seq=owner-prop-001&orientation=landscape'
    },
    { 
      id: 2, 
      name: 'Green Valley Hostel - Adyar', 
      location: 'Adyar, Chennai',
      status: 'Active',
      occupancy: '22/30',
      revenue: '₹3.96L',
      rating: 4.7,
      views: 2156,
      leads: 67,
      image: 'https://readdy.ai/api/search-image?query=Contemporary%20hostel%20building%20with%20green%20surroundings%2C%20modern%20architecture%2C%20clean%20facade%2C%20professional%20photography%2C%20natural%20lighting%2C%20simple%20background&width=400&height=300&seq=owner-prop-002&orientation=landscape'
    },
    { 
      id: 3, 
      name: 'City Center PG - T Nagar', 
      location: 'T Nagar, Chennai',
      status: 'Active',
      occupancy: '15/20',
      revenue: '₹1.35L',
      rating: 4.3,
      views: 987,
      leads: 34,
      image: 'https://readdy.ai/api/search-image?query=Urban%20PG%20accommodation%20in%20city%20center%2C%20modern%20building%20exterior%2C%20well-lit%20entrance%2C%20professional%20photography%2C%20clear%20sky%2C%20simple%20background&width=400&height=300&seq=owner-prop-003&orientation=landscape'
    },
    { 
      id: 4, 
      name: 'Lakeside Residency - OMR', 
      location: 'OMR, Chennai',
      status: 'Pending',
      occupancy: '12/25',
      revenue: '₹1.68L',
      rating: 4.4,
      views: 756,
      leads: 28,
      image: 'https://readdy.ai/api/search-image?query=Lakeside%20residential%20building%20with%20modern%20amenities%2C%20peaceful%20surroundings%2C%20professional%20photography%2C%20bright%20daylight%2C%20simple%20background&width=400&height=300&seq=owner-prop-004&orientation=landscape'
    },
    { 
      id: 5, 
      name: 'Metro Stay - Anna Nagar', 
      location: 'Anna Nagar, Chennai',
      status: 'Active',
      occupancy: '20/28',
      revenue: '₹3.20L',
      rating: 4.6,
      views: 1543,
      leads: 52,
      image: 'https://readdy.ai/api/search-image?query=Metro%20area%20PG%20accommodation%20with%20modern%20facilities%2C%20clean%20exterior%2C%20professional%20photography%2C%20natural%20lighting%2C%20simple%20background&width=400&height=300&seq=owner-prop-005&orientation=landscape'
    },
    { 
      id: 6, 
      name: 'Coastal Breeze PG - ECR', 
      location: 'ECR, Chennai',
      status: 'Inactive',
      occupancy: '8/22',
      revenue: '₹0.96L',
      rating: 4.2,
      views: 432,
      leads: 15,
      image: 'https://readdy.ai/api/search-image?query=Coastal%20area%20PG%20building%20with%20sea%20breeze%20atmosphere%2C%20modern%20design%2C%20professional%20photography%2C%20bright%20daylight%2C%20simple%20background&width=400&height=300&seq=owner-prop-006&orientation=landscape'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || property.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Properties</h1>
            <p className="text-gray-600">Manage all your PG listings</p>
          </div>
          <Link
            to="/owner-dashboard/add-property"
            className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer inline-flex items-center justify-center space-x-2"
          >
            <i className="ri-add-line text-xl"></i>
            <span>Add New Property</span>
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-lg"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search properties..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'all'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All ({properties.length})
              </button>
              <button
                onClick={() => setFilterStatus('active')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'active'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Active ({properties.filter(p => p.status === 'Active').length})
              </button>
              <button
                onClick={() => setFilterStatus('pending')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'pending'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pending ({properties.filter(p => p.status === 'Pending').length})
              </button>
              <button
                onClick={() => setFilterStatus('inactive')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === 'inactive'
                    ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Inactive ({properties.filter(p => p.status === 'Inactive').length})
              </button>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative w-full h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-500 text-sm"></i>
                    <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.status === 'Active' 
                      ? 'bg-green-500 text-white' 
                      : property.status === 'Pending'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-500 text-white'
                  }`}>
                    {property.status}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex items-center">
                  <i className="ri-map-pin-line mr-1"></i>
                  {property.location}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Occupancy</p>
                    <p className="font-bold text-gray-900">{property.occupancy}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Revenue</p>
                    <p className="font-bold text-[#c8155f]">{property.revenue}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Views</p>
                    <p className="font-bold text-gray-900">{property.views}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">Leads</p>
                    <p className="font-bold text-gray-900">{property.leads}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Link
                    to={`/owner-dashboard/property/${property.id}`}
                    className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-2.5 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 whitespace-nowrap cursor-pointer text-sm"
                  >
                    Manage
                  </Link>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                    <i className="ri-more-2-fill text-gray-700 text-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
              <i className="ri-building-line text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Properties Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterStatus('all');
              }}
              className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </OwnerDashboardLayout>
  );
};

export default PropertiesPage;

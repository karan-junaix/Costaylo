import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminPropertiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const properties = [
    { 
      id: 1, 
      name: 'Sunshine PG - Velachery', 
      owner: 'Rajesh Sharma',
      location: 'Velachery, Chennai',
      type: 'PG',
      rooms: 12,
      occupancy: '10/12',
      price: '₹8,500',
      status: 'Active',
      rating: 4.5,
      verified: true,
      image: 'https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20room%20with%20bed%20desk%20chair%20wardrobe%20clean%20bright%20interior%20simple%20minimalist%20design%20professional%20photography&width=400&height=300&seq=pg-prop-001&orientation=landscape'
    },
    { 
      id: 2, 
      name: 'Green Valley Hostel - Adyar', 
      owner: 'Sunita Reddy',
      location: 'Adyar, Chennai',
      type: 'Hostel',
      rooms: 20,
      occupancy: '18/20',
      price: '₹7,000',
      status: 'Active',
      rating: 4.7,
      verified: true,
      image: 'https://readdy.ai/api/search-image?query=Spacious%20hostel%20dormitory%20with%20multiple%20beds%20lockers%20clean%20organized%20bright%20natural%20lighting%20modern%20facilities%20professional%20photography&width=400&height=300&seq=pg-prop-002&orientation=landscape'
    },
    { 
      id: 3, 
      name: 'City Center PG - T Nagar', 
      owner: 'Arun Kumar',
      location: 'T Nagar, Chennai',
      type: 'PG',
      rooms: 8,
      occupancy: '5/8',
      price: '₹9,500',
      status: 'Pending',
      rating: 4.2,
      verified: false,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20PG%20room%20with%20single%20bed%20study%20table%20chair%20storage%20comfortable%20living%20space%20clean%20bright%20interior%20professional%20photography&width=400&height=300&seq=pg-prop-003&orientation=landscape'
    },
    { 
      id: 4, 
      name: 'Lakeside Residency - OMR', 
      owner: 'Meena Patel',
      location: 'OMR, Chennai',
      type: 'Co-living',
      rooms: 15,
      occupancy: '12/15',
      price: '₹12,000',
      status: 'Active',
      rating: 4.8,
      verified: true,
      image: 'https://readdy.ai/api/search-image?query=Premium%20co-living%20space%20with%20modern%20amenities%20comfortable%20furniture%20stylish%20interior%20design%20bright%20spacious%20room%20professional%20photography&width=400&height=300&seq=pg-prop-004&orientation=landscape'
    },
    { 
      id: 5, 
      name: 'Metro Stay - Anna Nagar', 
      owner: 'Karthik Iyer',
      location: 'Anna Nagar, Chennai',
      type: 'PG',
      rooms: 10,
      occupancy: '8/10',
      price: '₹8,000',
      status: 'Active',
      rating: 4.3,
      verified: true,
      image: 'https://readdy.ai/api/search-image?query=Well-maintained%20PG%20accommodation%20with%20bed%20wardrobe%20desk%20clean%20organized%20space%20good%20lighting%20professional%20photography&width=400&height=300&seq=pg-prop-005&orientation=landscape'
    },
    { 
      id: 6, 
      name: 'Coastal Breeze PG - ECR', 
      owner: 'Lakshmi Nair',
      location: 'ECR, Chennai',
      type: 'PG',
      rooms: 6,
      occupancy: '4/6',
      price: '₹10,500',
      status: 'Inactive',
      rating: 4.1,
      verified: true,
      image: 'https://readdy.ai/api/search-image?query=Peaceful%20PG%20room%20near%20beach%20with%20comfortable%20bed%20furniture%20clean%20bright%20airy%20space%20professional%20photography&width=400&height=300&seq=pg-prop-006&orientation=landscape'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.owner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || property.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const handleEditProperty = (property: any) => {
    setSelectedProperty(property);
    setIsEditModalOpen(true);
  };

  const handleSaveProperty = () => {
    console.log('Save property:', selectedProperty);
    setIsEditModalOpen(false);
  };

  const handleDeleteProperty = (propertyId: number) => {
    if (confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
      console.log('Delete property:', propertyId);
    }
  };

  const handleApproveProperty = (propertyId: number) => {
    console.log('Approve property:', propertyId);
    alert('Property approved successfully!');
  };

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Property Management</h1>
          <p className="text-gray-600">Manage all properties on the platform</p>
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
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : property.status === 'Pending'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {property.status}
                  </span>
                </div>
                {property.verified && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <i className="ri-verified-badge-fill"></i>
                      <span>Verified</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-1">{property.name}</h3>
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <i className="ri-map-pin-line mr-1"></i>
                  {property.location}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Owner: <span className="font-medium text-gray-900">{property.owner}</span>
                </p>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Type</p>
                    <p className="text-sm font-semibold text-gray-900">{property.type}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Rooms</p>
                    <p className="text-sm font-semibold text-gray-900">{property.rooms}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Occupancy</p>
                    <p className="text-sm font-semibold text-gray-900">{property.occupancy}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="text-sm font-bold text-[#c8155f]">{property.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <i className="ri-star-fill text-yellow-500 text-sm"></i>
                    <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {property.status === 'Pending' && (
                    <button
                      onClick={() => handleApproveProperty(property.id)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-check-line mr-1"></i>
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleEditProperty(property)}
                    className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-edit-line mr-1"></i>
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProperty(property.id)}
                    className="w-10 h-10 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors cursor-pointer"
                  >
                    <i className="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {isEditModalOpen && selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Edit Property</h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-close-line text-xl text-gray-500"></i>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                  <input
                    type="text"
                    value={selectedProperty.name}
                    onChange={(e) => setSelectedProperty({...selectedProperty, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={selectedProperty.location}
                    onChange={(e) => setSelectedProperty({...selectedProperty, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                    <select
                      value={selectedProperty.type}
                      onChange={(e) => setSelectedProperty({...selectedProperty, type: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm cursor-pointer"
                    >
                      <option value="PG">PG</option>
                      <option value="Hostel">Hostel</option>
                      <option value="Co-living">Co-living</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                    <input
                      type="number"
                      value={selectedProperty.rooms}
                      onChange={(e) => setSelectedProperty({...selectedProperty, rooms: parseInt(e.target.value)})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                      type="text"
                      value={selectedProperty.price}
                      onChange={(e) => setSelectedProperty({...selectedProperty, price: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={selectedProperty.status}
                      onChange={(e) => setSelectedProperty({...selectedProperty, status: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm cursor-pointer"
                    >
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="verified"
                    checked={selectedProperty.verified}
                    onChange={(e) => setSelectedProperty({...selectedProperty, verified: e.target.checked})}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <label htmlFor="verified" className="text-sm font-medium text-gray-700 cursor-pointer">
                    Verified Property
                  </label>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-6">
                <button
                  onClick={handleSaveProperty}
                  className="flex-1 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition-all cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminPropertiesPage;

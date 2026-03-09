
import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminHomeContentPage = () => {
  const [activeTab, setActiveTab] = useState('hero');

  // Hero Section State
  const [heroTitle, setHeroTitle] = useState('Find Your Perfect PG & Co-living Space in Chennai');
  const [heroSubtitle, setHeroSubtitle] = useState('Discover comfortable, affordable, and verified PG accommodations near you');
  const [heroBgImage, setHeroBgImage] = useState('https://readdy.ai/api/search-image?query=Modern%20comfortable%20co-living%20space%20interior%20with%20young%20professionals%2C%20bright%20natural%20lighting%2C%20contemporary%20furniture%2C%20clean%20minimalist%20design%2C%20warm%20welcoming%20atmosphere%2C%20professional%20photography%20style&width=1920&height=800&seq=hero-bg-001&orientation=landscape');

  // Featured PGs State
  const [featuredPGs, setFeaturedPGs] = useState([
    { id: 1, name: 'Sunshine PG - Velachery', selected: true },
    { id: 2, name: 'Green Valley Hostel - Adyar', selected: true },
    { id: 3, name: 'City Center PG - T Nagar', selected: true },
    { id: 4, name: 'Lakeside Residency - OMR', selected: false },
    { id: 5, name: 'Metro Stay - Anna Nagar', selected: false },
    { id: 6, name: 'Coastal Breeze PG - ECR', selected: false }
  ]);

  // Why Choose Us State
  const [whyChooseUsItems, setWhyChooseUsItems] = useState([
    { id: 1, title: 'Verified Properties', description: 'All PGs are personally verified by our team', icon: 'ri-shield-check-line', enabled: true },
    { id: 2, title: 'Best Prices', description: 'Get the best deals with no hidden charges', icon: 'ri-price-tag-3-line', enabled: true },
    { id: 3, title: 'Easy Booking', description: 'Book your PG in just a few clicks', icon: 'ri-calendar-check-line', enabled: true },
    { id: 4, title: '24/7 Support', description: 'Round the clock customer support', icon: 'ri-customer-service-2-line', enabled: true }
  ]);

  const handleSaveHero = () => {
    console.log('Save hero section:', { heroTitle, heroSubtitle, heroBgImage });
    alert('Hero section updated successfully!');
  };

  const handleSaveFeaturedPGs = () => {
    const selected = featuredPGs.filter(pg => pg.selected);
    console.log('Save featured PGs:', selected);
    alert(`${selected.length} featured PGs updated successfully!`);
  };

  const handleSaveWhyChooseUs = () => {
    const enabled = whyChooseUsItems.filter(item => item.enabled);
    console.log('Save why choose us:', enabled);
    alert('Why Choose Us section updated successfully!');
  };

  const toggleFeaturedPG = (id: number) => {
    setFeaturedPGs(featuredPGs.map(pg => 
      pg.id === id ? { ...pg, selected: !pg.selected } : pg
    ));
  };

  const toggleWhyChooseUsItem = (id: number) => {
    setWhyChooseUsItems(whyChooseUsItems.map(item => 
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Home Page Content</h1>
          <p className="text-gray-600">Manage all content on the home page</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md p-2">
          <div className="flex items-center space-x-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'hero'
                  ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-image-line mr-2"></i>
              Hero Section
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-star-line mr-2"></i>
              Featured PGs
            </button>
            <button
              onClick={() => setActiveTab('why-choose')}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'why-choose'
                  ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className="ri-checkbox-circle-line mr-2"></i>
              Why Choose Us
            </button>
          </div>
        </div>

        {/* Hero Section Tab */}
        {activeTab === 'hero' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Hero Section</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
                <input
                  type="text"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Background Image URL</label>
                <input
                  type="text"
                  value={heroBgImage}
                  onChange={(e) => setHeroBgImage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none text-sm"
                />
                <p className="text-xs text-gray-500 mt-2">Enter the full URL of the background image</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <img 
                    src={heroBgImage} 
                    alt="Hero Background Preview" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h1 className="text-3xl font-bold mb-2">{heroTitle}</h1>
                      <p className="text-lg">{heroSubtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSaveHero}
                className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-save-line mr-2"></i>
                Save Hero Section
              </button>
            </div>
          </div>
        )}

        {/* Featured PGs Tab */}
        {activeTab === 'featured' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Featured PGs</h2>
            <p className="text-sm text-gray-600 mb-6">Select which PGs should appear in the Featured section on the home page</p>
            
            <div className="space-y-3 mb-6">
              {featuredPGs.map((pg) => (
                <div key={pg.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-lg flex items-center justify-center">
                      <i className="ri-home-3-line text-white"></i>
                    </div>
                    <span className="font-medium text-gray-900">{pg.name}</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pg.selected}
                      onChange={() => toggleFeaturedPG(pg.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c8155f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#c8155f] peer-checked:to-[#041e40]"></div>
                  </label>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveFeaturedPGs}
              className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-save-line mr-2"></i>
              Save Featured PGs ({featuredPGs.filter(pg => pg.selected).length} selected)
            </button>
          </div>
        )}

        {/* Why Choose Us Tab */}
        {activeTab === 'why-choose' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us Section</h2>
            <p className="text-sm text-gray-600 mb-6">Manage the features displayed in the Why Choose Us section</p>
            
            <div className="space-y-4 mb-6">
              {whyChooseUsItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-lg flex items-center justify-center">
                        <i className={`${item.icon} text-white`}></i>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.enabled}
                        onChange={() => toggleWhyChooseUsItem(item.id)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#c8155f]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#c8155f] peer-checked:to-[#041e40]"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleSaveWhyChooseUs}
              className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-save-line mr-2"></i>
              Save Why Choose Us Section
            </button>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminHomeContentPage;

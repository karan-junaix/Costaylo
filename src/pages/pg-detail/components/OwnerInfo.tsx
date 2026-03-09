interface Owner {
  name: string;
  phone: string;
  email: string;
  verified: boolean;
  totalProperties: number;
  memberSince: string;
}

interface OwnerInfoProps {
  owner: Owner;
}

const OwnerInfo = ({ owner }: OwnerInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Owner Profile */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Property Owner</h2>
        
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="w-24 h-24 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            {owner.name.split(' ').map(n => n.charAt(0)).join('')}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-2xl font-bold text-gray-900">{owner.name}</h3>
              {owner.verified && (
                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  <i className="ri-shield-check-line"></i>
                  <span>Verified</span>
                </div>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <i className="ri-building-line text-[#c8155f]"></i>
                <span>{owner.totalProperties} Properties Listed</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <i className="ri-calendar-line text-[#c8155f]"></i>
                <span>Member since {owner.memberSince}</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-[#c8155f]"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-900">{owner.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-[#c8155f]"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">{owner.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Properties */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Other Properties by {owner.name.split(' ')[0]}</h3>
        
        <div className="space-y-4">
          {[
            {
              name: 'Elite Residency',
              location: 'Velachery',
              price: 12000,
              image: 'https://readdy.ai/api/search-image?query=Premium%20single%20occupancy%20PG%20room%20with%20modern%20bed%2C%20study%20table%2C%20chair%2C%20wardrobe%2C%20air%20conditioning%2C%20bright%20lighting%2C%20clean%20white%20walls%2C%20wooden%20flooring%2C%20contemporary%20design%2C%20professional%20photography&width=400&height=300&seq=owner-pg-1&orientation=landscape'
            },
            {
              name: 'Urban Nest PG',
              location: 'OMR',
              price: 9500,
              image: 'https://readdy.ai/api/search-image?query=Contemporary%20double%20sharing%20PG%20accommodation%20with%20twin%20beds%2C%20modern%20furniture%2C%20study%20area%2C%20storage%20space%2C%20clean%20white%20walls%2C%20good%20lighting%2C%20minimalist%20aesthetic%2C%20professional%20photography&width=400&height=300&seq=owner-pg-2&orientation=landscape'
            }
          ].map((property, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-[#c8155f] hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">{property.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{property.location}, Chennai</p>
                <p className="text-lg font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                  ₹{property.price.toLocaleString()}/month
                </p>
              </div>
              <i className="ri-arrow-right-line text-gray-400 text-xl"></i>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#c8155f] hover:text-[#c8155f] transition-all whitespace-nowrap cursor-pointer">
          View All Properties
        </button>
      </div>

      {/* Trust & Safety */}
      <div className="bg-gradient-to-br from-[#c8155f]/5 to-[#041e40]/5 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Trust & Safety</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <i className="ri-shield-check-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Verified Owner</h4>
              <p className="text-sm text-gray-600">Identity and property ownership verified</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-file-list-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Legal Documentation</h4>
              <p className="text-sm text-gray-600">All property documents verified and up to date</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-customer-service-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Support Available</h4>
              <p className="text-sm text-gray-600">24/7 customer support for any concerns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerInfo;

interface Amenity {
  name: string;
  icon: string;
  available: boolean;
}

interface AmenitiesGridProps {
  amenities: Amenity[];
}

const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Amenities & Facilities</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
              amenity.available
                ? 'border-gray-200 hover:border-[#c8155f] hover:shadow-md bg-white'
                : 'border-gray-200 bg-gray-50 opacity-50'
            }`}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              amenity.available ? 'bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10' : 'bg-gray-200'
            }`}>
              <i className={`${amenity.icon} text-xl ${amenity.available ? 'text-[#c8155f]' : 'text-gray-400'}`}></i>
            </div>
            <span className={`font-medium text-sm ${amenity.available ? 'text-gray-900' : 'text-gray-500'}`}>
              {amenity.name}
            </span>
          </div>
        ))}
      </div>

      {/* Additional Features */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <i className="ri-shield-check-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Security</h4>
              <p className="text-sm text-gray-600">24/7 CCTV surveillance, secure entry with biometric access</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-restaurant-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Food Service</h4>
              <p className="text-sm text-gray-600">3 meals daily with vegetarian and non-vegetarian options</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-service-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Housekeeping</h4>
              <p className="text-sm text-gray-600">Daily room cleaning and weekly deep cleaning service</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-customer-service-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
              <p className="text-sm text-gray-600">24/7 on-site caretaker and maintenance support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesGrid;

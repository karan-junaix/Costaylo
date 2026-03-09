interface NearbyPlace {
  name: string;
  distance: string;
  type: string;
  icon: string;
}

interface LocationMapProps {
  address: string;
  coordinates: { lat: number; lng: number };
  nearbyPlaces: NearbyPlace[];
}

const LocationMap = ({ address, coordinates, nearbyPlaces }: LocationMapProps) => {
  /*const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d${coordinates.lng}!3d${coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sin!4v1234567890`;
*/
  const mapUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`;
  return (
    <div className="space-y-6">
      {/* Map */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Location</h2>
          <div className="flex items-start space-x-2 text-gray-700">
            <i className="ri-map-pin-line text-[#c8155f] text-xl mt-0.5"></i>
            <span>{address}</span>
          </div>
        </div>
        <div className="w-full h-96">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
          ></iframe>
        </div>
      </div>

      {/* Nearby Places */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">What's Nearby</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nearbyPlaces.map((place, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border-2 border-gray-200 rounded-lg hover:border-[#c8155f] hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-[#c8155f]/10 to-[#041e40]/10 rounded-full flex-shrink-0">
                <i className={`${place.icon} text-[#c8155f] text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{place.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium">{place.type}</span>
                  <span>•</span>
                  <span>{place.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connectivity Info */}
      <div className="bg-gradient-to-br from-[#c8155f]/5 to-[#041e40]/5 rounded-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Connectivity Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <i className="ri-subway-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Metro Access</h4>
              <p className="text-sm text-gray-600">1.2 km to nearest metro station</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-bus-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Bus Stop</h4>
              <p className="text-sm text-gray-600">200m to main bus route</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <i className="ri-building-line text-[#c8155f] text-xl mt-0.5"></i>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">IT Parks</h4>
              <p className="text-sm text-gray-600">3-5 km to major tech hubs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

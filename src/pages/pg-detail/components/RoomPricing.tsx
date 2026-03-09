interface RoomType {
  type: string;
  price: number;
  available: boolean;
  inclusions: string[];
}

interface RoomPricingProps {
  roomTypes: RoomType[];
}

const RoomPricing = ({ roomTypes }: RoomPricingProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Room Types & Pricing</h2>
      
      <div className="space-y-4">
        {roomTypes.map((room, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg p-6 transition-all ${
              room.available
                ? 'border-gray-200 hover:border-[#c8155f] hover:shadow-md'
                : 'border-gray-200 bg-gray-50 opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{room.type}</h3>
                  {room.available ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Not Available
                    </span>
                  )}
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
                  ₹{room.price.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/month</span>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="border-t border-gray-200 pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">What's Included:</h4>
              <div className="grid grid-cols-2 gap-3">
                {room.inclusions.map((inclusion, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                    <i className="ri-check-line text-[#c8155f] font-semibold"></i>
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-6 bg-gradient-to-br from-[#c8155f]/5 to-[#041e40]/5 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <i className="ri-information-line text-[#c8155f] text-xl mt-0.5"></i>
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-1">Payment Terms:</p>
            <ul className="space-y-1 text-gray-600">
              <li>• Security deposit: 2 months rent (refundable)</li>
              <li>• Advance payment: 1 month rent</li>
              <li>• Notice period: 1 month</li>
              <li>• Electricity charges: As per actual consumption</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPricing;

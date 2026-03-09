
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

const AddPropertyPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    propertyName: '',
    propertyType: '',
    address: '',
    city: 'Chennai',
    pincode: '',
    landmark: '',
    description: '',
    
    // Room Types
    roomTypes: [
      { type: 'Single Room', available: 0, total: 0 },
      { type: 'Double Sharing', available: 0, total: 0 },
      { type: 'Triple Sharing', available: 0, total: 0 }
    ],
    
    // Pricing
    pricing: {
      singleRoom: '',
      doubleSharing: '',
      tripleSharing: '',
      securityDeposit: '',
      maintenanceCharges: ''
    },
    
    // Amenities
    amenities: [] as string[],
    
    // Photos
    photos: [] as string[],
    
    // Bank Details
    bankDetails: {
      accountName: '',
      accountNumber: '',
      ifscCode: '',
      bankName: '',
      branch: ''
    }
  });

  const amenitiesList = [
    { id: 'wifi', label: 'Wi-Fi', icon: 'ri-wifi-line' },
    { id: 'ac', label: 'AC Rooms', icon: 'ri-temp-cold-line' },
    { id: 'food', label: 'Food Included', icon: 'ri-restaurant-line' },
    { id: 'laundry', label: 'Laundry', icon: 'ri-shirt-line' },
    { id: 'parking', label: 'Parking', icon: 'ri-parking-box-line' },
    { id: 'gym', label: 'Gym', icon: 'ri-run-line' },
    { id: 'cctv', label: 'CCTV', icon: 'ri-camera-line' },
    { id: 'power', label: 'Power Backup', icon: 'ri-flashlight-line' },
    { id: 'water', label: '24/7 Water', icon: 'ri-drop-line' },
    { id: 'housekeeping', label: 'Housekeeping', icon: 'ri-broom-line' },
    { id: 'tv', label: 'TV', icon: 'ri-tv-line' },
    { id: 'fridge', label: 'Refrigerator', icon: 'ri-fridge-line' }
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoomTypeChange = (index: number, field: string, value: number) => {
    const newRoomTypes = [...formData.roomTypes];
    newRoomTypes[index] = { ...newRoomTypes[index], [field]: value };
    setFormData(prev => ({ ...prev, roomTypes: newRoomTypes }));
  };

  const handlePricingChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      pricing: { ...prev.pricing, [field]: value }
    }));
  };

  const handleAmenityToggle = (amenityId: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(a => a !== amenityId)
        : [...prev.amenities, amenityId]
    }));
  };

  const handleBankDetailsChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      bankDetails: { ...prev.bankDetails, [field]: value }
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate('/owner-dashboard/properties');
  };

  const steps = [
    { id: 1, label: 'Basic Info', icon: 'ri-information-line' },
    { id: 2, label: 'Room Types', icon: 'ri-door-line' },
    { id: 3, label: 'Pricing', icon: 'ri-money-rupee-circle-line' },
    { id: 4, label: 'Amenities', icon: 'ri-list-check' },
    { id: 5, label: 'Photos', icon: 'ri-image-line' },
    { id: 6, label: 'Bank Details', icon: 'ri-bank-card-line' }
  ];

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Property</h1>
          <p className="text-gray-600">Fill in the details to list your PG/Hostel</p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full font-bold transition-all cursor-pointer ${
                      currentStep === step.id
                        ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg scale-110'
                        : currentStep > step.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                    onClick={() => setCurrentStep(step.id)}
                  >
                    <i className={`${step.icon} text-xl`}></i>
                  </div>
                  <p className={`text-xs mt-2 font-medium ${
                    currentStep === step.id ? 'text-[#c8155f]' : 'text-gray-600'
                  }`}>
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-1 flex-1 mx-2 rounded ${
                    currentStep > step.id ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.propertyName}
                    onChange={(e) => handleInputChange('propertyName', e.target.value)}
                    placeholder="e.g., Sunshine PG - Velachery"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  >
                    <option value="">Select Type</option>
                    <option value="boys">Boys PG</option>
                    <option value="girls">Girls PG</option>
                    <option value="coed">Co-ed PG</option>
                    <option value="hostel">Hostel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter complete address"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="600001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Landmark
                  </label>
                  <input
                    type="text"
                    value={formData.landmark}
                    onChange={(e) => handleInputChange('landmark', e.target.value)}
                    placeholder="Near Metro Station"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Property Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your property, facilities, rules, etc."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm resize-none"
                ></textarea>
              </div>
            </div>
          )}

          {/* Step 2: Room Types */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Types & Availability</h2>
              
              {formData.roomTypes.map((room, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-door-line mr-2 text-[#c8155f]"></i>
                    {room.type}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Total Rooms
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={room.total}
                        onChange={(e) => handleRoomTypeChange(index, 'total', parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Available Rooms
                      </label>
                      <input
                        type="number"
                        min="0"
                        max={room.total}
                        value={room.available}
                        onChange={(e) => handleRoomTypeChange(index, 'available', parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Pricing */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Single Room (per month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={formData.pricing.singleRoom}
                      onChange={(e) => handlePricingChange('singleRoom', e.target.value.replace(/\D/g, ''))}
                      placeholder="18000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Double Sharing (per month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={formData.pricing.doubleSharing}
                      onChange={(e) => handlePricingChange('doubleSharing', e.target.value.replace(/\D/g, ''))}
                      placeholder="12000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Triple Sharing (per month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={formData.pricing.tripleSharing}
                      onChange={(e) => handlePricingChange('tripleSharing', e.target.value.replace(/\D/g, ''))}
                      placeholder="9000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Security Deposit
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={formData.pricing.securityDeposit}
                      onChange={(e) => handlePricingChange('securityDeposit', e.target.value.replace(/\D/g, ''))}
                      placeholder="10000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Maintenance Charges (per month)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={formData.pricing.maintenanceCharges}
                      onChange={(e) => handlePricingChange('maintenanceCharges', e.target.value.replace(/\D/g, ''))}
                      placeholder="1000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Amenities */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Facilities</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenitiesList.map((amenity) => (
                  <button
                    key={amenity.id}
                    onClick={() => handleAmenityToggle(amenity.id)}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      formData.amenities.includes(amenity.id)
                        ? 'border-[#c8155f] bg-[#c8155f]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                        formData.amenities.includes(amenity.id)
                          ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <i className={`${amenity.icon} text-2xl`}></i>
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center">{amenity.label}</span>
                      {formData.amenities.includes(amenity.id) && (
                        <i className="ri-checkbox-circle-fill text-[#c8155f] text-lg"></i>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Photos */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Property Photos</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#c8155f] transition-colors cursor-pointer">
                <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-full mx-auto mb-4">
                  <i className="ri-image-add-line text-4xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Upload Property Photos</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop images here, or click to browse
                </p>
                <button className="bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-upload-2-line mr-2"></i>
                  Choose Files
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  Supported formats: JPG, PNG, WEBP (Max 5MB each)
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#c8155f]/10 to-[#041e40]/10 rounded-lg p-6 border border-[#c8155f]/20">
                <div className="flex items-start space-x-3">
                  <i className="ri-lightbulb-line text-[#c8155f] text-2xl flex-shrink-0"></i>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-2">Photo Tips:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Upload at least 5-10 high-quality photos</li>
                      <li>• Include exterior, rooms, common areas, and amenities</li>
                      <li>• Use good lighting and clear angles</li>
                      <li>• First photo will be used as the main display image</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Bank Details */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bank Details for Payouts</h2>
              
              <div className="bg-gradient-to-r from-[#c8155f]/10 to-[#041e40]/10 rounded-lg p-6 border border-[#c8155f]/20 mb-6">
                <div className="flex items-start space-x-3">
                  <i className="ri-shield-check-line text-[#c8155f] text-2xl flex-shrink-0"></i>
                  <div className="text-sm text-gray-700">
                    <p className="font-semibold mb-1">Secure Payment Processing</p>
                    <p className="text-xs">Your bank details are encrypted and securely stored. We use this information only for processing your rental payments.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Holder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.bankDetails.accountName}
                    onChange={(e) => handleBankDetailsChange('accountName', e.target.value)}
                    placeholder="As per bank records"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.bankDetails.accountNumber}
                    onChange={(e) => handleBankDetailsChange('accountNumber', e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter account number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.bankDetails.ifscCode}
                    onChange={(e) => handleBankDetailsChange('ifscCode', e.target.value.toUpperCase())}
                    placeholder="e.g., SBIN0001234"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.bankDetails.bankName}
                    onChange={(e) => handleBankDetailsChange('bankName', e.target.value)}
                    placeholder="e.g., State Bank of India"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Branch Name
                  </label>
                  <input
                    type="text"
                    value={formData.bankDetails.branch}
                    onChange={(e) => handleBankDetailsChange('branch', e.target.value)}
                    placeholder="e.g., Velachery Branch"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Previous
            </button>

            <div className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </div>

            {currentStep < steps.length ? (
              <button
                onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                className="px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                Next
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-check-line mr-2"></i>
                Submit Property
              </button>
            )}
          </div>
        </div>
      </div>
    </OwnerDashboardLayout>
  );
};

export default AddPropertyPage;

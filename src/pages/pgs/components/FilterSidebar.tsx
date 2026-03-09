
import { useState } from 'react';

interface Filters {
  locations: string[];
  budget: [number, number];
  occupancy: string[];
  gender: string[];
  amenities: string[];
  propertyType: string[];
  moveInDate: string;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onReset: () => void;
}

const FilterSidebar = ({ filters, onFilterChange, onReset }: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    budget: true,
    occupancy: true,
    gender: true,
    amenities: true,
    propertyType: true,
    moveInDate: true
  });

  const allLocations = [
    'T. Nagar',
    'Velachery',
    'OMR',
    'Guindy',
    'Anna Nagar',
    'Tambaram',
    'Adyar',
    'Porur',
    'Chromepet',
    'Perungudi'
  ];

  const allAmenities = [
    'WiFi',
    'Food',
    'Laundry',
    'AC',
    'Housekeeping',
    'Attached bathroom',
    'CCTV',
    'Parking'
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleLocationToggle = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location];
    onFilterChange({ ...filters, locations: newLocations });
  };

  const handleBudgetChange = (value: number, isMax: boolean) => {
    if (isMax) {
      onFilterChange({ ...filters, budget: [filters.budget[0], value] });
    } else {
      onFilterChange({ ...filters, budget: [value, filters.budget[1]] });
    }
  };

  const handleOccupancyToggle = (occupancy: string) => {
    const newOccupancy = filters.occupancy.includes(occupancy)
      ? filters.occupancy.filter(o => o !== occupancy)
      : [...filters.occupancy, occupancy];
    onFilterChange({ ...filters, occupancy: newOccupancy });
  };

  const handleGenderToggle = (gender: string) => {
    const newGender = filters.gender.includes(gender)
      ? filters.gender.filter(g => g !== gender)
      : [...filters.gender, gender];
    onFilterChange({ ...filters, gender: newGender });
  };

  const handleAmenityToggle = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    onFilterChange({ ...filters, amenities: newAmenities });
  };

  const handlePropertyTypeToggle = (type: string) => {
    const newTypes = filters.propertyType.includes(type)
      ? filters.propertyType.filter(t => t !== type)
      : [...filters.propertyType, type];
    onFilterChange({ ...filters, propertyType: newTypes });
  };

  const activeFiltersCount = 
    filters.locations.length +
    filters.occupancy.length +
    filters.gender.length +
    filters.amenities.length +
    filters.propertyType.length +
    (filters.moveInDate ? 1 : 0) +
    (filters.budget[0] !== 3000 || filters.budget[1] !== 25000 ? 1 : 0);

  return (
    <div className="bg-white rounded-lg shadow-sm sticky top-24">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-gray-900">Filters</h3>
          {activeFiltersCount > 0 && (
            <button
              onClick={onReset}
              className="text-sm text-[#c8155f] hover:text-[#041e40] font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[calc(100vh-150px)] overflow-y-auto">
        {/* Location Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('location')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Location</span>
            <i className={`ri-arrow-${expandedSections.location ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.location && (
            <div className="px-4 pb-4 space-y-2">
              {allLocations.map((location) => (
                <label
                  key={location}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.locations.includes(location)}
                    onChange={() => handleLocationToggle(location)}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{location}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Budget Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('budget')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Budget</span>
            <i className={`ri-arrow-${expandedSections.budget ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.budget && (
            <div className="px-4 pb-4 space-y-4">
              <div className="space-y-2">
                <input
                  type="range"
                  min="3000"
                  max="25000"
                  step="500"
                  value={filters.budget[1]}
                  onChange={(e) => handleBudgetChange(parseInt(e.target.value), true)}
                  className="w-full accent-[#c8155f] cursor-pointer"
                />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">₹{filters.budget[0].toLocaleString()}</span>
                  <span className="font-semibold text-gray-900">₹{filters.budget[1].toLocaleString()}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onFilterChange({ ...filters, budget: [3000, 8000] })}
                  className={`px-3 py-2 text-xs rounded-md border transition-all cursor-pointer whitespace-nowrap ${
                    filters.budget[0] === 3000 && filters.budget[1] === 8000
                      ? 'border-[#c8155f] bg-[#c8155f]/5 text-[#c8155f] font-medium'
                      : 'border-gray-300 text-gray-700 hover:border-[#c8155f]'
                  }`}
                >
                  &lt; ₹8k
                </button>
                <button
                  onClick={() => onFilterChange({ ...filters, budget: [8000, 12000] })}
                  className={`px-3 py-2 text-xs rounded-md border transition-all cursor-pointer whitespace-nowrap ${
                    filters.budget[0] === 8000 && filters.budget[1] === 12000
                      ? 'border-[#c8155f] bg-[#c8155f]/5 text-[#c8155f] font-medium'
                      : 'border-gray-300 text-gray-700 hover:border-[#c8155f]'
                  }`}
                >
                  ₹8k - ₹12k
                </button>
                <button
                  onClick={() => onFilterChange({ ...filters, budget: [12000, 18000] })}
                  className={`px-3 py-2 text-xs rounded-md border transition-all cursor-pointer whitespace-nowrap ${
                    filters.budget[0] === 12000 && filters.budget[1] === 18000
                      ? 'border-[#c8155f] bg-[#c8155f]/5 text-[#c8155f] font-medium'
                      : 'border-gray-300 text-gray-700 hover:border-[#c8155f]'
                  }`}
                >
                  ₹12k - ₹18k
                </button>
                <button
                  onClick={() => onFilterChange({ ...filters, budget: [18000, 25000] })}
                  className={`px-3 py-2 text-xs rounded-md border transition-all cursor-pointer whitespace-nowrap ${
                    filters.budget[0] === 18000 && filters.budget[1] === 25000
                      ? 'border-[#c8155f] bg-[#c8155f]/5 text-[#c8155f] font-medium'
                      : 'border-gray-300 text-gray-700 hover:border-[#c8155f]'
                  }`}
                >
                  &gt; ₹18k
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Occupancy Type Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('occupancy')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Occupancy Type</span>
            <i className={`ri-arrow-${expandedSections.occupancy ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.occupancy && (
            <div className="px-4 pb-4 space-y-2">
              {['Single', 'Double', 'Triple', '4+ Sharing'].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.occupancy.includes(type)}
                    onChange={() => handleOccupancyToggle(type)}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{type}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Gender Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('gender')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Gender</span>
            <i className={`ri-arrow-${expandedSections.gender ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.gender && (
            <div className="px-4 pb-4 space-y-2">
              {['Male', 'Female', 'Co-ed'].map((gender) => (
                <label
                  key={gender}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.gender.includes(gender)}
                    onChange={() => handleGenderToggle(gender)}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{gender}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Amenities Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('amenities')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Amenities</span>
            <i className={`ri-arrow-${expandedSections.amenities ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.amenities && (
            <div className="px-4 pb-4 space-y-2">
              {allAmenities.map((amenity) => (
                <label
                  key={amenity}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{amenity}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Property Type Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('propertyType')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Property Type</span>
            <i className={`ri-arrow-${expandedSections.propertyType ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.propertyType && (
            <div className="px-4 pb-4 space-y-2">
              {['PG', 'Co-living', 'Hostel'].map((type) => (
                <label
                  key={type}
                  className="flex items-center space-x-2 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={filters.propertyType.includes(type)}
                    onChange={() => handlePropertyTypeToggle(type)}
                    className="w-4 h-4 text-[#c8155f] border-gray-300 rounded focus:ring-[#c8155f] cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">{type}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Move-in Date Filter */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleSection('moveInDate')}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-900">Move-in Date</span>
            <i className={`ri-arrow-${expandedSections.moveInDate ? 'up' : 'down'}-s-line text-gray-500`}></i>
          </button>
          {expandedSections.moveInDate && (
            <div className="px-4 pb-4">
              <input
                type="date"
                value={filters.moveInDate}
                onChange={(e) => onFilterChange({ ...filters, moveInDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

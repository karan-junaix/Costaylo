import { useState, useEffect } from 'react';
import axios from 'axios';

interface Filters {
  locations: string[];
  budget: [number, number];
  occupancy: number[];
  gender: string[];
  amenities: string[];
  propertyType: number[];
  moveInDate: string;
}

interface Amenity {
  id: number;
  name: string;
  icon: string;
}

interface Option {
  id: number;
  name: string;
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

  // ✅ NEW STATE (Dynamic)
  const [allLocations, setAllLocations] = useState<string[]>([]);
  const [allAmenities, setAllAmenities] = useState<Amenity[]>([]);
  const [occupancyOptions, setOccupancyOptions] = useState<Option[]>([]);
  const [propertyTypeOptions, setPropertyTypeOptions] = useState<Option[]>([]);
  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    fetchFilters();
  }, []);

  const fetchFilters = async () => {
    try {
      const [locRes, amenityRes, occRes, propRes] = await Promise.all([
        axios.get("http://localhost:8000/filters/locations"),
        axios.get("http://localhost:8000/filters/amenities"),
        axios.get("http://localhost:8000/filters/occupancy"),
        axios.get("http://localhost:8000/filters/property-types")
      ]);

      setAllLocations(locRes.data);
      setAllAmenities(amenityRes.data);
      setOccupancyOptions(occRes.data);
      setPropertyTypeOptions(propRes.data);

    } catch (err) {
      console.error("Error fetching filters", err);
    }
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
//Location   
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

  // ✅ OCCUPANCY (FIXED)
  const handleOccupancyToggle = (id: number) => {
    const newData = filters.occupancy.includes(id)
      ? filters.occupancy.filter(o => o !== id)
      : [...filters.occupancy, id];

    onFilterChange({ ...filters, occupancy: newData });
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

   // ✅ PROPERTY TYPE (FIXED)
  const handlePropertyTypeToggle = (id: number) => {
    const newData = filters.propertyType.includes(id)
      ? filters.propertyType.filter(p => p !== id)
      : [...filters.propertyType, id];

    onFilterChange({ ...filters, propertyType: newData });
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
              className="text-sm text-[#c8155f] hover:text-[#041e40] font-medium"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[calc(100vh-150px)] overflow-y-auto">

        {/* ✅ LOCATION (Dynamic) */}
        <div className="border-b">
          <button onClick={() => toggleSection('location')} className="w-full px-4 py-3 flex justify-between">
            Location
          </button>

          {expandedSections.location && (
            <div className="px-4 pb-4 space-y-2">
              {allLocations.map((location) => (
                <label key={location} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filters.locations.includes(location)}
                    onChange={() => handleLocationToggle(location)}
                  />
                  <span>{location}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* ✅ AMENITIES (Dynamic with ICON) */}
        <div className="border-b">
          <button onClick={() => toggleSection('amenities')} className="w-full px-4 py-3 flex justify-between">
            Amenities
          </button>

          {expandedSections.amenities && (
            <div className="px-4 pb-4 space-y-2">
              {allAmenities.map((amenity) => (
                <label key={amenity.id} className="flex items-center space-x-2">

                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity.name)}
                    onChange={() => handleAmenityToggle(amenity.name)}
                  />

                  {/* ✅ ICON FROM DB */}
                  <i className={amenity.icon}></i>

                  <span>{amenity.name}</span>

                </label>
              ))}
            </div>
          )}
        </div>

        {/* KEEP OTHER FILTERS SAME (no change needed) */}
        {/* ✅ BUDGET */}
{/* ✅ BUDGET (INTERACTIVE - OLD STYLE RESTORED) */}
<div className="border-b">
  <button
    onClick={() => toggleSection('budget')}
    className="w-full px-4 py-3 flex justify-between"
  >
    Budget
  </button>

  {expandedSections.budget && (
    <div className="px-4 pb-4 space-y-4">

      {/* RANGE SLIDER */}
      <input
        type="range"
        min={0}
        max={50000}
        step={500}
        value={filters.budget[1]}
        onChange={(e) =>
          handleBudgetChange(Number(e.target.value), true)
        }
        className="w-full"
      />

      {/* MIN / MAX INPUTS */}
      <div className="flex items-center gap-2">

        {/* MIN */}
        <input
          type="number"
          value={filters.budget[0]}
          onChange={(e) =>
            handleBudgetChange(Number(e.target.value), false)
          }
          className="w-1/2 border rounded p-2"
          placeholder="Min"
        />

        <span>-</span>

        {/* MAX */}
        <input
          type="number"
          value={filters.budget[1]}
          onChange={(e) =>
            handleBudgetChange(Number(e.target.value), true)
          }
          className="w-1/2 border rounded p-2"
          placeholder="Max"
        />
      </div>

      {/* DISPLAY */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>₹{filters.budget[0]}</span>
        <span>₹{filters.budget[1]}</span>
      </div>

    </div>
  )}
</div>

{/* OCCUPANCY (DYNAMIC + FIXED) */}
    <div className="border-b">
  <button
    onClick={() => toggleSection('occupancy')}
    className="w-full px-4 py-3 flex justify-between"
  >
    Occupancy
  </button>

  {expandedSections.occupancy && (
    <div className="px-4 pb-4 space-y-2">
      {occupancyOptions.map((opt) => (
        <label key={opt.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.occupancy.includes(opt.id)}
            onChange={() => handleOccupancyToggle(opt.id)}
          />
          <span>{opt.name}</span>
        </label>
      ))}
    </div>
  )}
</div>


{/* ✅ GENDER */}
<div className="border-b">
  <button onClick={() => toggleSection('gender')} className="w-full px-4 py-3 flex justify-between">
    Gender
  </button>

  {expandedSections.gender && (
    <div className="px-4 pb-4 space-y-2">
      {["Male", "Female", "Unisex"].map((g) => (
        <label key={g} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.gender.includes(g)}
            onChange={() => handleGenderToggle(g)}
          />
          <span>{g}</span>
        </label>
      ))}
    </div>
  )}
</div>

 {/* PROPERTY TYPE (DYNAMIC + FIXED) */}
      <div className="border-b">
  <button
    onClick={() => toggleSection('propertyType')}
    className="w-full px-4 py-3 flex justify-between"
  >
    Property Type
  </button>

  {expandedSections.propertyType && (
    <div className="px-4 pb-4 space-y-2">
      {propertyTypeOptions.map((opt) => (
        <label key={opt.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={filters.propertyType.includes(opt.id)}
            onChange={() => handlePropertyTypeToggle(opt.id)}
          />
          <span>{opt.name}</span>
        </label>
      ))}
    </div>
  )}
</div>

{/* ✅ MOVE-IN DATE */}
<div className="border-b">
  <button onClick={() => toggleSection('moveInDate')} className="w-full px-4 py-3 flex justify-between">
    Move-in Date
  </button>

  {expandedSections.moveInDate && (
    <div className="px-4 pb-4">
      <input
        type="date"
        value={filters.moveInDate}
        onChange={(e) =>
          onFilterChange({ ...filters, moveInDate: e.target.value })
        }
        className="border p-2 w-full rounded"
      />
    </div>
  )}
</div>
      </div>
    </div>
  );
};

export default FilterSidebar;
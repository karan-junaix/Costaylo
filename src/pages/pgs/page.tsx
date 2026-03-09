import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';
import PGCard from './components/PGCard';
import FilterSidebar from './components/FilterSidebar';

interface Filters {
  locations: string[];
  budget: [number, number];
  occupancy: string[];
  gender: string[];
  amenities: string[];
  propertyType: string[];
  moveInDate: string;
}

interface PG {
  id: number;
  title: string;
  locality: string;
  description: string;
  starting_price: number;
  gender: string;
  whatsapp_number: string;
}

const PGsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const [filters, setFilters] = useState<Filters>({
    locations: [],
    budget: [0, 50000],
    occupancy: [],
    gender: [],
    amenities: [],
    propertyType: [],
    moveInDate: ''
  });

  const [allPGs, setAllPGs] = useState<PG[]>([]);
  const [filteredPGs, setFilteredPGs] = useState<PG[]>([]);

  // ✅ FETCH FROM BACKEND
  useEffect(() => {
    fetch("http://127.0.0.1:8000/pgs/")
      .then(res => res.json())
      .then(data => {
        console.log("BACKEND DATA:", data);

        const formattedData: PG[] = data.map((pg: any) => ({
          id: pg.id,
          title: pg.title,
          locality: pg.locality,
          description: pg.description,
          starting_price: pg.starting_price,
          gender: pg.gender,
          whatsapp_number: pg.whatsapp_number,
        }));

        setAllPGs(formattedData);
        setFilteredPGs(formattedData);
      })
      .catch(err => console.error("Error fetching PGs:", err));
  }, []);

  // ✅ FILTERING + SORTING
  useEffect(() => {
    let filtered = [...allPGs];

    // Location filter
    if (filters.locations.length > 0) {
      filtered = filtered.filter(pg =>
        filters.locations.includes(pg.locality)
      );
    }

    // Budget filter
    filtered = filtered.filter(pg =>
      pg.starting_price >= filters.budget[0] &&
      pg.starting_price <= filters.budget[1]
    );

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.starting_price - b.starting_price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.starting_price - a.starting_price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredPGs(filtered);
  }, [filters, sortBy, allPGs]);

  const handleResetFilters = () => {
    setFilters({
      locations: [],
      budget: [0, 50000],
      occupancy: [],
      gender: [],
      amenities: [],
      propertyType: [],
      moveInDate: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">PGs</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-6">

          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
            />
          </div>

          {/* Listings */}
          <div className="flex-1">

            {/* Sort */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <span>
                  Showing <b>{filteredPGs.length}</b> results
                </span>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border p-2 rounded"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price Low to High</option>
                  <option value="price-high">Price High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* PG Cards */}
            {filteredPGs.length > 0 ? (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
                : 'space-y-6'}>
                {filteredPGs.map((pg) => (
                  <PGCard
                    key={pg.id}
                    pg={pg}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No PGs Found</h3>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PGsPage;
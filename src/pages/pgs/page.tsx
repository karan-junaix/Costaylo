import { useState, useEffect } from "react";
import { Link, useSearchParams,useNavigate } from "react-router-dom";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import WhatsAppButton from "../../components/feature/WhatsAppButton";
import PGCard from "./components/PGCard";
import FilterSidebar from "./components/FilterSidebar";

interface Filters {
  locations: string[];
  budget: [number, number];
  occupancy: number[];
  gender: string[];
  amenities: string[];
  propertyType: number[];
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
  images?: { image_url: string }[];
}

const PGsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState<Filters>({
    locations: [],
    budget: [3000, 25000],
    occupancy: [],
    gender: [],
    amenities: [],
    propertyType: [],
    moveInDate: "",
  });

  const [filteredPGs, setFilteredPGs] = useState<PG[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sortBy, setSortBy] = useState("popularity");

  const limit = 10;

  const [isInitialized, setIsInitialized] = useState(false);

  // ✅ STEP 1: READ URL PARAMS FIRST
  useEffect(() => {
    const newFilters: Filters = {
      locations: [],
      budget: [3000, 25000],
      occupancy: [],
      gender: [],
      amenities: [],
      propertyType: [],
      moveInDate: "",
    };

const locations = searchParams.getAll("locations");

if (locations.length > 0) {
  newFilters.locations = locations.map(loc => decodeURIComponent(loc.replace(/\+/g, " ")));
} else {
  const singleLocation = searchParams.get("locations");
  if (singleLocation) {
    newFilters.locations = [
      decodeURIComponent(singleLocation.replace(/\+/g, " "))
    ];
  }
}
    const min = searchParams.get("min_budget");
    const max = searchParams.get("max_budget");

    if (min && max) {
      newFilters.budget = [Number(min), Number(max)];
    }

    const occ = searchParams.get("occupancy");
    if (occ) {
      const map: Record<string, number> = {
        single: 1,
        double: 2,
        triple: 3,
        four: 4,
      };
      if (map[occ]) newFilters.occupancy = [map[occ]];
    }

    setFilters(newFilters);
    setIsInitialized(true);
  }, []);

  // ✅ STEP 2: FETCH AFTER FILTERS READY
  useEffect(() => {
    if (!isInitialized) return;
    fetchPGs();
  }, [filters, sortBy, page, isInitialized]);

  useEffect(() => {
  if (!isInitialized) return;

  const params = new URLSearchParams();

  filters.locations.forEach((loc) => params.append("locations", loc));
  params.append("min_budget", filters.budget[0].toString());
  params.append("max_budget", filters.budget[1].toString());

  navigate(`/pgs?${params.toString()}`, { replace: true });

}, [filters, page]);

  // ✅ RESET PAGE WHEN FILTER CHANGES
  useEffect(() => {
    setPage(1);
  }, [filters, sortBy]);

  const fetchPGs = async () => {
    try {
      const params = new URLSearchParams();

      filters.locations.forEach((loc) => params.append("locations", loc));
      filters.amenities.forEach((a) => params.append("amenities", a));
      filters.gender.forEach((g) => params.append("gender", g));
      filters.occupancy.forEach((o) =>
        params.append("occupancy", o.toString())
      );
      filters.propertyType.forEach((p) =>
        params.append("property_type", p.toString())
      );

      params.append("min_budget", filters.budget[0].toString());
      params.append("max_budget", filters.budget[1].toString());

      params.append("page", page.toString());
      params.append("limit", limit.toString());

      const res = await fetch(
        `http://127.0.0.1:8000/pgs/?${params.toString()}`
      );
      const data = await res.json();

      setTotal(data.total || data.length);

      let formatted: PG[] = (data.data || data).map((pg: any) => ({
        id: pg.id,
        title: pg.title,
        locality: pg.locality,
        description: pg.description,
        starting_price: pg.starting_price,
        gender: pg.gender,
        whatsapp_number: pg.whatsapp_number,
        images: pg.images || [],
      }));

      // SORT
      if (sortBy === "price-low")
        formatted.sort((a, b) => a.starting_price - b.starting_price);
      if (sortBy === "price-high")
        formatted.sort((a, b) => b.starting_price - a.starting_price);
      if (sortBy === "newest") formatted.sort((a, b) => b.id - a.id);

      if (page === 1) setFilteredPGs(formatted);
      else setFilteredPGs((prev) => [...prev, ...formatted]);
    } catch (err) {
      console.error(err);
    }
  };

  const loadMore = () => setPage((prev) => prev + 1);

  const handleResetFilters = () => {
    setFilters({
      locations: [],
      budget: [3000, 25000],
      occupancy: [],
      gender: [],
      amenities: [],
      propertyType: [],
      moveInDate: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-white border-b pt-24">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/">Home</Link> / <b>PGs</b>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        {/* Sidebar */}
        <div className="w-80">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            onReset={handleResetFilters}
          />
        </div>

        {/* Listings */}
        <div className="flex-1">
          <div className="bg-white p-4 mb-6 flex justify-between">
            <span>
              Showing <b>{filteredPGs.length}</b> of {total}
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border p-2"
            >
              <option value="popularity">Popularity</option>
              <option value="price-low">Price Low</option>
              <option value="price-high">Price High</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          {filteredPGs.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredPGs.map((pg) => (
                  <PGCard key={pg.id} pg={pg} viewMode="grid" />
                ))}
              </div>

              {filteredPGs.length < total && (
                <div className="text-center mt-6">
                  <button
                    onClick={loadMore}
                    className="px-6 py-2 bg-blue-500 text-white rounded"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center p-10">
              <h3>No PGs Found</h3>
              <button onClick={handleResetFilters}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PGsPage;
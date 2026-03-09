import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import WhatsAppButton from "../../components/feature/WhatsAppButton";

import ImageGallery from "./components/ImageGallery";
import ContactBox from "./components/ContactBox";
import RoomPricing from "./components/RoomPricing";
import AmenitiesGrid from "./components/AmenitiesGrid";
import ReviewsSection from "./components/ReviewsSection";
import LocationMap from "./components/LocationMap";
import NearbyProperties from "./components/NearbyProperties";
/* ================================
   SCALABLE MASTER TYPE
================================ */

interface PGDetailResponse {
  id: number;
  title: string;
  description: string;
  locality: string;
  gender: string;
  starting_price: number;
  is_available: boolean;

/*location details*/
  latitude: number;
  longitude: number;

  images: string[];
  amenities: {
    name: string;
    icon: string;
    available: boolean;
  }[];

  room_types: {
    type: string;
    price: number;
    available: boolean;
    inclusions: string[];
  }[];

  nearby_places: {
    name: string;
    distance: string;
    type: string;
    icon: string;
  }[];
}

/* ================================
   PAGE COMPONENT
================================ */

const PGDetailPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [pgData, setPgData] = useState<PGDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://127.0.0.1:8000/pgs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const mappedData: PGDetailResponse = {
          id: data.id,
          title: data.title,
          description: data.description,
          locality: data.locality,
          gender: data.gender,
          starting_price: data.starting_price,
          is_available: data.is_available,
          latitude: data.latitude,
          longitude: data.longitude,

          images: data.images ?? [
            "https://via.placeholder.com/1200x600",
          ],

             amenities: data.amenities ?? [
            { name: "WiFi", icon: "ri-wifi-line", available: true },
            { name: "AC", icon: "ri-snowflake-line", available: true },
            { name: "Laundry", icon: "ri-t-shirt-line", available: true },
            { name: "Power Backup", icon: "ri-flashlight-line", available: true },
          ],

          room_types: data.room_types ?? [
            {
              type: "Standard Room",
              price: data.starting_price,
              available: data.is_available,
              inclusions: ["WiFi", "Food", "Laundry"],
            },
          ],
          nearby_places: data.nearby_places ?? [],
        };

        setPgData(mappedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching PG:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!pgData) {
    return <div className="pt-32 text-center">PG Not Found</div>;
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "pricing", label: "Room Types & Pricing" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: "Reviews" },
    { id: "location", label: "Location" },
    { id: "nearby", label: "Nearby Properties" },  // ✅ Added Reviews Tab
  ];
  const isValidCoords =
  typeof pgData.latitude === "number" &&
  typeof pgData.longitude === "number" &&
  !isNaN(pgData.latitude) &&
  !isNaN(pgData.longitude);

console.log("NearbyProperties lat:", pgData.latitude, "lng:", pgData.longitude);



  return (
    <div className="min-h-screen bg-gray-50">
        // Debug: log latitude and longitude
        console.log('NearbyProperties lat:', pgData.latitude, 'lng:', pgData.longitude);

        // Prevent NearbyProperties call if lat/lng are invalid
        const isValidCoords = typeof pgData.latitude === 'number' && typeof pgData.longitude === 'number' && !isNaN(pgData.latitude) && !isNaN(pgData.longitude);
      <Header />

      {/* ================= Title Section ================= */}
      <div className="bg-white border-b pt-24">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Link to="/">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">
              {pgData.title}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {pgData.title}
          </h1>
          <div className="text-gray-600">
            {pgData.locality}
          </div>
        </div>
      </div>

      {/* ================= Image Gallery ================= */}
      <ImageGallery
        images={pgData.images}
        name={pgData.title}
      />

      {/* ================= Main Content ================= */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">

          {/* LEFT SECTION */}
          <div className="flex-1">

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 font-semibold text-sm ${
                      activeTab === tab.id
                        ? "text-[#c8155f] border-b-2 border-[#c8155f]"
                        : "text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">
                  About This Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {pgData.description}
                </p>
              </div>
            )}

            {/* PRICING */}
            {activeTab === "pricing" && (
              <RoomPricing roomTypes={pgData.room_types} />
            )}

            {/* AMENITIES */}
            {activeTab === "amenities" && (
              <AmenitiesGrid amenities={pgData.amenities} />
            )}
            {/* LOCATION */}
            {activeTab === "location" && (
            <LocationMap
              address={pgData.locality}
              coordinates={{
                lat: pgData.latitude,
                lng: pgData.longitude,
              }}
              nearbyPlaces={pgData.nearby_places}
            />

            
          ) }

          

            {/* ✅ REVIEWS TAB */}
            {activeTab === "reviews" && (
              <ReviewsSection pgId={pgData.id} />
            )}
          
          {activeTab === "nearby" && (
         <NearbyProperties
         latitude={pgData.latitude}
         longitude={pgData.longitude}
         />
        )}
          </div>

          {/* RIGHT SECTION */}
          <div className="w-96 flex-shrink-0">
            <ContactBox
              pgName={pgData.title}
              startingPrice={pgData.starting_price}
              pgId={pgData.id}
            />
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PGDetailPage;
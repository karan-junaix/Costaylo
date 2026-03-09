import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface NearbyPG {
  id: number;
  title: string;
  locality: string;
  starting_price: number;
}

interface Props {
  latitude: number;
  longitude: number;
}

const NearbyProperties = ({ latitude, longitude }: Props) => {
  const [pgs, setPgs] = useState<NearbyPG[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/pgs/nearby?lat=${latitude}&lng=${longitude}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPgs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching nearby PGs:", err);
        setLoading(false);
      });
  }, [latitude, longitude]);

  if (loading) {
    return <div className="text-center py-6">Loading nearby properties...</div>;
  }

  if (pgs.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Nearby Properties</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pgs.map((pg) => (
          <Link
            key={pg.id}
            to={`/pg/${pg.id}`}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg">{pg.title}</h3>

            <p className="text-gray-500 text-sm">{pg.locality}</p>

            <p className="text-pink-600 font-semibold mt-2">
              ₹{pg.starting_price} / month
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NearbyProperties;
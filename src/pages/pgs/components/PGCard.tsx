import { useState } from 'react';
import { Link } from 'react-router-dom';
import placeholder from "@/assets/placeholder.jpeg";

interface PGCardProps {
  pg: {
    id: number;
    title: string;
    locality: string;
    description: string;
    starting_price: number;
    gender: string;
    whatsapp_number: string;
    images?: { image_url: string }[];
  };
  viewMode: 'grid' | 'list';
}
const FALLBACK_IMAGE = placeholder;
const PGCard = ({ pg, viewMode }: PGCardProps) => {

  const [isHovered, setIsHovered] = useState(false);
  
   // ✅ IMAGE STATE (handles no image + broken image)
  const [imgSrc, setImgSrc] = useState(
    pg.images?.[0]?.image_url
      ? `http://localhost:8000/${pg.images[0].image_url}`
      : FALLBACK_IMAGE
  );

  const handleImageError = () => {
    setImgSrc(FALLBACK_IMAGE);
  };

  const handleEnquire = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const message = `Hi, I'm interested in ${pg.title} at ${pg.locality}`;

    window.open(
      `https://wa.me/91${pg.whatsapp_number}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };


  if (viewMode === 'list') {

    return (

      <Link
        to={`/pg/${pg.id}`}
        className="block bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div className="flex flex-col md:flex-row">

          {/* IMAGE */}
          <div className="w-full md:w-80 h-64 overflow-hidden">
            <img src={imgSrc}
              onError={handleImageError}
              alt={pg.title}
              className="w-full h-full object-cover"
            />
            
          </div>

          <div className="flex-1 p-6">

            <div className="flex justify-between items-start mb-3">

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {pg.title}
                </h3>

                <div className="text-gray-600 text-sm">
                  {pg.locality}
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-[#c8155f]">
                  ₹{pg.starting_price.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  per month
                </div>
              </div>

            </div>

            <p className="text-sm text-gray-600 mb-4">
              {pg.description}
            </p>

            <div className="mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {pg.gender}
              </span>
            </div>

            <div className="flex gap-3">

              <Link
                to={`/pg/${pg.id}`}
                className="flex-1 px-4 py-2 bg-[#c8155f] text-white rounded-lg font-semibold text-center"
              >
                View Details
              </Link>

              <button
                onClick={handleEnquire}
                className="px-6 py-2 border-2 border-[#c8155f] text-[#c8155f] rounded-lg font-semibold hover:bg-[#c8155f] hover:text-white transition-all"
              >
                Enquire
              </button>

            </div>

          </div>

        </div>

      </Link>

    );
  }

  return (

    <Link
      to={`/pg/${pg.id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* IMAGE */}
      <div className="w-full h-56 overflow-hidden">
        <img
         src={imgSrc}
         onError={handleImageError}
         alt={pg.title}
         className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">

        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {pg.title}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          {pg.locality}
        </p>

        <p className="text-sm text-gray-600 mb-3">
          {pg.description}
        </p>

        <div className="mb-3">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
            {pg.gender}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">

          <div>
            <div className="text-xl font-bold text-[#c8155f]">
              ₹{pg.starting_price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">
              per month
            </div>
          </div>

          <button
            onClick={handleEnquire}
            className="px-4 py-2 border-2 border-[#c8155f] text-[#c8155f] rounded-lg font-semibold text-sm hover:bg-[#c8155f] hover:text-white transition-all"
          >
            Enquire
          </button>

        </div>

      </div>

    </Link>

  );
};

export default PGCard;
        
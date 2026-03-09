import { Link } from 'react-router-dom';

const TopLocalities = () => {
  const localities = [
    {
      name: 'T. Nagar',
      properties: 342,
      image: 'https://readdy.ai/api/search-image?query=Vibrant%20urban%20neighborhood%20street%20view%20in%20T%20Nagar%20Chennai%20with%20modern%20buildings%2C%20busy%20commercial%20area%2C%20clean%20streets%2C%20shops%20and%20establishments%2C%20bright%20daylight%2C%20professional%20photography%2C%20clear%20blue%20sky%2C%20bustling%20city%20atmosphere%2C%20contemporary%20architecture&width=600&height=400&seq=locality-001&orientation=landscape',
      slug: 't-nagar'
    },
    {
      name: 'Velachery',
      properties: 289,
      image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20area%20in%20Velachery%20Chennai%20with%20apartment%20buildings%2C%20tree-lined%20streets%2C%20clean%20neighborhood%2C%20contemporary%20architecture%2C%20bright%20natural%20lighting%2C%20professional%20photography%2C%20peaceful%20suburban%20atmosphere%2C%20well-maintained%20infrastructure&width=600&height=400&seq=locality-002&orientation=landscape',
      slug: 'velachery'
    },
    {
      name: 'OMR',
      properties: 456,
      image: 'https://readdy.ai/api/search-image?query=IT%20corridor%20Old%20Mahabalipuram%20Road%20OMR%20Chennai%20with%20modern%20tech%20parks%2C%20wide%20roads%2C%20contemporary%20buildings%2C%20professional%20photography%2C%20bright%20daylight%2C%20clean%20urban%20landscape%2C%20business%20district%20atmosphere%2C%20glass%20facade%20buildings&width=600&height=400&seq=locality-003&orientation=landscape',
      slug: 'omr'
    },
    {
      name: 'Guindy',
      properties: 198,
      image: 'https://readdy.ai/api/search-image?query=Guindy%20Chennai%20residential%20and%20commercial%20area%20with%20modern%20buildings%2C%20green%20spaces%2C%20clean%20streets%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20urban%20development%2C%20contemporary%20architecture%2C%20well-planned%20neighborhood&width=600&height=400&seq=locality-004&orientation=landscape',
      slug: 'guindy'
    },
    {
      name: 'Anna Nagar',
      properties: 267,
      image: 'https://readdy.ai/api/search-image?query=Anna%20Nagar%20Chennai%20upscale%20residential%20area%20with%20tree-lined%20avenues%2C%20modern%20apartments%2C%20clean%20neighborhood%2C%20professional%20photography%2C%20bright%20daylight%2C%20peaceful%20atmosphere%2C%20well-maintained%20streets%2C%20contemporary%20urban%20living&width=600&height=400&seq=locality-005&orientation=landscape',
      slug: 'anna-nagar'
    },
    {
      name: 'Tambaram',
      properties: 223,
      image: 'https://readdy.ai/api/search-image?query=Tambaram%20Chennai%20suburban%20area%20with%20residential%20buildings%2C%20railway%20connectivity%2C%20clean%20streets%2C%20professional%20photography%2C%20bright%20natural%20lighting%2C%20developing%20neighborhood%2C%20contemporary%20architecture%2C%20accessible%20location&width=600&height=400&seq=locality-006&orientation=landscape',
      slug: 'tambaram'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Localities in Chennai
          </h2>
          <p className="text-lg text-gray-600">
            Explore PG accommodations in the most sought-after areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localities.map((locality) => (
            <Link
              key={locality.slug}
              to={`/locality/${locality.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative w-full h-64">
                <img
                  src={locality.image}
                  alt={locality.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Property Count Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-sm font-semibold text-gray-800">
                  {locality.properties} PGs
                </span>
              </div>

              {/* Locality Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {locality.name}
                </h3>
                <div className="flex items-center text-white/90 text-sm">
                  <i className="ri-map-pin-line mr-1"></i>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c8155f]/80 to-[#041e40]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <i className="ri-arrow-right-circle-line text-5xl mb-2"></i>
                  <p className="font-semibold">Explore PGs</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopLocalities;

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Verified Listings',
      description: 'Every PG is personally verified by our team to ensure quality and authenticity',
      gradient: 'from-[#c8155f] to-[#041e40]'
    },
    {
      icon: 'ri-camera-line',
      title: 'HD Photos & Virtual Tours',
      description: 'High-quality images and 360° virtual tours to help you make informed decisions',
      gradient: 'from-[#041e40] to-[#c8155f]'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any queries or concerns',
      gradient: 'from-[#c8155f] to-[#041e40]'
    },
    {
      icon: 'ri-star-line',
      title: 'User Reviews',
      description: 'Genuine reviews from real residents to help you choose the perfect PG',
      gradient: 'from-[#041e40] to-[#c8155f]'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make finding your perfect PG accommodation simple, safe, and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 flex justify-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <i className={`${feature.icon} text-4xl text-white`}></i>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-br from-[#c8155f]/5 to-[#041e40]/5 rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">2,500+</div>
              <div className="text-gray-600 font-medium">Verified Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Residents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600 font-medium">Localities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

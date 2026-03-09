import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'About Us - Chennai PG Finder | Your Trusted PG Accommodation Partner';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Chennai PG Finder - your trusted partner for finding verified PG accommodations in Chennai. We connect students and professionals with quality paying guest facilities across the city.');
    }
  }, []);

  const stats = [
    { icon: 'ri-home-4-line', value: '500+', label: 'Verified Properties' },
    { icon: 'ri-user-heart-line', value: '10,000+', label: 'Happy Residents' },
    { icon: 'ri-map-pin-line', value: '50+', label: 'Localities Covered' },
    { icon: 'ri-star-line', value: '4.8/5', label: 'Average Rating' }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust & Safety',
      description: 'Every property is personally verified by our team to ensure quality and safety standards.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to help you with any queries or concerns.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Transparent Pricing',
      description: 'No hidden charges. What you see is what you pay. Clear pricing for all properties.'
    },
    {
      icon: 'ri-user-smile-line',
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go the extra mile to ensure you find your perfect home.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20business%20executive%20in%20formal%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20photography%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20business%20portrait&width=400&height=400&seq=team-001&orientation=squarish',
      description: 'With 10+ years in real estate, Rajesh founded PG Finder to revolutionize student accommodation.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20business%20executive%20in%20formal%20attire%2C%20warm%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20photography%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20business%20portrait&width=400&height=400&seq=team-002&orientation=squarish',
      description: 'Priya ensures every property meets our high standards and manages our verification process.'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20tech%20professional%20in%20smart%20casual%20attire%2C%20friendly%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20photography%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20business%20portrait&width=400&height=400&seq=team-003&orientation=squarish',
      description: 'Amit leads our tech team, building innovative solutions to make PG hunting seamless.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Customer Success Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20customer%20service%20executive%20in%20business%20attire%2C%20welcoming%20smile%2C%20modern%20office%20background%2C%20corporate%20headshot%20photography%2C%20clean%20simple%20background%2C%20professional%20lighting%2C%20business%20portrait&width=400&height=400&seq=team-004&orientation=squarish',
      description: 'Sneha ensures every customer has an exceptional experience from search to move-in.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started with a vision to simplify PG hunting in Chennai' },
    { year: '2021', title: '100+ Properties', description: 'Reached our first major milestone of verified listings' },
    { year: '2022', title: '5,000 Residents', description: 'Helped thousands find their perfect accommodation' },
    { year: '2023', title: 'Expansion', description: 'Expanded to cover 50+ localities across Chennai' },
    { year: '2024', title: 'Innovation', description: 'Launched advanced search and virtual tours' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20collaborative%20workspace%20with%20diverse%20team%20working%20together%2C%20bright%20natural%20lighting%2C%20contemporary%20office%20interior%2C%20professional%20business%20environment%2C%20teamwork%20atmosphere%2C%20clean%20minimalist%20design%2C%20warm%20welcoming%20ambiance&width=1920&height=600&seq=about-hero-001&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Chennai PG Finder
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make finding quality PG accommodations simple, safe, and stress-free for students and professionals across Chennai.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl mb-4">
                  <i className={`${stat.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Chennai PG Finder was born out of a personal struggle. Our founder, Rajesh Kumar, experienced firsthand the challenges of finding safe, affordable, and quality PG accommodations when he moved to Chennai for his studies.
                </p>
                <p>
                  After spending weeks visiting countless properties, dealing with misleading listings, and facing unexpected costs, he realized there had to be a better way. That's when the idea for Chennai PG Finder was born.
                </p>
                <p>
                  Today, we've helped over 10,000 students and professionals find their perfect home away from home. Every property on our platform is personally verified, every price is transparent, and every resident is supported by our dedicated team.
                </p>
                <p>
                  We're not just a listing platform – we're your trusted partner in finding a place where you can focus on what matters most: your studies, your career, and your dreams.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20comfortable%20PG%20accommodation%20common%20area%20with%20students%20studying%20and%20relaxing%20together%2C%20bright%20natural%20lighting%2C%20contemporary%20interior%20design%2C%20friendly%20atmosphere%2C%20clean%20organized%20space%2C%20welcoming%20environment&width=800&height=600&seq=about-story-001&orientation=landscape"
                  alt="Our Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl mb-6">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in our growth story</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#c8155f] to-[#041e40]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-[#c8155f] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full border-4 border-white shadow-lg z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to make your PG search effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-sm font-semibold text-[#c8155f] mb-3">{member.role}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c8155f] to-[#041e40]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Find Your Perfect PG?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy residents who found their ideal accommodation through Chennai PG Finder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pgs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-search-line text-xl mr-2"></i>
              Browse Properties
            </a>
            <a
              href="/list-property"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-home-4-line text-xl mr-2"></i>
              List Your Property
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

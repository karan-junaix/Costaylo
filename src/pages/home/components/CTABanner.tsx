import { useState } from 'react';

const CTABanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Callback request:', formData);
    setShowModal(false);
    // Reset form
    setFormData({ name: '', phone: '', email: '', preference: '' });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#c8155f] to-[#041e40]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Can't Find the Right PG?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-light">
            Tell us your preference and we'll help you find the perfect match
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-[#c8155f] px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#041e40] hover:to-[#c8155f] hover:text-white inline-flex items-center space-x-3 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-line text-2xl"></i>
            <span>Request Callback</span>
          </button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Request a Callback
              </h3>
              <p className="text-gray-600">
                Share your details and we'll get back to you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Preference
                </label>
                <textarea
                  value={formData.preference}
                  onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#041e40] hover:to-[#c8155f] cursor-pointer whitespace-nowrap"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CTABanner;

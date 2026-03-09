import { useState } from 'react';

interface ContactBoxProps {
  pgName: string;
  startingPrice: number;
  pgId: number; // now required
}

const ContactBox = ({ pgName, startingPrice, pgId }: ContactBoxProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveInDate: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);

    // send to backend
    try {
      await fetch('http://127.0.0.1:8000/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || undefined,
          move_in_date: formData.moveInDate || undefined,
          pg_id: typeof pgId === 'number' ? pgId : undefined
        })
      });
    } catch (err) {
      console.error('Failed to create lead', err);
    }

    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      moveInDate: ''
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${pgName}. I would like to schedule a visit.`;
    window.open(`https://wa.me/919952039032?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="sticky top-32">
      <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200">
        {/* Price */}
        <div className="text-center mb-6 pb-6 border-b border-gray-200">
          <div className="text-sm text-gray-600 mb-1">Starting from</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#c8155f] to-[#041e40] bg-clip-text text-transparent">
            ₹{startingPrice.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">per month</div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-700">
            <i className="ri-checkbox-circle-line text-xl"></i>
            <span className="text-sm font-medium">Request submitted successfully!</span>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Move-in Date
            </label>
            <input
              type="date"
              value={formData.moveInDate}
              onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap cursor-pointer"
          >
            Get Contact Details
          </button>
        </form>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all whitespace-nowrap cursor-pointer"
        >
          <i className="ri-whatsapp-line text-xl"></i>
          <span>Chat on WhatsApp</span>
        </button>

        {/* Info Text */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting, you agree to receive updates via call, SMS, or WhatsApp
        </p>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 bg-gradient-to-br from-[#c8155f]/5 to-[#041e40]/5 rounded-lg p-4">
        <div className="flex items-center space-x-3 text-sm text-gray-700">
          <i className="ri-shield-check-line text-[#c8155f] text-xl"></i>
          <span className="font-medium">100% Verified Property</span>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-700 mt-3">
          <i className="ri-customer-service-line text-[#c8155f] text-xl"></i>
          <span className="font-medium">24/7 Customer Support</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;

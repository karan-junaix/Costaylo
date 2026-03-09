const WhatsAppButton = () => {
  const phoneNumber = '919876543210'; // Replace with your WhatsApp number (country code + number, no spaces or special characters)
  const message = 'Hi! I found your PG listing and would like to know more.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer group"
      aria-label="Contact us on WhatsApp"
    >
      <i className="ri-whatsapp-line text-3xl"></i>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
};

export default WhatsAppButton;



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const HelpPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'general', name: 'General', icon: 'ri-question-line' },
    { id: 'booking', name: 'Booking & Payments', icon: 'ri-calendar-check-line' },
    { id: 'owners', name: 'For Property Owners', icon: 'ri-building-line' },
    { id: 'account', name: 'Account & Profile', icon: 'ri-user-settings-line' },
    { id: 'technical', name: 'Technical Support', icon: 'ri-tools-line' }
  ];

  const faqs: FAQ[] = [
    // General FAQs
    {
      id: 1,
      category: 'general',
      question: 'What is PG Finder?',
      answer: 'PG Finder is a comprehensive platform that helps you find the perfect Paying Guest (PG) accommodation in Chennai. We connect tenants with verified property owners, making it easy to discover, compare, and book quality PG accommodations with all modern amenities.'
    },
    {
      id: 2,
      category: 'general',
      question: 'How does PG Finder work?',
      answer: 'Simply search for PGs in your preferred location, filter by amenities, price range, and room type. Browse detailed listings with photos, reviews, and contact information. You can directly contact property owners or book through our platform.'
    },
    {
      id: 3,
      category: 'general',
      question: 'Are all properties verified?',
      answer: 'Yes, we verify all property owners and conduct quality checks on listed properties. Look for the "Owner Verified" badge on listings to ensure authenticity and reliability.'
    },
    {
      id: 4,
      category: 'general',
      question: 'What areas do you cover in Chennai?',
      answer: 'We cover all major areas in Chennai including Adyar, Velachery, T Nagar, Anna Nagar, Guindy, OMR, IT Corridor, and many more localities across the city.'
    },

    // Booking & Payments FAQs
    {
      id: 5,
      category: 'booking',
      question: 'How do I book a PG?',
      answer: 'Once you find a suitable PG, click on "Contact Owner" or "Book Now". You can schedule a visit, ask questions, and confirm your booking. Some properties allow instant booking through our platform.'
    },
    {
      id: 6,
      category: 'booking',
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI, net banking, credit/debit cards, and digital wallets. You can also pay directly to the property owner via cash or bank transfer as per mutual agreement.'
    },
    {
      id: 7,
      category: 'booking',
      question: 'Is there a booking fee?',
      answer: 'Our platform is free for tenants to browse and contact properties. Some properties may have a small convenience fee for online bookings, which will be clearly mentioned during checkout.'
    },
    {
      id: 8,
      category: 'booking',
      question: 'Can I cancel my booking?',
      answer: 'Cancellation policies vary by property. Check the specific cancellation terms before booking. Generally, cancellations made 24-48 hours in advance are eligible for refunds as per the property policy.'
    },
    {
      id: 9,
      category: 'booking',
      question: 'What about security deposits?',
      answer: 'Most PGs require a security deposit (typically 1-2 months rent) which is refundable at the time of checkout, subject to property condition and terms.'
    },

    // Property Owners FAQs
    {
      id: 10,
      category: 'owners',
      question: 'How do I list my property?',
      answer: 'Click on "List Your Property" and create an owner account. Fill in your property details, upload photos, set pricing, and our team will verify and activate your listing within 24-48 hours.'
    },
    {
      id: 11,
      category: 'owners',
      question: 'Is there a fee to list my property?',
      answer: 'Basic listing is free. We offer premium plans with enhanced visibility, priority placement, and additional features. You only pay when you receive bookings through our platform.'
    },
    {
      id: 12,
      category: 'owners',
      question: 'How do I manage bookings and inquiries?',
      answer: 'Use your owner dashboard to manage all inquiries, bookings, payments, and property details. You\'ll receive instant notifications for new inquiries and can respond directly through our platform.'
    },
    {
      id: 13,
      category: 'owners',
      question: 'When do I receive payments?',
      answer: 'Payments are processed within 2-3 business days after successful booking confirmation. You can track all transactions and revenue analytics in your owner dashboard.'
    },

    // Account & Profile FAQs
    {
      id: 14,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click on "Login/Sign Up" and choose to register as a tenant or property owner. Verify your email and phone number to activate your account and access all features.'
    },
    {
      id: 15,
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'On the login page, click "Forgot Password" and enter your registered email or phone number. You\'ll receive an OTP to reset your password securely.'
    },
    {
      id: 16,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Go to your dashboard and click on "Profile Settings". You can update personal information, contact details, preferences, and notification settings.'
    },
    {
      id: 17,
      category: 'account',
      question: 'Can I save my favorite properties?',
      answer: 'Yes, click the heart icon on any property listing to save it to your favorites. Access all saved properties from your dashboard under "Saved Properties".'
    },

    // Technical Support FAQs
    {
      id: 18,
      category: 'technical',
      question: 'The website is not loading properly. What should I do?',
      answer: 'Try refreshing the page or clearing your browser cache. Ensure you have a stable internet connection. If the issue persists, contact our technical support team.'
    },
    {
      id: 19,
      category: 'technical',
      question: 'I\'m not receiving OTP messages.',
      answer: 'Check your spam folder for email OTPs. For SMS, ensure your phone has good network coverage. Wait 2-3 minutes before requesting a new OTP. Contact support if the issue continues.'
    },
    {
      id: 20,
      category: 'technical',
      question: 'The mobile app is crashing frequently.',
      answer: 'Update to the latest version of the app. Restart your device and ensure you have sufficient storage space. If problems persist, uninstall and reinstall the app.'
    },
    {
      id: 21,
      category: 'technical',
      question: 'How do I report a bug or technical issue?',
      answer: 'Use the "Report Issue" button below or email us at support@pgfinder.com with details about the problem, including screenshots if possible. Our technical team will investigate promptly.'
    }
  ];

  // SEO and Schema.org setup
  useEffect(() => {
    // SEO Meta Tags
    document.title = "Help & Support - PG Finder Chennai | FAQs, Contact Support";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get help with PG booking, account management, and technical issues. Browse FAQs, contact 24/7 support via chat, WhatsApp, or email. Complete support center for PG Finder users.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'PG Finder help, support, FAQs, customer service, booking help, account support, technical support');
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.VITE_SITE_URL || 'https://example.com'}/help`);
    }

    // Add FAQ Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "PG Finder Help & Support",
      "description": "Frequently asked questions about PG booking, account management, and technical support",
      "url": `${window.VITE_SITE_URL || 'https://example.com'}/help`,
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })),
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": window.VITE_SITE_URL || "https://example.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Help & Support",
            "item": `${window.VITE_SITE_URL || 'https://example.com'}/help`
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.head.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative py-32 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20customer%20service%20team%20working%20in%20modern%20office%20environment%20with%20laptops%20and%20headsets%2C%20soft%20natural%20lighting%2C%20clean%20workspace%2C%20friendly%20support%20staff%2C%20contemporary%20interior%20design%2C%20very%20light%20and%20airy%20background%2C%20professional%20photography&width=1920&height=600&seq=help-hero-001&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Find answers to your questions about PG booking, property listing, and platform usage
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400 text-xl"></i>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help topics, FAQs, or keywords..."
                className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:bg-white outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Support Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="ri-chat-3-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat Support</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team available 24/7</p>
            <div className="flex items-center text-[#c8155f] font-semibold group-hover:text-[#041e40] transition-colors">
              <span>Start Chat</span>
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="ri-whatsapp-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp Support</h3>
            <p className="text-gray-600 mb-4">Message us directly on WhatsApp for quick assistance</p>
            <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors">
              <span>+91 98765 43210</span>
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <i className="ri-mail-line text-2xl text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us detailed queries and get comprehensive responses</p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              <span>support@pgfinder.com</span>
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our most common questions organized by category
          </p>
        </div>

        <div className="flex gap-8">
          {/* Category Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all cursor-pointer ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-[#c8155f]/10 to-[#041e40]/10 text-[#c8155f] border border-[#c8155f]/20'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <i className={`${category.icon} text-lg`}></i>
                    <span>{category.name}</span>
                    <div className="ml-auto">
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                        {faqs.filter(faq => faq.category === category.id).length}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex-1">
            {searchQuery && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <i className="ri-search-line text-blue-600"></i>
                  <span className="text-sm text-blue-800">
                    Showing results for "{searchQuery}" ({filteredFAQs.length} found)
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-auto text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <i className="ri-close-line"></i>
                  </button>
                </div>
              </div>
            )}

            {filteredFAQs.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm p-12 text-center">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery 
                    ? `No FAQs match "${searchQuery}". Try different keywords or browse categories.`
                    : 'No FAQs available in this category.'
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-[#c8155f] text-white rounded-lg font-semibold hover:bg-[#041e40] transition-colors cursor-pointer"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`}></i>
                    </button>
                    
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <div className="pt-4 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-[#c8155f] to-[#041e40] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl mb-8 text-white/90">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white py-4 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer group"
            >
              <i className="ri-customer-service-line text-xl"></i>
              <span>Contact Support</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </Link>
            
            <button className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white py-4 px-6 rounded-xl font-semibold hover:bg-white/20 transition-all cursor-pointer group">
              <i className="ri-bug-line text-xl"></i>
              <span>Report Issue</span>
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80">
              For urgent matters, call us at{' '}
              <a href="tel:+919876543210" className="text-white font-semibold hover:underline">
                +91 98765 43210
              </a>
              {' '}or email{' '}
              <a href="mailto:support@pgfinder.com" className="text-white font-semibold hover:underline">
                support@pgfinder.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HelpPage;

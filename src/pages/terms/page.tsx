import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Terms of Service - Chennai PG Finder | User Agreement & Conditions';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read the Terms of Service for Chennai PG Finder. Understand your rights, responsibilities, and our policies for using our PG accommodation platform.');
    }
  }, []);

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Chennai PG Finder ("the Platform"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time. Continued use of the Platform after changes constitutes acceptance of the modified terms.',
        'You must be at least 18 years old to use this Platform. By using our services, you represent that you meet this age requirement.'
      ]
    },
    {
      title: '2. User Accounts',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.',
        'You must notify us immediately of any unauthorized use of your account or any other breach of security.',
        'We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.'
      ]
    },
    {
      title: '3. Property Listings',
      content: [
        'Property owners are responsible for the accuracy of their listings, including descriptions, photos, pricing, and availability.',
        'We verify properties to the best of our ability, but we do not guarantee the accuracy of all information provided by property owners.',
        'Property owners must have legal authority to list and rent their properties on our Platform.',
        'We reserve the right to remove any listing that violates our policies or applicable laws.'
      ]
    },
    {
      title: '4. Bookings and Payments',
      content: [
        'All bookings are subject to availability and confirmation by the property owner.',
        'Payment terms, including deposits and rent amounts, are agreed upon between the tenant and property owner.',
        'Cancellation policies vary by property. Please review the specific cancellation policy before booking.',
        'We are not responsible for disputes between tenants and property owners regarding payments or refunds.',
        'Any service fees charged by the Platform are non-refundable unless otherwise stated.'
      ]
    },
    {
      title: '5. User Conduct',
      content: [
        'You agree not to use the Platform for any unlawful purpose or in violation of these Terms.',
        'You must not post false, misleading, or fraudulent content on the Platform.',
        'Harassment, abuse, or threatening behavior towards other users is strictly prohibited.',
        'You must not attempt to gain unauthorized access to any part of the Platform or other user accounts.',
        'Scraping, data mining, or automated data collection from the Platform is prohibited without our written consent.'
      ]
    },
    {
      title: '6. Intellectual Property',
      content: [
        'All content on the Platform, including text, graphics, logos, images, and software, is the property of Chennai PG Finder or its licensors.',
        'You may not reproduce, distribute, modify, or create derivative works from our content without written permission.',
        'User-generated content remains the property of the user, but you grant us a license to use, display, and distribute such content on the Platform.',
        'Trademarks and service marks displayed on the Platform are the property of their respective owners.'
      ]
    },
    {
      title: '7. Privacy and Data Protection',
      content: [
        'Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
        'We collect and process personal data in accordance with applicable data protection laws.',
        'You consent to the collection, use, and sharing of your information as described in our Privacy Policy.',
        'We implement reasonable security measures to protect your personal information.'
      ]
    },
    {
      title: '8. Disclaimers and Limitations of Liability',
      content: [
        'The Platform is provided "as is" without warranties of any kind, either express or implied.',
        'We do not guarantee the accuracy, completeness, or reliability of any content on the Platform.',
        'We are not responsible for the quality, safety, or legality of properties listed on the Platform.',
        'We are not liable for any disputes, damages, or losses arising from interactions between users.',
        'Our total liability for any claims arising from your use of the Platform shall not exceed the amount you paid to us in the past 12 months.',
        'We are not liable for any indirect, incidental, special, consequential, or punitive damages.'
      ]
    },
    {
      title: '9. Indemnification',
      content: [
        'You agree to indemnify and hold harmless Chennai PG Finder, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:',
        '• Your use of the Platform',
        '• Your violation of these Terms',
        '• Your violation of any rights of another party',
        '• Any content you post on the Platform'
      ]
    },
    {
      title: '10. Third-Party Links and Services',
      content: [
        'The Platform may contain links to third-party websites or services that are not owned or controlled by us.',
        'We have no control over and assume no responsibility for the content, privacy policies, or practices of third-party websites.',
        'You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of third-party services.'
      ]
    },
    {
      title: '11. Termination',
      content: [
        'We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including breach of these Terms.',
        'Upon termination, your right to use the Platform will immediately cease.',
        'All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.'
      ]
    },
    {
      title: '12. Dispute Resolution',
      content: [
        'Any disputes arising from these Terms or your use of the Platform shall be resolved through binding arbitration in accordance with Indian law.',
        'You agree to first attempt to resolve any dispute informally by contacting us.',
        'If informal resolution is not possible, disputes shall be resolved through arbitration in Chennai, Tamil Nadu.',
        'You waive any right to participate in a class action lawsuit or class-wide arbitration.'
      ]
    },
    {
      title: '13. Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of India.',
        'The courts of Chennai, Tamil Nadu shall have exclusive jurisdiction over any disputes arising from these Terms.',
        'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.'
      ]
    },
    {
      title: '14. Contact Information',
      content: [
        'If you have any questions about these Terms of Service, please contact us:',
        '• Email: legal@pgfinder.com',
        '• Phone: +91 98765 43210',
        '• Address: 123 Anna Salai, Chennai, Tamil Nadu 600002, India',
        'Last Updated: January 2024'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Please read these terms carefully before using Chennai PG Finder
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last Updated: January 2024
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Chennai PG Finder. These Terms of Service ("Terms") govern your access to and use of our website, mobile application, and services (collectively, the "Platform"). By using our Platform, you agree to comply with and be bound by these Terms. Please read them carefully.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Notice */}
          <div className="mt-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl p-8 text-center">
            <i className="ri-file-text-line text-5xl text-white mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-4">
              Agreement to Terms
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              By using Chennai PG Finder, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/privacy"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-shield-check-line text-lg mr-2"></i>
                Privacy Policy
              </a>
              <a
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-question-line text-lg mr-2"></i>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;

import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO Meta Tags
    document.title = 'Privacy Policy - Chennai PG Finder | Data Protection & Security';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read Chennai PG Finder\'s Privacy Policy to understand how we collect, use, protect, and manage your personal information on our PG accommodation platform.');
    }
  }, []);

  const sections = [
    {
      title: '1. Information We Collect',
      icon: 'ri-file-list-3-line',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you register or use our services, we collect personal information such as your name, email address, phone number, date of birth, and profile photo. For property owners, we also collect business information and property details.'
        },
        {
          subtitle: 'Usage Information',
          text: 'We automatically collect information about how you interact with our Platform, including your IP address, browser type, device information, pages visited, time spent on pages, and search queries.'
        },
        {
          subtitle: 'Location Information',
          text: 'With your permission, we collect location data to help you find properties near you and to provide location-based services.'
        },
        {
          subtitle: 'Payment Information',
          text: 'When you make payments through our Platform, we collect payment card information and transaction details. Payment processing is handled by secure third-party payment processors.'
        }
      ]
    },
    {
      title: '2. How We Use Your Information',
      icon: 'ri-settings-3-line',
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, including matching you with suitable properties, processing bookings, and facilitating communication between tenants and property owners.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to send you service-related notifications, booking confirmations, property updates, and respond to your inquiries.'
        },
        {
          subtitle: 'Personalization',
          text: 'We analyze your preferences and behavior to personalize your experience, show relevant property recommendations, and improve our search functionality.'
        },
        {
          subtitle: 'Safety and Security',
          text: 'We use your information to verify identities, prevent fraud, ensure platform security, and protect the rights and safety of our users.'
        },
        {
          subtitle: 'Marketing',
          text: 'With your consent, we may send you promotional materials, special offers, and newsletters. You can opt out of marketing communications at any time.'
        }
      ]
    },
    {
      title: '3. Information Sharing and Disclosure',
      icon: 'ri-share-line',
      content: [
        {
          subtitle: 'With Property Owners',
          text: 'When you express interest in or book a property, we share your contact information and relevant details with the property owner to facilitate the rental process.'
        },
        {
          subtitle: 'With Service Providers',
          text: 'We share information with third-party service providers who help us operate our Platform, including payment processors, hosting services, analytics providers, and customer support tools.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights or the safety of our users.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.'
        },
        {
          subtitle: 'With Your Consent',
          text: 'We may share your information with third parties when you explicitly consent to such sharing.'
        }
      ]
    },
    {
      title: '4. Data Security',
      icon: 'ri-shield-check-line',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures to protect your personal information, including encryption, secure servers, firewalls, and access controls.'
        },
        {
          subtitle: 'Data Encryption',
          text: 'All sensitive data, including payment information and passwords, is encrypted both in transit and at rest using SSL/TLS protocols.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We restrict access to personal information to employees and contractors who need it to perform their job functions and are bound by confidentiality obligations.'
        },
        {
          subtitle: 'Limitations',
          text: 'While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.'
        }
      ]
    },
    {
      title: '5. Your Rights and Choices',
      icon: 'ri-user-settings-line',
      content: [
        {
          subtitle: 'Access and Update',
          text: 'You can access and update your personal information through your account settings at any time.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You have the right to request deletion of your personal information. Contact us to submit a deletion request, subject to legal retention requirements.'
        },
        {
          subtitle: 'Marketing Opt-Out',
          text: 'You can opt out of marketing communications by clicking the unsubscribe link in our emails or adjusting your notification preferences in your account settings.'
        },
        {
          subtitle: 'Cookie Management',
          text: 'You can control cookies through your browser settings. Note that disabling cookies may affect your ability to use certain features of our Platform.'
        },
        {
          subtitle: 'Data Portability',
          text: 'You have the right to request a copy of your personal information in a structured, machine-readable format.'
        }
      ]
    },
    {
      title: '6. Cookies and Tracking Technologies',
      icon: 'ri-fingerprint-line',
      content: [
        {
          subtitle: 'What Are Cookies',
          text: 'Cookies are small text files stored on your device that help us recognize you and remember your preferences.'
        },
        {
          subtitle: 'Types of Cookies We Use',
          text: 'We use essential cookies for platform functionality, analytics cookies to understand usage patterns, and marketing cookies to deliver relevant advertisements.'
        },
        {
          subtitle: 'Third-Party Cookies',
          text: 'We use third-party analytics and advertising services that may place cookies on your device. These third parties have their own privacy policies.'
        },
        {
          subtitle: 'Managing Cookies',
          text: 'You can control and delete cookies through your browser settings. Refer to your browser\'s help documentation for instructions.'
        }
      ]
    },
    {
      title: '7. Data Retention',
      icon: 'ri-time-line',
      content: [
        {
          subtitle: 'Retention Period',
          text: 'We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements.'
        },
        {
          subtitle: 'Account Deletion',
          text: 'When you delete your account, we will delete or anonymize your personal information within 90 days, except where we are required to retain it for legal purposes.'
        },
        {
          subtitle: 'Backup Data',
          text: 'Deleted information may persist in backup copies for a limited period but will not be accessible or used for any purpose.'
        }
      ]
    },
    {
      title: '8. Children\'s Privacy',
      icon: 'ri-shield-user-line',
      content: [
        {
          subtitle: 'Age Restriction',
          text: 'Our Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children.'
        },
        {
          subtitle: 'Parental Notice',
          text: 'If we become aware that we have collected information from a child under 18, we will take steps to delete such information promptly.'
        },
        {
          subtitle: 'Parental Rights',
          text: 'If you believe your child has provided us with personal information, please contact us immediately so we can remove it.'
        }
      ]
    },
    {
      title: '9. International Data Transfers',
      icon: 'ri-global-line',
      content: [
        {
          subtitle: 'Data Location',
          text: 'Your information may be transferred to and processed in countries other than your country of residence, which may have different data protection laws.'
        },
        {
          subtitle: 'Safeguards',
          text: 'When we transfer data internationally, we implement appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy.'
        }
      ]
    },
    {
      title: '10. Changes to This Privacy Policy',
      icon: 'ri-refresh-line',
      content: [
        {
          subtitle: 'Policy Updates',
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.'
        },
        {
          subtitle: 'Notification',
          text: 'We will notify you of material changes by posting the updated policy on our Platform and updating the "Last Updated" date.'
        },
        {
          subtitle: 'Continued Use',
          text: 'Your continued use of the Platform after changes to this Privacy Policy constitutes acceptance of the updated policy.'
        }
      ]
    },
    {
      title: '11. Contact Us',
      icon: 'ri-mail-line',
      content: [
        {
          subtitle: 'Questions and Concerns',
          text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:'
        },
        {
          subtitle: 'Contact Information',
          text: 'Email: privacy@pgfinder.com | Phone: +91 98765 43210 | Address: 123 Anna Salai, Chennai, Tamil Nadu 600002, India'
        },
        {
          subtitle: 'Response Time',
          text: 'We will respond to your inquiries within 30 days of receipt.'
        }
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl mb-6">
              <i className="ri-shield-check-line text-4xl text-white"></i>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Last Updated: January 2024
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Chennai PG Finder ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and services (collectively, the "Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our Platform, you consent to the data practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl flex items-center justify-center">
                    <i className={`${section.icon} text-2xl text-white`}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl p-8 text-center">
            <i className="ri-customer-service-2-line text-5xl text-white mb-4"></i>
            <h3 className="text-2xl font-bold text-white mb-4">
              Have Questions About Your Privacy?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our team is here to help you understand how we protect your data and answer any privacy-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/help"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#c8155f] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-question-line text-lg mr-2"></i>
                Contact Support
              </a>
              <a
                href="/terms"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#c8155f] transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-file-text-line text-lg mr-2"></i>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;

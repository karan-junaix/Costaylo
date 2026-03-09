import { useState } from 'react';
import AdminDashboardLayout from '../components/AdminDashboardLayout';

const AdminSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // General Settings
  const [siteName, setSiteName] = useState('CoStaylo');
  const [siteTagline, setSiteTagline] = useState('Stay Your Way');
  const [supportEmail, setSupportEmail] = useState('support@costaylo.com');
  const [supportPhone, setSupportPhone] = useState('+91 98765 43210');

  // Commission Settings
  const [bookingCommission, setBookingCommission] = useState('10');
  const [ownerCommission, setOwnerCommission] = useState('5');
  const [platformFee, setPlatformFee] = useState('50');

  // Email Settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingConfirmation, setBookingConfirmation] = useState(true);
  const [ownerAlerts, setOwnerAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  // Security Settings
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [passwordExpiry, setPasswordExpiry] = useState('90');

  const handleSave = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: 'ri-settings-3-line' },
    { id: 'commission', label: 'Commission', icon: 'ri-money-rupee-circle-line' },
    { id: 'email', label: 'Email', icon: 'ri-mail-line' },
    { id: 'security', label: 'Security', icon: 'ri-shield-keyhole-line' },
    { id: 'payment', label: 'Payment', icon: 'ri-bank-card-line' }
  ];

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your platform configuration and preferences</p>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <i className="ri-checkbox-circle-fill text-green-600 text-xl"></i>
            <span className="text-green-800 font-medium">Settings saved successfully!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <i className={`${tab.icon} text-xl`}></i>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">General Settings</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Site Tagline</label>
                    <input
                      type="text"
                      value={siteTagline}
                      onChange={(e) => setSiteTagline(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                    <input
                      type="email"
                      value={supportEmail}
                      onChange={(e) => setSupportEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Support Phone</label>
                    <input
                      type="tel"
                      value={supportPhone}
                      onChange={(e) => setSupportPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                  </div>

                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Save Changes
                  </button>
                </div>
              )}

              {/* Commission Settings */}
              {activeTab === 'commission' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Commission Settings</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Booking Commission (%)</label>
                    <input
                      type="number"
                      value={bookingCommission}
                      onChange={(e) => setBookingCommission(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Commission charged on each booking</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Owner Commission (%)</label>
                    <input
                      type="number"
                      value={ownerCommission}
                      onChange={(e) => setOwnerCommission(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Commission charged from property owners</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Platform Fee (₹)</label>
                    <input
                      type="number"
                      value={platformFee}
                      onChange={(e) => setPlatformFee(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Fixed platform fee per booking</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-information-line text-blue-600 text-xl"></i>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">Commission Calculation</h3>
                        <p className="text-sm text-blue-800">
                          Total commission = (Booking Amount × {bookingCommission}%) + ₹{platformFee}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Save Changes
                  </button>
                </div>
              )}

              {/* Email Settings */}
              {activeTab === 'email' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Notifications</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Enable or disable all email notifications</p>
                      </div>
                      <button
                        onClick={() => setEmailNotifications(!emailNotifications)}
                        className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                          emailNotifications ? 'bg-[#c8155f]' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            emailNotifications ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        ></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Booking Confirmations</h3>
                        <p className="text-sm text-gray-600">Send emails for booking confirmations</p>
                      </div>
                      <button
                        onClick={() => setBookingConfirmation(!bookingConfirmation)}
                        className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                          bookingConfirmation ? 'bg-[#c8155f]' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            bookingConfirmation ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        ></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Owner Alerts</h3>
                        <p className="text-sm text-gray-600">Notify owners about new bookings</p>
                      </div>
                      <button
                        onClick={() => setOwnerAlerts(!ownerAlerts)}
                        className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                          ownerAlerts ? 'bg-[#c8155f]' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            ownerAlerts ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        ></span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-semibold text-gray-900">Weekly Reports</h3>
                        <p className="text-sm text-gray-600">Send weekly analytics reports</p>
                      </div>
                      <button
                        onClick={() => setWeeklyReports(!weeklyReports)}
                        className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                          weeklyReports ? 'bg-[#c8155f]' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            weeklyReports ? 'translate-x-7' : 'translate-x-0'
                          }`}
                        ></span>
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Save Changes
                  </button>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Settings</h2>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Require 2FA for admin login</p>
                    </div>
                    <button
                      onClick={() => setTwoFactorAuth(!twoFactorAuth)}
                      className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${
                        twoFactorAuth ? 'bg-[#c8155f]' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                          twoFactorAuth ? 'translate-x-7' : 'translate-x-0'
                        }`}
                      ></span>
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                    <input
                      type="number"
                      value={sessionTimeout}
                      onChange={(e) => setSessionTimeout(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Auto logout after inactivity</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password Expiry (days)</label>
                    <input
                      type="number"
                      value={passwordExpiry}
                      onChange={(e) => setPasswordExpiry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c8155f]"
                    />
                    <p className="text-sm text-gray-500 mt-1">Force password change after specified days</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-alert-line text-yellow-600 text-xl"></i>
                      <div>
                        <h3 className="font-semibold text-yellow-900 mb-1">Security Recommendation</h3>
                        <p className="text-sm text-yellow-800">
                          Enable two-factor authentication for enhanced security
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Save Changes
                  </button>
                </div>
              )}

              {/* Payment Settings */}
              {activeTab === 'payment' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Gateway Settings</h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <i className="ri-information-line text-blue-600 text-2xl"></i>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-2">Payment Integration</h3>
                        <p className="text-sm text-blue-800 mb-4">
                          Configure your payment gateway settings to accept online payments. Supported gateways: Razorpay, Stripe, PayU.
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                          Configure Payment Gateway
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#c8155f] transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <i className="ri-bank-card-line text-2xl text-blue-600"></i>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Razorpay</h3>
                      <p className="text-sm text-gray-600 mb-4">Popular Indian payment gateway</p>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Not Connected</span>
                    </div>

                    <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#c8155f] transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <i className="ri-bank-card-line text-2xl text-purple-600"></i>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Stripe</h3>
                      <p className="text-sm text-gray-600 mb-4">Global payment processing</p>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Not Connected</span>
                    </div>

                    <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-[#c8155f] transition-colors cursor-pointer">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <i className="ri-bank-card-line text-2xl text-green-600"></i>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">PayU</h3>
                      <p className="text-sm text-gray-600 mb-4">Trusted payment solution</p>
                      <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full">Not Connected</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminSettingsPage;

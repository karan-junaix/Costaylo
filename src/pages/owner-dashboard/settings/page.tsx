import { useState } from 'react';
import OwnerDashboardLayout from '../components/OwnerDashboardLayout';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  city: string;
  address: string;
  profilePhoto: string;
}

interface BusinessSettings {
  verificationStatus: string;
  gstNumber: string;
  panNumber: string;
  businessAddress: string;
  businessPhone: string;
  businessEmail: string;
  website: string;
}

interface BankDetails {
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  bankName: string;
  branchName: string;
  upiId: string;
}

interface NotificationSettings {
  emailBookings: boolean;
  smsBookings: boolean;
  whatsappBookings: boolean;
  emailPayments: boolean;
  smsPayments: boolean;
  emailInquiries: boolean;
  marketingEmails: boolean;
}

const OwnerSettingsPage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: 'Rajesh Kumar Sharma',
    email: 'rajesh.sharma@email.com',
    phone: '+91 98765 43210',
    businessName: 'Sharma Properties',
    businessType: 'individual',
    city: 'Chennai',
    address: '45, MG Road, T Nagar, Chennai - 600017',
    profilePhoto: 'https://readdy.ai/api/search-image?query=professional%20indian%20businessman%20portrait%20clean%20simple%20white%20background%20confident%20smile%20formal%20attire%20modern%20photography%20style&width=200&height=200&seq=ownerprofile001&orientation=squarish'
  });

  const [businessSettings, setBusinessSettings] = useState<BusinessSettings>({
    verificationStatus: 'verified',
    gstNumber: '33AABCS1234C1Z5',
    panNumber: 'AABCS1234C',
    businessAddress: '45, MG Road, T Nagar, Chennai - 600017',
    businessPhone: '+91 98765 43210',
    businessEmail: 'business@sharmaproperties.com',
    website: 'www.sharmaproperties.com'
  });

  const [bankDetails, setBankDetails] = useState<BankDetails>({
    accountHolderName: 'Rajesh Kumar Sharma',
    accountNumber: '1234567890123456',
    ifscCode: 'HDFC0001234',
    bankName: 'HDFC Bank',
    branchName: 'T Nagar Branch',
    upiId: 'rajesh@hdfc'
  });

  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    emailBookings: true,
    smsBookings: true,
    whatsappBookings: true,
    emailPayments: true,
    smsPayments: false,
    emailInquiries: true,
    marketingEmails: false
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: 'ri-user-line' },
    { id: 'business', label: 'Business', icon: 'ri-building-line' },
    { id: 'bank', label: 'Bank Details', icon: 'ri-bank-card-line' },
    { id: 'notifications', label: 'Notifications', icon: 'ri-notification-3-line' },
    { id: 'security', label: 'Security', icon: 'ri-shield-check-line' }
  ];

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleBusinessChange = (field: keyof BusinessSettings, value: string) => {
    setBusinessSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleBankChange = (field: keyof BankDetails, value: string) => {
    setBankDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleNotificationChange = (field: keyof NotificationSettings, value: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          setProfileData(prev => ({ ...prev, profilePhoto: event.target.result }));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleSaveChanges = () => {
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  return (
    <OwnerDashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h1>
          <p className="text-gray-600 text-sm">Manage your profile, business information, and preferences</p>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <i className="ri-checkbox-circle-fill text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
            <p className="text-green-800 text-sm font-medium">Settings saved successfully!</p>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#c8155f] text-[#c8155f]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className={`${tab.icon} mr-2 w-4 h-4 inline-flex items-center justify-center`}></i>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>

                {/* Profile Photo */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={profileData.profilePhoto}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 shadow-md"
                    />
                    <button
                      onClick={handlePhotoUpload}
                      className="absolute bottom-0 right-0 bg-[#c8155f] text-white rounded-full p-2 shadow-lg hover:bg-[#a01250] transition-colors cursor-pointer"
                    >
                      <i className="ri-camera-line text-sm w-3 h-3 flex items-center justify-center"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handlePhotoUpload}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
                    >
                      Change Photo
                    </button>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => handleProfileChange('fullName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                    <input
                      type="text"
                      value={profileData.businessName}
                      onChange={(e) => handleProfileChange('businessName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                    <select
                      value={profileData.businessType}
                      onChange={(e) => handleProfileChange('businessType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm cursor-pointer"
                    >
                      <option value="individual">Individual</option>
                      <option value="partnership">Partnership</option>
                      <option value="company">Private Limited</option>
                      <option value="llp">LLP</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      value={profileData.city}
                      onChange={(e) => handleProfileChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    value={profileData.address}
                    onChange={(e) => handleProfileChange('address', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                  />
                </div>
              </div>
            )}

            {/* Business Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Business Information</h2>
                  <div className="flex items-center space-x-2">
                    {businessSettings.verificationStatus === 'verified' ? (
                      <>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-700">Verified Business</span>
                        <i className="ri-verified-badge-fill text-green-500 text-lg w-5 h-5 flex items-center justify-center"></i>
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-yellow-700">Pending Verification</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                    <input
                      type="text"
                      value={businessSettings.gstNumber}
                      onChange={(e) => handleBusinessChange('gstNumber', e.target.value)}
                      placeholder="Enter GST number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">PAN Number</label>
                    <input
                      type="text"
                      value={businessSettings.panNumber}
                      onChange={(e) => handleBusinessChange('panNumber', e.target.value)}
                      placeholder="Enter PAN number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone</label>
                    <input
                      type="tel"
                      value={businessSettings.businessPhone}
                      onChange={(e) => handleBusinessChange('businessPhone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                    <input
                      type="email"
                      value={businessSettings.businessEmail}
                      onChange={(e) => handleBusinessChange('businessEmail', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website (Optional)</label>
                    <input
                      type="url"
                      value={businessSettings.website}
                      onChange={(e) => handleBusinessChange('website', e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                  <textarea
                    value={businessSettings.businessAddress}
                    onChange={(e) => handleBusinessChange('businessAddress', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                  />
                </div>
              </div>
            )}

            {/* Bank Details Tab */}
            {activeTab === 'bank' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Bank Details for Payouts</h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-information-line text-blue-600 text-lg mt-0.5 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <p className="text-sm text-blue-800 font-medium mb-1">Secure Payment Information</p>
                      <p className="text-sm text-blue-700">Your bank details are encrypted and secure. We use this information only for rental payouts.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      value={bankDetails.accountHolderName}
                      onChange={(e) => handleBankChange('accountHolderName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
                    <input
                      type="text"
                      value={bankDetails.accountNumber}
                      onChange={(e) => handleBankChange('accountNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                    <input
                      type="text"
                      value={bankDetails.ifscCode}
                      onChange={(e) => handleBankChange('ifscCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
                    <input
                      type="text"
                      value={bankDetails.bankName}
                      onChange={(e) => handleBankChange('bankName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Branch Name</label>
                    <input
                      type="text"
                      value={bankDetails.branchName}
                      onChange={(e) => handleBankChange('branchName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID (Optional)</label>
                    <input
                      type="text"
                      value={bankDetails.upiId}
                      onChange={(e) => handleBankChange('upiId', e.target.value)}
                      placeholder="yourname@bank"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>

                <div className="space-y-6">
                  {/* Booking Notifications */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Booking Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-mail-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">Email Notifications</span>
                            <p className="text-xs text-gray-500">Get notified about new bookings via email</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('emailBookings', !notificationSettings.emailBookings)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.emailBookings ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.emailBookings ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-message-3-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">SMS Notifications</span>
                            <p className="text-xs text-gray-500">Get instant SMS alerts for bookings</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('smsBookings', !notificationSettings.smsBookings)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.smsBookings ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.smsBookings ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-whatsapp-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">WhatsApp Notifications</span>
                            <p className="text-xs text-gray-500">Receive booking updates on WhatsApp</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('whatsappBookings', !notificationSettings.whatsappBookings)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.whatsappBookings ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.whatsappBookings ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Payment Notifications */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Payment Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-mail-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">Email Payment Alerts</span>
                            <p className="text-xs text-gray-500">Get payment confirmations via email</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('emailPayments', !notificationSettings.emailPayments)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.emailPayments ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.emailPayments ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-message-3-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">SMS Payment Alerts</span>
                            <p className="text-xs text-gray-500">Instant SMS for payment updates</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('smsPayments', !notificationSettings.smsPayments)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.smsPayments ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.smsPayments ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Notifications */}
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-4">Inquiry Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-question-answer-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">New Inquiry Alerts</span>
                            <p className="text-xs text-gray-500">Get notified when someone inquires about your properties</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('emailInquiries', !notificationSettings.emailInquiries)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.emailInquiries ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.emailInquiries ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <i className="ri-mail-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                          <div>
                            <span className="text-sm text-gray-700 font-medium">Marketing Emails</span>
                            <p className="text-xs text-gray-500">Receive tips and updates to grow your business</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('marketingEmails', !notificationSettings.marketingEmails)}
                          className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                            notificationSettings.marketingEmails ? 'bg-[#c8155f]' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                              notificationSettings.marketingEmails ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          ></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Security Settings</h2>

                {/* Change Password */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
                      />
                    </div>
                    <button className="px-4 py-2 bg-[#c8155f] text-white rounded-lg hover:bg-[#a01250] transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      Update Password
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-gray-800">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                      Enable 2FA
                    </button>
                  </div>
                </div>

                {/* Active Sessions */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-gray-800 mb-4">Active Sessions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className="ri-computer-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Chrome on Windows</p>
                          <p className="text-xs text-gray-500">Current session • Chennai, India</p>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <i className="ri-smartphone-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                          <p className="text-xs text-gray-500">2 hours ago • Chennai, India</p>
                        </div>
                      </div>
                      <button className="text-red-600 hover:text-red-800 text-xs font-medium cursor-pointer whitespace-nowrap">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>

                {/* Account Deletion */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-base font-semibold text-red-900 mb-2">Delete Account</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium underline cursor-pointer whitespace-nowrap">
                    Delete my account permanently
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-8 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold whitespace-nowrap cursor-pointer"
          >
            Save All Changes
          </button>
        </div>
      </div>
    </OwnerDashboardLayout>
  );
};

export default OwnerSettingsPage;
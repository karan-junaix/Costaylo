
import { useState } from 'react';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  profilePhoto: string;
}

interface Preferences {
  emailNotifications: boolean;
  smsNotifications: boolean;
  whatsappNotifications: boolean;
  preferredRoomType: string;
  budgetMin: number;
  budgetMax: number;
  preferredLocations: string[];
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    dateOfBirth: '1998-05-15',
    gender: 'male',
    city: 'Chennai',
    profilePhoto: 'https://readdy.ai/api/search-image?query=professional%20indian%20young%20man%20portrait%20clean%20simple%20white%20background%20friendly%20smile%20casual%20attire%20modern%20photography%20style&width=200&height=200&seq=profile001&orientation=squarish'
  });

  const [preferences, setPreferences] = useState<Preferences>({
    emailNotifications: true,
    smsNotifications: false,
    whatsappNotifications: true,
    preferredRoomType: 'double',
    budgetMin: 8000,
    budgetMax: 15000,
    preferredLocations: ['Velachery', 'Adyar', 'T Nagar']
  });

  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const locationOptions = [
    'Velachery', 'Adyar', 'T Nagar', 'Anna Nagar', 'Porur',
    'Tambaram', 'Guindy', 'Mylapore', 'Nungambakkam', 'Egmore'
  ];

  const handleProfileChange = (field: keyof ProfileData, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (field: keyof Preferences, value: any) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = (field: keyof PasswordData, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationToggle = (location: string) => {
    setPreferences(prev => ({
      ...prev,
      preferredLocations: prev.preferredLocations.includes(location)
        ? prev.preferredLocations.filter(loc => loc !== location)
        : [...prev.preferredLocations, location]
    }));
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

  const handleDeleteAccount = () => {
    console.log('Account deletion requested');
    setShowDeleteConfirm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600 text-sm">Manage your account information and preferences</p>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <i className="ri-checkbox-circle-fill text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
            <p className="text-green-800 text-sm font-medium">Your changes have been saved successfully!</p>
          </div>
        )}

        {/* Personal Information Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <i className="ri-user-line text-[#c8155f] text-2xl w-6 h-6 flex items-center justify-center"></i>
            <span>Personal Information</span>
          </h2>

          {/* Profile Photo */}
          <div className="mb-8 flex items-center space-x-6">
            <div className="relative">
              <img
                src={profileData.profilePhoto}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow-md"
              />
              <button
                onClick={handlePhotoUpload}
                className="absolute bottom-0 right-0 bg-[#c8155f] text-white rounded-full p-2 shadow-lg hover:bg-[#a01250] transition-colors cursor-pointer"
              >
                <i className="ri-camera-line text-base w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
            <div>
              <button
                onClick={handlePhotoUpload}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                Upload New Photo
              </button>
              <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max size 2MB</p>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                value={profileData.dateOfBirth}
                onChange={(e) => handleProfileChange('dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
              <select
                value={profileData.gender}
                onChange={(e) => handleProfileChange('gender', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm cursor-pointer"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City / Location</label>
              <input
                type="text"
                value={profileData.city}
                onChange={(e) => handleProfileChange('city', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
              />
            </div>
          </div>
        </div>

        {/* Account Preferences Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <i className="ri-settings-3-line text-[#c8155f] text-2xl w-6 h-6 flex items-center justify-center"></i>
            <span>Account Preferences</span>
          </h2>

          {/* Notification Preferences */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-800 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="ri-mail-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm text-gray-700">Email Notifications</span>
                </div>
                <button
                  onClick={() => handlePreferenceChange('emailNotifications', !preferences.emailNotifications)}
                  className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                    preferences.emailNotifications ? 'bg-[#c8155f]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.emailNotifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="ri-message-3-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm text-gray-700">SMS Notifications</span>
                </div>
                <button
                  onClick={() => handlePreferenceChange('smsNotifications', !preferences.smsNotifications)}
                  className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                    preferences.smsNotifications ? 'bg-[#c8155f]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.smsNotifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <i className="ri-whatsapp-line text-gray-600 text-lg w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-sm text-gray-700">WhatsApp Notifications</span>
                </div>
                <button
                  onClick={() => handlePreferenceChange('whatsappNotifications', !preferences.whatsappNotifications)}
                  className={`relative w-12 h-6 rounded-full transition-colors cursor-pointer ${
                    preferences.whatsappNotifications ? 'bg-[#c8155f]' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      preferences.whatsappNotifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>

          {/* Room Type Preference */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-800 mb-4">Preferred Room Type</h3>
            <select
              value={preferences.preferredRoomType}
              onChange={(e) => handlePreferenceChange('preferredRoomType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm cursor-pointer"
            >
              <option value="single">Single Occupancy</option>
              <option value="double">Double Sharing</option>
              <option value="triple">Triple Sharing</option>
              <option value="shared">Shared (4+ people)</option>
            </select>
          </div>

          {/* Budget Preference */}
          <div className="mb-8">
            <h3 className="text-base font-semibold text-gray-800 mb-4">Budget Preference Range</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600 whitespace-nowrap">₹{preferences.budgetMin.toLocaleString()}</span>
                <input
                  type="range"
                  min="5000"
                  max="30000"
                  step="1000"
                  value={preferences.budgetMin}
                  onChange={(e) => handlePreferenceChange('budgetMin', parseInt(e.target.value))}
                  className="flex-1 cursor-pointer"
                />
                <span className="text-sm text-gray-600 whitespace-nowrap">₹{preferences.budgetMax.toLocaleString()}</span>
                <input
                  type="range"
                  min="5000"
                  max="30000"
                  step="1000"
                  value={preferences.budgetMax}
                  onChange={(e) => handlePreferenceChange('budgetMax', parseInt(e.target.value))}
                  className="flex-1 cursor-pointer"
                />
              </div>
              <div className="text-center">
                <span className="text-sm font-medium text-[#c8155f]">
                  ₹{preferences.budgetMin.toLocaleString()} - ₹{preferences.budgetMax.toLocaleString()} per month
                </span>
              </div>
            </div>
          </div>

          {/* Preferred Locations */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">Preferred Locations</h3>
            <div className="flex flex-wrap gap-2">
              {locationOptions.map((location) => (
                <button
                  key={location}
                  onClick={() => handleLocationToggle(location)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                    preferences.preferredLocations.includes(location)
                      ? 'bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {location}
                  {preferences.preferredLocations.includes(location) && (
                    <i className="ri-check-line ml-2 w-4 h-4 inline-flex items-center justify-center"></i>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
            <i className="ri-lock-line text-[#c8155f] text-2xl w-6 h-6 flex items-center justify-center"></i>
            <span>Security</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                value={passwordData.currentPassword}
                onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                placeholder="Enter current password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                value={passwordData.newPassword}
                onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                placeholder="Confirm new password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent text-sm"
              />
            </div>

            {passwordData.newPassword && passwordData.confirmPassword && passwordData.newPassword !== passwordData.confirmPassword && (
              <p className="text-red-600 text-xs">Passwords do not match</p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveChanges}
            className="px-8 py-3 bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white rounded-lg hover:shadow-lg transition-all text-sm font-semibold whitespace-nowrap cursor-pointer"
          >
            Save Changes
          </button>
        </div>

        {/* Delete Account Section */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="text-base font-semibold text-red-900 mb-2">Danger Zone</h3>
          <p className="text-sm text-red-700 mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-red-600 hover:text-red-800 text-sm font-medium underline cursor-pointer whitespace-nowrap"
          >
            Delete my account permanently
          </button>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-error-warning-line text-red-600 text-3xl w-8 h-8 flex items-center justify-center"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Account?</h3>
                <p className="text-sm text-gray-600">
                  This action cannot be undone. All your data will be permanently deleted.
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold whitespace-nowrap cursor-pointer"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

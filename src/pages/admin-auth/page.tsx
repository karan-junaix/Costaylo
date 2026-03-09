
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminAuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, validate admin credentials
    if (email && password) {
      window.REACT_APP_NAVIGATE('/admin-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#041e40] via-[#062a5c] to-[#c8155f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img 
              src="https://static.readdy.ai/image/0be37e4d464cdcdfc96c4a625bbb732f/46c7907775a13ea6d80472ef874ec660.png" 
              alt="CoStaylo Logo" 
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-white mt-4">Admin Portal</h1>
          <p className="text-gray-200 mt-2">Secure access for administrators</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-xl mx-auto mb-6">
            <i className="ri-shield-keyhole-line text-3xl text-white"></i>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Admin Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-admin-line text-gray-400"></i>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@costaylo.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400"></i>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
                >
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400 hover:text-gray-600`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-login-box-line mr-2"></i>
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <i className="ri-shield-check-line text-green-600"></i>
              <span>Secured with 2FA Authentication</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-white hover:text-gray-200 font-medium inline-flex items-center space-x-2 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPage;

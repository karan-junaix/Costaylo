import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

type Step = 'input' | 'otp';

const OwnerAuthPage = () => {
  const [step, setStep] = useState<Step>('input');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: ['', '', '', '', '', '']
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...formData.otp];
    newOtp[index] = value;
    setFormData(prev => ({ ...prev, otp: newOtp }));

    if (value && index < 5) {
      const nextInput = document.getElementById(`owner-otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
      const prevInput = document.getElementById(`owner-otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (step === 'input') {
        if (!formData.email && !formData.phone) {
          setError('Please enter either email or phone number');
          setIsLoading(false);
          return;
        }

        if (formData.email && !validateEmail(formData.email)) {
          setError('Please enter a valid email address');
          setIsLoading(false);
          return;
        }

        if (formData.phone && !validatePhone(formData.phone)) {
          setError('Please enter a valid 10-digit phone number');
          setIsLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 1500));
        setSuccess(`OTP sent to ${formData.email || formData.phone}`);
        setStep('otp');
      } else {
        const otpValue = formData.otp.join('');
        if (otpValue.length !== 6) {
          setError('Please enter complete OTP');
          setIsLoading(false);
          return;
        }

        await new Promise(resolve => setTimeout(resolve, 1500));
        setSuccess('Login successful! Redirecting to dashboard...');
        
        setTimeout(() => {
          window.REACT_APP_NAVIGATE('/owner-dashboard');
        }, 1500);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('OTP resent successfully!');
      setFormData(prev => ({ ...prev, otp: ['', '', '', '', '', ''] }));
      document.getElementById('owner-otp-0')?.focus();
    } catch (err) {
      setError('Failed to resend OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setStep('input');
    setFormData(prev => ({ ...prev, otp: ['', '', '', '', '', ''] }));
    setError('');
    setSuccess('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div 
        className="flex-1 flex items-center justify-center px-4 py-32 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20modern%20office%20workspace%20with%20laptop%20and%20documents%20on%20desk%2C%20soft%20natural%20lighting%20streaming%20through%20windows%2C%20minimalist%20interior%20design%2C%20clean%20white%20walls%2C%20business%20atmosphere%2C%20professional%20photography%2C%20very%20light%20and%20airy%20background%2C%20pastel%20tones%2C%20blurred%20background%20for%20text%20overlay&width=1920&height=1080&seq=owner-auth-bg-001&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#c8155f] to-[#041e40] rounded-2xl mb-4">
                <i className="ri-building-line text-3xl text-white"></i>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {step === 'input' ? 'PG Owner Login' : 'Verify OTP'}
              </h1>
              <p className="text-sm text-gray-600">
                {step === 'input'
                  ? 'Access your property dashboard'
                  : `Enter the 6-digit code sent to ${formData.email || formData.phone}`
                }
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                <i className="ri-error-warning-line text-red-500 text-xl flex-shrink-0 mt-0.5"></i>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <i className="ri-checkbox-circle-line text-green-500 text-xl flex-shrink-0 mt-0.5"></i>
                <p className="text-sm text-green-700">{success}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {step === 'input' ? (
                <>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="ri-mail-line text-gray-400 text-lg"></i>
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm bg-white"
                        placeholder="Enter your email"
                        disabled={isLoading || !!formData.phone}
                      />
                    </div>
                  </div>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">OR</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="ri-phone-line text-gray-400 text-lg"></i>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-transparent outline-none transition-all text-sm bg-white"
                        placeholder="Enter 10-digit phone number"
                        disabled={isLoading || !!formData.email}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-lg"></i>
                        <span>Sending OTP...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-line text-lg"></i>
                        <span>Send OTP</span>
                      </>
                    )}
                  </button>

                  <div className="mt-6 p-4 bg-gradient-to-r from-[#c8155f]/10 to-[#041e40]/10 rounded-lg border border-[#c8155f]/20">
                    <div className="flex items-start space-x-3">
                      <i className="ri-information-line text-[#c8155f] text-xl flex-shrink-0 mt-0.5"></i>
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-1">Owner Benefits:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• Manage property listings</li>
                          <li>• Track bookings and inquiries</li>
                          <li>• Update pricing and availability</li>
                          <li>• View analytics and reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
                      Enter Verification Code
                    </label>
                    <div className="flex justify-center space-x-2 sm:space-x-3">
                      {formData.otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`owner-otp-${index}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8155f] focus:border-[#c8155f] outline-none transition-all bg-white"
                          disabled={isLoading}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={isLoading}
                      className="text-sm text-[#c8155f] hover:text-[#041e40] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Didn't receive code? Resend OTP
                    </button>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#c8155f] to-[#041e40] text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <i className="ri-loader-4-line animate-spin text-lg"></i>
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-login-box-line text-lg"></i>
                        <span>Verify &amp; Access Dashboard</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isLoading}
                    className="w-full text-gray-600 hover:text-gray-900 py-2 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    ← Back to Login
                  </button>
                </>
              )}
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Not a property owner?{' '}
                <Link to="/login" className="text-[#c8155f] hover:text-[#041e40] font-semibold transition-colors cursor-pointer">
                  User Login
                </Link>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-gray-500 px-4">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-[#c8155f] hover:underline cursor-pointer">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-[#c8155f] hover:underline cursor-pointer">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OwnerAuthPage;

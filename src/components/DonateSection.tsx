import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, IndianRupee, Smartphone, Monitor, Tablet, Copy, CheckCircle } from 'lucide-react';

interface DonateSectionProps {
  qrCodeUrl: string;
  upiId: string;
}

const DonateSection: React.FC<DonateSectionProps> = ({ qrCodeUrl, upiId }) => {
  const [amount, setAmount] = useState('');
  const [showAmountInput, setShowAmountInput] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'desktop' | 'tablet'>('desktop');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  const handleDonate = () => {
    if (!amount) {
      setShowAmountInput(true);
      return;
    }

    if (deviceType === 'mobile') {
      // Direct UPI app opening for mobile
      const upiUrl = `upi://pay?pa=${upiId}&pn=Mohan%20Kuberan&am=${amount}&cu=INR`;
      window.location.href = upiUrl;
    }
    // For desktop/tablet, keep showing QR code
  };

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const predefinedAmounts = [100, 500, 1000, 5000];

  return (
    <section id="donate" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold inline-flex items-center">
            <Heart size={16} className="mr-2 text-red-500" /> Support Mohan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">Make a Difference Today</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your contribution, no matter how small, can help Mohan achieve his dream of studying finance abroad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How Your Donation Helps</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-700 font-semibold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Education Fees</h4>
                  <p className="text-gray-600">Helps cover tuition and essential course materials</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-700 font-semibold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Living Expenses</h4>
                  <p className="text-gray-600">Supports basic accommodation and daily necessities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-700 font-semibold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800">Travel & Documentation</h4>
                  <p className="text-gray-600">Covers visa processing and international travel costs</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <p className="text-sm text-gray-700">
                <strong>100% of your donation</strong> goes directly to supporting Mohan's education. Every rupee counts and brings him closer to his dream.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-md text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${deviceType === 'mobile' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <Smartphone size={20} className={deviceType === 'mobile' ? 'text-blue-600' : 'text-gray-500'} />
                <span className={deviceType === 'mobile' ? 'text-blue-600' : 'text-gray-500'}>Mobile</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${deviceType === 'tablet' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <Tablet size={20} className={deviceType === 'tablet' ? 'text-blue-600' : 'text-gray-500'} />
                <span className={deviceType === 'tablet' ? 'text-blue-600' : 'text-gray-500'}>Tablet</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${deviceType === 'desktop' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <Monitor size={20} className={deviceType === 'desktop' ? 'text-blue-600' : 'text-gray-500'} />
                <span className={deviceType === 'desktop' ? 'text-blue-600' : 'text-gray-500'}>Desktop</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Donate via UPI</h3>
            
            {showAmountInput ? (
              <div className="mb-8">
                <div className="flex flex-wrap gap-4 justify-center mb-6">
                  {predefinedAmounts.map((presetAmount) => (
                    <button
                      key={presetAmount}
                      onClick={() => setAmount(presetAmount.toString())}
                      className={`px-6 py-2 rounded-lg border ${
                        amount === presetAmount.toString()
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:border-blue-600'
                      } transition-all duration-300`}
                    >
                      ₹{presetAmount}
                    </button>
                  ))}
                </div>
                
                <div className="relative max-w-xs mx-auto">
                  <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg shadow-md inline-block mb-6">
                <img 
                  src={qrCodeUrl} 
                  alt="UPI QR Code" 
                  className="w-64 h-64 object-contain mx-auto"
                />
                <p className="mt-3 text-center text-gray-700 font-medium">
                  {deviceType === 'mobile' 
                    ? 'Tap the button below to open your UPI app' 
                    : 'Scan this QR code with your UPI app'}
                </p>
              </div>
            )}
            
            <div className="mb-6">
              <p className="text-gray-600 mb-2">UPI ID:</p>
              <div className="flex items-center justify-center">
                <div className="relative flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <p className="font-mono text-gray-800 select-all">{upiId}</p>
                  <button
                    onClick={copyUpiId}
                    className="ml-2 p-1 hover:bg-gray-200 rounded transition-colors"
                    title="Copy UPI ID"
                  >
                    {copied ? (
                      <CheckCircle size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} className="text-gray-500" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={handleDonate}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg block w-full transition-all duration-300 flex items-center justify-center"
              >
                {showAmountInput ? 'Proceed to Pay' : 'Enter Amount'} <ArrowRight size={18} className="ml-2" />
              </button>
              <p className="text-sm text-gray-500 mt-2">
                {deviceType === 'mobile' 
                  ? '(Opens your UPI app directly)'
                  : '(Use your phone to scan the QR code)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
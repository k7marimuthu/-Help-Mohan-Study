import React from 'react';

interface ProgressBarProps {
  target: number;
  raised: number;
  currency: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ target, raised, currency }) => {
  const percentage = Math.min(Math.round((raised / target) * 100), 100);
  
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Fundraising Progress</h3>
              <p className="text-gray-600 mt-1">Help us reach our goal</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="text-3xl font-bold text-blue-700">{currency}{raised.toLocaleString()}</span>
              <span className="text-gray-500 ml-2">raised of {currency}{target.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-600 to-blue-400 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">{percentage}% Complete</span>
            <span className="text-gray-600">{target - raised > 0 ? `${currency}${(target - raised).toLocaleString()} to go` : 'Goal reached!'}</span>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-blue-50 p-4 rounded-lg flex-1 min-w-[150px] text-center">
              <p className="text-3xl font-bold text-blue-700">42</p>
              <p className="text-gray-600">Supporters</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg flex-1 min-w-[150px] text-center">
              <p className="text-3xl font-bold text-green-700">28</p>
              <p className="text-gray-600">Days Left</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg flex-1 min-w-[150px] text-center">
              <p className="text-3xl font-bold text-yellow-700">{currency}120</p>
              <p className="text-gray-600">Avg. Donation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const list = [
  {
    name: 'Personal Loan EMI',
    description: 'Use Personal Loan EMI Calculator to easily calculate monthly payments.',
    route: '/calculator/personal-loan-emi',
  },
  {
    name: 'Simple Interest',
    description: 'Calculate simple interest on your investments quickly.',
    route: '/calculator/simple-interest',
  },
  {
    name: 'Compound Interest',
    description: 'Understand the power of compounding with our calculator.',
    route: '/calculator/compound-interest',
  },
  {
    name: 'Mutual Fund SIP',
    description: 'Calculate your estimated SIP return with ease.',
    route: '/calculator/sip',
  },
  {
    name: 'Fixed Deposit (FD)',
    description: 'Check your fixed deposit returns in seconds.',
    route: '/calculator/fd',
  },
  {
    name: 'Recurring Deposit (RD)',
    description: 'Plan your RD savings effectively with this calculator.',
    route: '/calculator/rd',
  },
  {
    name: 'GST',
    description: 'Quickly compute GST amounts using our calculator.',
    route: '/calculator/gst',
  }
];

export default function Calculator() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#f9f9ff] min-h-screen">
      <h1 className="text-3xl font-bold text-[#0F1C4D] mb-6">Financial Calculators</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((calc) => (
          <div key={calc.name} className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 hover:shadow-xl transition-all">
            <h2 className="text-xl font-semibold text-[#0F1C4D] mb-2">{calc.name}</h2>
            <p className="text-gray-600 mb-4 text-sm">{calc.description}</p>
            <button
              onClick={() => navigate(calc.route)}
              className="mt-auto flex items-center justify-end text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              Calculate
              <ArrowRightIcon className="w-5 h-5 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

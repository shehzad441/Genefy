// PricingPlans.js
import { CheckCircle } from 'lucide-react';

export default function PricingPlans() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 'Join for 3 Days',
      features: [
        'Limited Mock Up',
        'Limited Study notes',
      ],
      buttonText: 'Subscribe Now'
    },
    {
      id: 'monthly',
      name: '1 Month',
      price: 'Rs. 799',
      features: [
        'Unlimited Mock Up',
        'Unlimited Study notes',
        'Unlimited Flash Cards',
        'Unlimited Question Bank',
      ],
      buttonText: 'Subscribe Now'
    },
    {
      id: 'sixmonth',
      name: '6 Month',
      price: 'Rs. 3999',
      features: [
        'Unlimited Mock Up',
        'Unlimited Study notes',
        'Unlimited Flash Cards',
        'Unlimited Question Bank',
      ],
      buttonText: 'Subscribe Now'
    },
    {
      id: 'annual',
      name: '12 Month',
      price: 'Rs. 7999',
      features: [
        'Unlimited Mock Up',
        'Unlimited Study notes',
        'Unlimited Flash Cards',
        'Unlimited Question Bank',
      ],
      buttonText: 'Subscribe Now'
    }
  ];

  return (
    <section className="pricing-section py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          Choose your plan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className="pricing-card border border-gray-200 rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-md">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-center text-3xl font-bold text-indigo-600 mb-6">{plan.name}</h3>
                
                <div className="price-wrapper mb-8">
                  <div className="price text-center font-medium text-gray-700 border border-indigo-200 rounded-lg py-3">
                    {plan.price}
                  </div>
                </div>
                
                <div className="features mb-8">
                  <p className="text-gray-700 font-semibold mb-4">Features</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <button className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
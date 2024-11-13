import React, { useState } from 'react';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter Pack',
      monthlyPrice: '$15',
      annualPrice: '$8',
      description: 'This plan is ideal for individual users and hobbyists who are looking for essential functionalities to support their projects.',
      features: [
        '5 mb/PDF',
        '75 pages/PDF',
        '10 messages/Day',
        'Up to 3 PDFs',
      ],
      unavailableFeatures: [
        'Gpt-3.5-turbo model',
        'Test mode',
        'Doc summary',
      ],
    },
    {
      name: 'Silver Surfer',
      monthlyPrice: '$25',
      annualPrice: '$20',
      description: 'If you\'re a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features.',
      features: [
        '10 mb/PDF',
        '150 pages/PDF',
        '25 messages/Day',
        'Up to 10 PDFs',
        'Gpt-3.5-turbo model',
      ],
      unavailableFeatures: [
        'Test mode',
        'Doc summary',
      ],
    },
    {
      name: 'Gold Star',
      monthlyPrice: '$50',
      annualPrice: '$40',
      description: 'For larger teams and growing businesses, this plan provides advanced functionalities and increased usage limits.',
      features: [
        'Unlimited mb/PDF',
        'Unlimited pages/PDF',
        'Unlimited messages/Day',
        'Unlimited PDFs',
        'Gpt-4.0-turbo model',
        'Test mode',
        'Doc summary',
      ],
      unavailableFeatures: [],
    },
  ];

  return (
    <section className="relative flex pb-10 flex-col items-center justify-center bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
      
      {/* Heading and Subheading */}
      <div className="text-center text-white md:m-12 m-6">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
          <span className="text-secondary">Accelerate growth — </span>for you or <br /> your organization
        </h1>
        <p className="text-lg sm:text-xl">Choose a plan that best fits your needs, whether you're an individual or part of a growing business.</p>
      </div>

      <div className="relative items-center px-4  mx-auto md:px-12 max-w-7xl">
        {/* Toggle buttons for Monthly / Annual */}
        <div className="md:max-w-sm mx-auto">
          <div className="inline-flex w-full border rounded-full mt-6 overflow-hidden border-white/20 p-0.5 z-0">
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${!annual ? 'bg-secondary text-white' : 'text-white'}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`font-medium rounded-full transition h-12 w-full py-2 block px-8 text-xs ${annual ? 'bg-secondary text-white' : 'text-white'}`}
              onClick={() => setAnnual(true)}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-12 mt-6">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col justify-between p-8 shadow-2xl rounded-3xl bg-black/20 backdrop-blur-3xl shadow-gray-900/50">
              <div>
                <div className="flex flex-col justify-between gap-3">
                  <p className="text-xl font-medium tracking-tight text-white">{plan.name}</p>
                  <p className="text-white">
                    <span className="text-2xl tracking-tight">
                      {annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-base font-medium">
                      /m
                      {annual && <span> (billed annually)</span>}
                    </span>
                  </p>
                </div>
                <p className="mt-8 text-xs text-white/80">{plan.description}</p>
                <ul className="flex flex-col order-last mt-8 text-sm text-white gap-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M9 12l2 2l4 -4"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature, i) => (
                    <li key={i} className="inline-flex items-center gap-2 opacity-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex mt-6">
                <a href="#_" title={plan.name} aria-label="get started" className="flex items-center justify-center w-full h-12 px-4 py-2 text-base font-medium transition-all duration-200 rounded-xl text-white bg-secondary hover:bg-orange-500/80">
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

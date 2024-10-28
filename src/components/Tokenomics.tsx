import React from 'react';
import { Coins, Shield, Users, Leaf } from 'lucide-react';

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-emerald-800 text-center mb-16">
          Tokenomics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Coins,
              title: 'Total Supply',
              value: '1,000,000,000',
              description: 'Fixed supply, no inflation'
            },
            {
              icon: Shield,
              title: 'Locked Liquidity',
              value: '40%',
              description: 'Ensuring stable trading'
            },
            {
              icon: Users,
              title: 'Community',
              value: '30%',
              description: 'Reserved for community rewards'
            },
            {
              icon: Leaf,
              title: 'Eco Fund',
              value: '20%',
              description: 'Supporting green initiatives'
            }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 shadow-lg">
              <item.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">{item.title}</h3>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{item.value}</div>
              <p className="text-emerald-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
            Token Utility
          </h3>
          <div className="space-y-4">
            {[
              'Governance rights in ecological project decisions',
              'Exclusive access to eco-friendly NFT collections',
              'Staking rewards with bonus for long-term holders',
              'Direct participation in conservation projects'
            ].map((utility, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg">
                <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-emerald-700">{utility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
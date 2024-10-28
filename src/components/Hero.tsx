import React from 'react';
import { Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598425237654-4fc758e50a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-white/95" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-emerald-800 mb-6">
            Welcome to Mei Mei's World
          </h1>
          <p className="text-xl md:text-2xl text-emerald-700 max-w-2xl mb-12">
            Join our eco-conscious journey where crypto meets conservation. 
            Together with Mei Mei, we're building a greener future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 transition-all transform hover:scale-105">
              Join the Movement
            </button>
            <button className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {[
              { title: 'Eco-Friendly', value: '100%' },
              { title: 'Community Members', value: '50K+' },
              { title: 'Trees Planted', value: '10,000' }
            ].map((stat) => (
              <div key={stat.title} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                <Leaf className="w-8 h-8 text-emerald-500 mb-2" />
                <div className="text-3xl font-bold text-emerald-800">{stat.value}</div>
                <div className="text-emerald-600">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
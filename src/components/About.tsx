import React from 'react';
import { Heart, Sprout, TreePine } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-800 text-center mb-16">
            Meet Mei Mei
          </h2>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden mb-12">
              <img 
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80"
                alt="Panda in bamboo forest"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Heart className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-2xl font-semibold text-emerald-800">Our Story</h3>
                </div>
                <p className="text-emerald-700 leading-relaxed">
                  Born in the heart of a mystical bamboo forest, Mei Mei discovered her calling as a bridge between nature and technology. Her mission? To create a sustainable future where crypto innovation meets environmental consciousness.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <Sprout className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-2xl font-semibold text-emerald-800">Our Mission</h3>
                </div>
                <p className="text-emerald-700 leading-relaxed">
                  Through blockchain technology and community engagement, we're creating a movement that proves crypto can be a force for environmental good. Every transaction plants seeds of change.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <TreePine className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-2xl font-semibold text-emerald-800">Fun Facts</h3>
                </div>
                <ul className="space-y-4 text-emerald-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>Loves meditation in bamboo groves</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>Expert in sustainable farming practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span>Passionate about teaching eco-consciousness</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
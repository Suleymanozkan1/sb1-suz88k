import React from 'react';
import { Twitter, MessageCircle, Send } from 'lucide-react';

export function Join() {
  return (
    <section id="join" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-emerald-800 mb-6">
            Join Mei Mei's Bamboo Community
          </h2>
          <p className="text-xl text-emerald-700 mb-12">
            Be part of our growing family of eco-conscious crypto enthusiasts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Twitter,
                name: 'Twitter',
                followers: '25K+',
                link: '#',
                color: 'bg-blue-500'
              },
              {
                icon: MessageCircle,
                name: 'Discord',
                followers: '15K+',
                link: '#',
                color: 'bg-indigo-500'
              },
              {
                icon: Send,
                name: 'Telegram',
                followers: '10K+',
                link: '#',
                color: 'bg-sky-500'
              }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  {platform.name}
                </h3>
                <p className="text-emerald-600">{platform.followers} followers</p>
              </a>
            ))}
          </div>

          <div className="bg-emerald-800 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ready to make a difference?</h3>
            <p className="mb-8">Join our newsletter for exclusive updates and eco-initiatives</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-8 py-3 bg-emerald-500 rounded-full hover:bg-emerald-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
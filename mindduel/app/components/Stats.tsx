import { Users, Brain, Trophy } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Users, label: 'Active Debaters', value: '50K+' },
    { icon: Brain, label: 'Debates Completed', value: '500K+' },
    { icon: Trophy, label: 'Topics Available', value: '100+' },
  ];

  return (
    <section className="px-6 py-12 border-y border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f4511E]/10 rounded-lg mb-3">
                <stat.icon className="w-6 h-6 text-[#f4511E]" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

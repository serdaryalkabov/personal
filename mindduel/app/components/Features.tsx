import { Mic, MessageCircle, BarChart3, Trophy, Settings, Target } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Mic,
      title: 'Voice-Powered Debates',
      description: 'Speak naturally and let AI transcribe your arguments in real-time. Hear AI responses with natural text-to-speech.',
    },
    {
      icon: Target,
      title: 'Curated Topics',
      description: 'Choose from categories like AI in Medicine, Democracy & Governance, and more. Always find debates that match your interests.',
    },
    {
      icon: MessageCircle,
      title: '10-Round Battles',
      description: 'Engage in structured debates with 10 rounds of back-and-forth arguments, giving you ample opportunity to make your case.',
    },
    {
      icon: BarChart3,
      title: 'Detailed Evaluation',
      description: 'Get scored on 5 criteria: Clarity, Logic & Structure, Evidence & Examples, Persuasiveness, and Rebuttal. 100 points total.',
    },
    {
      icon: Trophy,
      title: 'Global Leaderboard',
      description: 'Compete with debaters worldwide. Track your ranking among the top 30 users and climb to the top.',
    },
    {
      icon: Settings,
      title: 'Customizable Settings',
      description: 'Adjust thinking time (5-60s), speaking time (5-60s), and difficulty level (Beginner, Intermediate, Expert) to match your skill.',
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-[#f4511E]">Master Debate</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            MindDuel combines cutting-edge AI with proven debate techniques to help you become a more persuasive communicator.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a2332] to-[#0d1117] rounded-xl p-6 border border-gray-800 hover:border-[#f4511E]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#f4511E]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#f4511E]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

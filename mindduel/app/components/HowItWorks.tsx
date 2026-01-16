import { UserPlus, List, Mic2, Award } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up and select your favorite debate categories to get personalized topic recommendations.',
      number: '01',
    },
    {
      icon: List,
      title: 'Choose Topic',
      description: 'Browse curated debate topics that match your interests and select one to begin your debate.',
      number: '02',
    },
    {
      icon: Mic2,
      title: 'Debate with AI',
      description: 'Speak your arguments for 10 rounds. AI transcribes your speech, responds with counter-arguments, and voices them back.',
      number: '03',
    },
    {
      icon: Award,
      title: 'Get Evaluated',
      description: 'Receive detailed scoring on 5 criteria with a total of 100 points and see if you won against the AI.',
      number: '04',
    },
  ];

  return (
    <section className="px-6 py-20 md:py-32 bg-gradient-to-b from-transparent to-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-[#f4511E]">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start debating in minutes with our simple four-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+24px)] w-full h-0.5 bg-gradient-to-r from-[#f4511E]/50 to-transparent"></div>
              )}
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#f4511E]/10 border-2 border-[#f4511E] rounded-full mb-4 relative">
                  <step.icon className="w-8 h-8 text-[#f4511E]" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f4511E] rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Example evaluation card */}
        <div className="mt-16 bg-gradient-to-br from-[#1a2332] to-[#0d1117] rounded-2xl p-8 border border-gray-800">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#f4511E]/10 border border-[#f4511E]/20 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-[#f4511E]" />
              <span className="text-sm text-[#f4511E]">Example Evaluation</span>
            </div>
            <h3 className="text-2xl font-bold">Victory! You scored 87/100</h3>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 mb-6">
            {[
              { label: 'Clarity', score: 18 },
              { label: 'Logic & Structure', score: 17 },
              { label: 'Evidence & Examples', score: 16 },
              { label: 'Persuasiveness', score: 19 },
              { label: 'Rebuttal', score: 17 },
            ].map((criteria, index) => (
              <div key={index} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-2">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#1a2332"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="#f4511E"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(criteria.score / 20) * 226} 226`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{criteria.score}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">{criteria.label}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-[#0d1117] rounded-lg p-4 border border-gray-800">
            <p className="text-gray-300 text-center italic">
              "Your arguments demonstrated strong clarity and persuasiveness with well-structured rebuttals. Consider incorporating more concrete evidence and examples to strengthen future debates and achieve even higher scores."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

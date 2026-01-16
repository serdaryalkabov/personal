import { MessageSquare, Sparkles, Play } from 'lucide-react';

import icon from '../images/icon.png'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4511E] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4511E] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex ites-center justify-center mb-6">
            <img src='../images/icon.png' className='rounded-4xl w-40' width={'140px'} alt="Icon" />
        </div>
        {/* <div className="flex items-center justify-center mb-6">
          <div className="bg-[#f4511E]/10 border border-[#f4511E]/20 rounded-full px-4 py-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#f4511E]" />
            <span className="text-sm text-[#f4511E]">Powered by GPT-4.1 mini</span>
          </div>
        </div> */}
        
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">
          MindDuel
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-gray-300 mb-4 max-w-3xl mx-auto">
          AI Debate Practice
        </p>
        
        <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Sharpen your debating skills against advanced AI. Choose your topics, voice your arguments, and get instant feedback on your performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://play.google.com/store/apps/details?id=com.serdaryalkabov.brightmint"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f4511E] hover:bg-[#f4511E]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2 shadow-lg shadow-[#f4511E]/20"
          >
            <Play className="w-5 h-5" />
            Download on Google Play
          </a>
          
          {/* <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Watch Demo
          </button> */}
        </div>
        
        {/* Hero visual */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-[#1a2332] to-[#0d1117] rounded-2xl p-8 border border-gray-800 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mock debate interface */}
              <div className="space-y-4">
                <div className="bg-[#f4511E]/10 border border-[#f4511E]/30 rounded-lg p-4">
                  <div className="text-sm text-[#f4511E] mb-2">You</div>
                  <div className="text-gray-200">Mandatory voting ensures everyone participates in democracy...</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-sm text-blue-400 mb-2">AI Opponent</div>
                  <div className="text-gray-200">However, forcing participation may reduce the quality of votes...</div>
                </div>
              </div>
              
              {/* Mock stats */}
              <div className="bg-[#0d1117] rounded-lg p-6 border border-gray-800">
                <div className="text-sm text-gray-400 mb-4">Round 3 / 10</div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Clarity</span>
                      <span className="text-[#f4511E]">18/20</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f4511E] w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Logic & Structure</span>
                      <span className="text-[#f4511E]">16/20</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f4511E] w-[80%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Persuasiveness</span>
                      <span className="text-[#f4511E]">17/20</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f4511E] w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

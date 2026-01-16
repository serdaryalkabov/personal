import { Download as DownloadIcon, Star } from 'lucide-react';

export function Download() {
  return (
    <section className="px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#f4511E] to-[#d63e16] rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white text-white" />
              ))}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Debating?
            </h2>
            
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of users sharpening their debate skills with AI. Download MindDuel today and start your journey to becoming a master debater.
            </p>
            
            <a 
              href="https://play.google.com/store/apps/details?id=com.serdaryalkabov.brightmint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#f4511E] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              <DownloadIcon className="w-5 h-5" />
              Download on Google Play
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Free to Download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Real-time Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

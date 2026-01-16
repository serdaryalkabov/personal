import { MessageSquare, } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-[#f4511E] rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div> */}
              <span className="text-xl font-bold">MindDuel</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              The ultimate platform for sharpening your debating skills against advanced AI. Engage, learn, and win.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div> */}
          </div>
          
          {/* <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Leaderboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#f4511E] transition-colors">Terms of Service</a></li>
            </ul>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2026 MindDuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

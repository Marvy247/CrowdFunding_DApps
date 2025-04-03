export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                CrowdFund
              </span>
            </div>
            <p className="text-sm leading-6">
              The world's most trusted decentralized crowdfunding platform for
              innovators and changemakers.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <span className="sr-only">Discord</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/campaigns"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Browse Campaigns
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/create-campaign"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Start a Campaign
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="300">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Creator Handbook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-sm font-semibold leading-6 text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          data-aos="fade-in"
          data-aos-delay="500"
        >
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CrowdFund DApp. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

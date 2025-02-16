import Link from 'next/link'
import { WavyBackground } from '@/components/ui/wavy-background'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl font-bold">SWITCH DIMENSION</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#features" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</Link>
              <Link href="#community" className="text-gray-300 hover:text-yellow-400 transition-colors">Community</Link>
              <Link href="#pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</Link>
              <Link href="/dashboard" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Wavy Background */}
      <section className="relative h-[600px] overflow-hidden">
        <WavyBackground 
          className="absolute inset-0"
          containerClassName="absolute inset-0"
          colors={['#2563eb', '#4f46e5', '#7c3aed', '#6366f1', '#3b82f6']}
          waveWidth={100}
          backgroundFill="#111827"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center w-full px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-6">
              Build with <span className="text-yellow-400">AI</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Master AI development, create powerful web applications, and join a community of innovators shaping the future of technology.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/signup" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors">
                Get Started
              </Link>
              <Link href="#learn-more" className="border border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-yellow-400 text-2xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">AI Development Training</h3>
              <p className="text-gray-300">Learn to build and deploy AI models, create intelligent agents, and integrate AI into your applications.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-yellow-400 text-2xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Web App Development</h3>
              <p className="text-gray-300">Master modern web development with AI integration, from frontend frameworks to backend services.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-yellow-400 text-2xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Community Access</h3>
              <p className="text-gray-300">Join a thriving community of developers, share knowledge, and collaborate on projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-300">Connect with fellow developers, share experiences, and grow together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Discussion Forums</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• AI Development Best Practices</li>
                <li>• Web App Architecture</li>
                <li>• Code Reviews & Feedback</li>
                <li>• Project Collaboration</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Community Events</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Weekly Workshops</li>
                <li>• Monthly Hackathons</li>
                <li>• Expert AMAs</li>
                <li>• Networking Sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Starter</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-6">$49/mo</div>
                <ul className="space-y-3 text-gray-300 text-left mb-6">
                  <li>• Basic AI Training</li>
                  <li>• Community Access</li>
                  <li>• Weekly Workshops</li>
                </ul>
                <button className="w-full bg-gray-800 text-yellow-400 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-yellow-400">
                  Get Started
                </button>
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border-2 border-yellow-400">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Professional</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-6">$99/mo</div>
                <ul className="space-y-3 text-gray-300 text-left mb-6">
                  <li>• Advanced AI Training</li>
                  <li>• Priority Community Access</li>
                  <li>• All Workshops</li>
                  <li>• 1-on-1 Mentoring</li>
                </ul>
                <button className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-6">Custom</div>
                <ul className="space-y-3 text-gray-300 text-left mb-6">
                  <li>• Custom AI Solutions</li>
                  <li>• Team Training</li>
                  <li>• Dedicated Support</li>
                  <li>• Custom Workshops</li>
                </ul>
                <button className="w-full bg-gray-800 text-yellow-400 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors border border-yellow-400">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">SWITCH DIMENSION</h4>
              <p className="text-gray-400">Empowering developers to build the future with AI.</p>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Forums</li>
                <li>Discord</li>
                <li>Events</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-100 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            © 2024 Switch Dimension. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
} 
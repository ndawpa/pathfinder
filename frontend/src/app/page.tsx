export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Welcome to Pathfinder
            </h1>
            <p className="text-xl text-gray-300">
              Your journey to efficient path planning starts here
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/login"
              className="px-8 py-4 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105 text-center"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-lg text-lg font-semibold hover:bg-blue-400/10 transition-all transform hover:scale-105 text-center"
            >
              Create Account
            </a>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Plan Routes</h3>
              <p className="text-gray-300">Create and optimize your journey paths efficiently</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Track Progress</h3>
              <p className="text-gray-300">Monitor your journey progress in real-time</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Analyze Data</h3>
              <p className="text-gray-300">Get insights from your path analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

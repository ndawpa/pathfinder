export default function Page() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Welcome to Pathfinder</h1>
        <p className="text-lg text-foreground/80">Your journey to efficient path planning starts here</p>
        
        <div className="flex gap-4">
          <a href="#" className="btn-primary">Sign In</a>
          <a href="#" className="btn-secondary">Create Account</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="card-modern p-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">Plan Routes</h2>
            <p className="text-foreground/70">Create and optimize your journey paths efficiently</p>
          </div>
          
          <div className="card-modern p-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">Track Progress</h2>
            <p className="text-foreground/70">Monitor your journey progress in real-time</p>
          </div>
          
          <div className="card-modern p-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">Analyze Data</h2>
            <p className="text-foreground/70">Get insights from your path analytics</p>
          </div>
        </div>
      </div>
    </main>
  );
}

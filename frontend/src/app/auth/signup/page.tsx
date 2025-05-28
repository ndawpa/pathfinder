export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background p-4">
      <div className="card-modern w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-primary mb-6">Create Account</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              className="input-modern"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="input-modern"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="input-modern"
              placeholder="Choose a password"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
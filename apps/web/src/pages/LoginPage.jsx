
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';
import { Server, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext.jsx';

const LoginPage = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', passwordConfirm: '' });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error('Please enter both email and password.');
      return;
    }
    
    setIsLoginLoading(true);
    try {
      await login(loginData.email, loginData.password);
      toast.success('Logged in successfully');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error('Invalid email or password');
    } finally {
      setIsLoginLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.passwordConfirm) {
      toast.error('Passwords do not match');
      return;
    }
    if (signupData.password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setIsSignupLoading(true);
    try {
      await signup(signupData);
      toast.success('Account created successfully');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error('Failed to create account. Email might be in use.');
    } finally {
      setIsSignupLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Account Access | ExtraRack</title>
      </Helmet>

      <main className="flex-grow flex items-center justify-center py-24 bg-background">
        <div className="container max-w-6xl">
          <div className="bg-card border border-border rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            
            {/* Login Side */}
            <div className="p-10 lg:p-16 border-b lg:border-b-0 lg:border-r border-border relative">
              <div className="mb-10 text-center lg:text-left">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-md">
                  <Server className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-3">Welcome Back</h2>
                <p className="text-muted-foreground">Log in to manage your infrastructure.</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="w-full p-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-semibold">Password</label>
                    <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                  </div>
                  <input 
                    type="password" 
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full p-4 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="rounded border-border bg-background" />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">Remember me for 30 days</label>
                </div>
                <Button type="submit" className="w-full h-14 text-lg font-bold" disabled={isLoginLoading}>
                  {isLoginLoading ? 'Logging in...' : 'Log In'}
                </Button>
              </form>
            </div>

            {/* Signup Side */}
            <div className="p-10 lg:p-16 bg-secondary/20">
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-3">Create Account</h2>
                <p className="text-muted-foreground">Deploy servers in seconds. No credit card required to register.</p>
              </div>

              <form onSubmit={handleSignupSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <input 
                    type="text" 
                    value={signupData.name}
                    onChange={(e) => setSignupData({...signupData, name: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <input 
                    type="email" 
                    value={signupData.email}
                    onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Password</label>
                    <input 
                      type="password" 
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Min 8 chars"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Confirm Password</label>
                    <input 
                      type="password" 
                      value={signupData.passwordConfirm}
                      onChange={(e) => setSignupData({...signupData, passwordConfirm: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Repeat password"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <input type="checkbox" id="terms" className="mt-1 rounded border-border bg-background" required />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                  </label>
                </div>
                <Button type="submit" variant="outline" className="w-full h-14 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white mt-4" disabled={isSignupLoading}>
                  {isSignupLoading ? 'Creating...' : <div className="flex items-center">Create Account <ArrowRight className="w-5 h-5 ml-2" /></div>}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

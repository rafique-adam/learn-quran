import React, { useState } from 'react';
import { BookOpen, Users, Video, Star, Check, Play, Calendar, Shield, Zap, Crown, Heart, Award, Clock, Volume2, Headphones, Mic } from 'lucide-react';

type Page = 'home' | 'auth' | 'pricing' | 'dashboard' | 'live-session' | 'admin' | 'recitations' | 'pair-reading';
type AuthMode = 'signin' | 'signup';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [authMode, setAuthMode] = useState<AuthMode>('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userTier, setUserTier] = useState<'free' | 'premium'>('free');
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
  const [subscriptionExpiry, setSubscriptionExpiry] = useState('2024-02-15');

  const NavBar = () => (
    <nav className="bg-white shadow-sm border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Lean Quran
              </span>
              <p className="text-xs text-gray-500 -mt-1">Learn • Listen • Grow</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
            >
              Home
            </button>
            {isSignedIn && (
              <>
                <button
                  onClick={() => setCurrentPage('recitations')}
                  className={`text-sm font-medium transition-colors ${currentPage === 'recitations' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  Recitations
                </button>
                <button
                  onClick={() => setCurrentPage('pair-reading')}
                  className={`text-sm font-medium transition-colors ${currentPage === 'pair-reading' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  Pair Reading
                </button>
                <button
                  onClick={() => setCurrentPage('dashboard')}
                  className={`text-sm font-medium transition-colors ${currentPage === 'dashboard' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
                >
                  My Progress
                </button>
              </>
            )}
            <button
              onClick={() => setCurrentPage('pricing')}
              className={`text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-emerald-600' : 'text-gray-600 hover:text-emerald-600'}`}
            >
              {hasActiveSubscription ? 'My Plan' : 'Get Premium'}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            {!isSignedIn ? (
              <>
                <button
                  onClick={() => { setCurrentPage('auth'); setAuthMode('signin'); }}
                  className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  Start Learning
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-1.5 rounded-full">
                  {userTier === 'premium' && <Crown className="w-4 h-4 text-yellow-500" />}
                  <span className="text-sm font-medium text-emerald-700 capitalize">
                    {userTier === 'premium' ? 'Premium Learner' : 'Free Learner'}
                  </span>
                </div>
                <button
                  onClick={() => setCurrentPage('admin')}
                  className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Quran the
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Fun & Easy Way!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of kids and youth learning beautiful Quran recitation through interactive sessions, 
              personalized guidance, and fun pair-reading activities. Perfect for ages 7-25! 🌟
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Start My Journey</span>
              </button>
              <button
                onClick={() => setCurrentPage('pricing')}
                className="border-2 border-emerald-300 text-emerald-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300"
              >
                View Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Kids & Youth Love Lean Quran? 💚</h2>
            <p className="text-xl text-gray-600">Interactive learning designed specifically for young minds</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Volume2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beautiful Recitations</h3>
              <p className="text-gray-600">Listen to melodious Quran recitations uploaded by your teacher. Perfect pronunciation and tajweed guidance!</p>
            </div>
            
            <div className="text-center group bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pair Reading Sessions</h3>
              <p className="text-gray-600">Join live one-on-one reading sessions with your teacher. Get personalized feedback and improve together!</p>
            </div>
            
            <div className="text-center group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Your Progress</h3>
              <p className="text-gray-600">Earn badges, track your learning journey, and celebrate milestones as you master Quran recitation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Benefits */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Age Group 🎯</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👶</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Kids (Ages 7-12)</h3>
                  <p className="text-gray-600">Fun and engaging approach</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Colorful and interactive interface</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Short, focused learning sessions</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Reward system with badges</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Simple Arabic pronunciation guide</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🧑‍🎓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Youth (Ages 13-25)</h3>
                  <p className="text-gray-600">Advanced learning features</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Advanced tajweed rules</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Flexible scheduling options</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Progress analytics and insights</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Peer learning opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Begin Your Quran Journey? 🚀</h2>
          <p className="text-xl text-emerald-100 mb-8">Join thousands of young learners who are mastering Quran recitation with us!</p>
          <button
            onClick={() => { setCurrentPage('auth'); setAuthMode('signup'); }}
            className="bg-white text-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto"
          >
            <BookOpen className="w-5 h-5" />
            <span>Start Learning Today</span>
          </button>
        </div>
      </section>
    </div>
  );

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {authMode === 'signin' ? 'Welcome Back! 👋' : 'Join Our Family! 🌟'}
            </h2>
            <p className="text-gray-600 mt-2">
              {authMode === 'signin' ? 'Continue your Quran learning journey' : 'Start your beautiful Quran learning adventure'}
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {authMode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                  <option>7-12 years (Kids)</option>
                  <option>13-17 years (Teens)</option>
                  <option>18-25 years (Young Adults)</option>
                </select>
              </div>
            )}

            <button
              type="button"
              onClick={() => { 
                setIsSignedIn(true); 
                setUserTier('premium');
                setHasActiveSubscription(true);
                setCurrentPage('dashboard'); 
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              {authMode === 'signin' ? 'Sign In & Continue Learning' : 'Create Account & Start'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {authMode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                className="text-emerald-600 hover:text-emerald-700 font-medium ml-1"
              >
                {authMode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PricingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Plan 📚</h2>
          <p className="text-xl text-gray-600">Affordable pricing designed for families</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Explorer</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$0<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">Perfect for trying out our platform</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Access to 3 sample recitations</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Basic progress tracking</li>
              <li className="flex items-center text-gray-400"><Shield className="w-5 h-5 text-gray-400 mr-3" />No pair reading sessions</li>
              <li className="flex items-center text-gray-400"><Shield className="w-5 h-5 text-gray-400 mr-3" />Limited recitation library</li>
            </ul>
            
            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors">
              Start Free
            </button>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-emerald-500 relative overflow-hidden">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                🌟 Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8 mt-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Learner</h3>
              <div className="text-4xl font-bold text-emerald-600 mb-2">$19<span className="text-lg text-gray-600">/month</span></div>
              <p className="text-gray-600">Complete Quran learning experience</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Full recitation library access</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Unlimited pair reading sessions</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Personalized learning path</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Progress certificates</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Priority teacher support</li>
              <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Advanced tajweed guidance</li>
            </ul>
            
            <button
              onClick={() => { 
                setUserTier('premium'); 
                setHasActiveSubscription(true);
                setCurrentPage('dashboard'); 
              }}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Premium Journey
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">💝 Special family discounts available for multiple children</p>
          <p className="text-sm text-gray-500">All plans include 7-day free trial • Cancel anytime</p>
        </div>
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assalamu Alaikum! 🌙</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Continue your beautiful Quran learning journey</p>
            {!hasActiveSubscription && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2">
                <p className="text-red-700 text-sm font-medium">
                  Subscription expired on {subscriptionExpiry}
                  <button 
                    onClick={() => setCurrentPage('pricing')}
                    className="ml-2 text-red-600 hover:text-red-800 underline"
                  >
                    Renew now
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Progress Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Recitations Completed</p>
                <p className="text-3xl font-bold text-blue-600">24</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pair Sessions</p>
                <p className="text-3xl font-bold text-emerald-600">12</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Learning Streak</p>
                <p className="text-3xl font-bold text-purple-600">7 days</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-yellow-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Badges Earned</p>
                <p className="text-3xl font-bold text-yellow-600">5</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions 🚀</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentPage('recitations')}
                  className={`p-6 rounded-xl text-left transition-all duration-200 transform hover:scale-105 ${
                    hasActiveSubscription 
                      ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg' 
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!hasActiveSubscription}
                >
                  <Volume2 className="w-8 h-8 mb-3" />
                  <h3 className="font-bold text-lg">Listen to Recitations</h3>
                  <p className="text-sm opacity-90">Beautiful Quran recitations</p>
                  {!hasActiveSubscription && <p className="text-xs text-red-600 mt-2">Premium required</p>}
                </button>
                
                <button
                  onClick={() => setCurrentPage('pair-reading')}
                  className={`p-6 rounded-xl text-left transition-all duration-200 transform hover:scale-105 ${
                    hasActiveSubscription 
                      ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white hover:shadow-lg' 
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!hasActiveSubscription}
                >
                  <Users className="w-8 h-8 mb-3" />
                  <h3 className="font-bold text-lg">Book Pair Reading</h3>
                  <p className="text-sm opacity-90">One-on-one with teacher</p>
                  {!hasActiveSubscription && <p className="text-xs text-red-600 mt-2">Premium required</p>}
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Recitations 🎵</h2>
                <button 
                  onClick={() => setCurrentPage('recitations')}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Surah Al-Fatiha', reciter: 'Sheikh Ahmad', duration: '2:30', thumbnail: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' },
                  { title: 'Surah Al-Baqarah (1-10)', reciter: 'Sheikh Ahmad', duration: '8:45', thumbnail: 'https://images.pexels.com/photos/8111348/pexels-photo-8111348.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' },
                  { title: 'Surah Yasin', reciter: 'Sheikh Ahmad', duration: '15:20', thumbnail: 'https://images.pexels.com/photos/8111344/pexels-photo-8111344.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop' }
                ].map((recitation, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-xl transition-colors group ${
                    hasActiveSubscription 
                      ? 'hover:bg-emerald-50 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed bg-gray-50'
                  }`}>
                    <div className="relative">
                      <img src={recitation.thumbnail} alt={recitation.title} className="w-20 h-16 object-cover rounded-lg" />
                      <div className={`absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center transition-opacity ${
                        hasActiveSubscription 
                          ? 'opacity-0 group-hover:opacity-100' 
                          : 'opacity-100'
                      }`}>
                        {hasActiveSubscription ? (
                          <Play className="w-6 h-6 text-white" />
                        ) : (
                          <Shield className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{recitation.title}</h3>
                      <p className="text-sm text-gray-600">by {recitation.reciter} • {recitation.duration}</p>
                      {!hasActiveSubscription && (
                        <p className="text-xs text-red-600 mt-1">Premium subscription required</p>
                      )}
                    </div>
                    {hasActiveSubscription && <Headphones className="w-5 h-5 text-emerald-500" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Sessions 📅</h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-4 rounded-r-xl">
                  <h3 className="font-semibold text-gray-900">Pair Reading Session</h3>
                  <p className="text-sm text-gray-600 mt-1">Tomorrow at 4:00 PM</p>
                  <p className="text-xs text-emerald-600 mt-1">With Sheikh Ahmad</p>
                  {hasActiveSubscription ? (
                    <button
                      onClick={() => setCurrentPage('live-session')}
                      className="mt-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                    >
                      Join Session →
                    </button>
                  ) : (
                    <p className="mt-2 text-red-600 text-sm">Premium required</p>
                  )}
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-r-xl">
                  <h3 className="font-semibold text-gray-900">Tajweed Workshop</h3>
                  <p className="text-sm text-gray-600 mt-1">Friday at 6:00 PM</p>
                  <p className="text-xs text-blue-600 mt-1">Group session</p>
                  {hasActiveSubscription ? (
                    <button className="mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Set Reminder →
                    </button>
                  ) : (
                    <p className="mt-2 text-red-600 text-sm">Premium required</p>
                  )}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-6">
              <h3 className="font-bold text-lg mb-3">🏆 Latest Achievement</h3>
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">7-Day Streak!</p>
                    <p className="text-sm opacity-90">Keep up the great work!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrade Prompt */}
            {!hasActiveSubscription && (
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Unlock Full Access 🔓</h3>
                <p className="text-emerald-100 text-sm mb-4">Get unlimited access to all recitations and pair reading sessions</p>
                <button
                  onClick={() => setCurrentPage('pricing')}
                  className="bg-white text-emerald-600 px-4 py-2 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-200 transform hover:scale-105 w-full"
                >
                  Upgrade to Premium
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const RecitationsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quran Recitations 🎵</h1>
          <p className="text-gray-600">Beautiful recitations to help you learn proper pronunciation and tajweed</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {['All Surahs', 'Short Surahs', 'Long Surahs', 'Favorites', 'Recently Added'].map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recitations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Surah Al-Fatiha', arabic: 'سورة الفاتحة', verses: 7, duration: '2:30', difficulty: 'Beginner', thumbnail: 'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
            { title: 'Surah Al-Baqarah (1-10)', arabic: 'سورة البقرة', verses: 10, duration: '8:45', difficulty: 'Intermediate', thumbnail: 'https://images.pexels.com/photos/8111348/pexels-photo-8111348.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
            { title: 'Surah Al-Ikhlas', arabic: 'سورة الإخلاص', verses: 4, duration: '1:15', difficulty: 'Beginner', thumbnail: 'https://images.pexels.com/photos/8111344/pexels-photo-8111344.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
            { title: 'Surah An-Nas', arabic: 'سورة الناس', verses: 6, duration: '1:45', difficulty: 'Beginner', thumbnail: 'https://images.pexels.com/photos/8111350/pexels-photo-8111350.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
            { title: 'Surah Al-Falaq', arabic: 'سورة الفلق', verses: 5, duration: '1:30', difficulty: 'Beginner', thumbnail: 'https://images.pexels.com/photos/8111355/pexels-photo-8111355.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' },
            { title: 'Surah Yasin', arabic: 'سورة يس', verses: 83, duration: '15:20', difficulty: 'Advanced', thumbnail: 'https://images.pexels.com/photos/8111346/pexels-photo-8111346.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop' }
          ].map((recitation, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img src={recitation.thumbnail} alt={recitation.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{recitation.title}</h3>
                  <p className="text-sm opacity-90">{recitation.arabic}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    recitation.difficulty === 'Beginner' ? 'bg-green-500 text-white' :
                    recitation.difficulty === 'Intermediate' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {recitation.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{recitation.verses} verses</span>
                    <span>{recitation.duration}</span>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                
                {hasActiveSubscription ? (
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Listen Now</span>
                  </button>
                ) : (
                  <div className="text-center">
                    <div className="bg-gray-100 text-gray-500 py-3 rounded-xl font-semibold mb-2 flex items-center justify-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Premium Required</span>
                    </div>
                    <button
                      onClick={() => setCurrentPage('pricing')}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Upgrade to unlock →
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PairReadingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Pair Reading Sessions 👥</h1>
          <p className="text-gray-600">Book one-on-one sessions with Sheikh Ahmad for personalized Quran learning</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Time Slots */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Available Time Slots 📅</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { day: 'Today', date: 'Dec 15', time: '4:00 PM - 4:30 PM', available: true },
                  { day: 'Today', date: 'Dec 15', time: '6:00 PM - 6:30 PM', available: false },
                  { day: 'Tomorrow', date: 'Dec 16', time: '3:00 PM - 3:30 PM', available: true },
                  { day: 'Tomorrow', date: 'Dec 16', time: '4:00 PM - 4:30 PM', available: true },
                  { day: 'Friday', date: 'Dec 17', time: '5:00 PM - 5:30 PM', available: true },
                  { day: 'Friday', date: 'Dec 17', time: '6:00 PM - 6:30 PM', available: false }
                ].map((slot, index) => (
                  <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    slot.available 
                      ? 'border-emerald-200 bg-emerald-50 hover:border-emerald-300 cursor-pointer' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{slot.day}</p>
                        <p className="text-sm text-gray-600">{slot.date}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        slot.available 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {slot.available ? 'Available' : 'Booked'}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{slot.time}</p>
                    {slot.available ? (
                      hasActiveSubscription ? (
                        <button
                          onClick={() => setCurrentPage('live-session')}
                          className="w-full bg-emerald-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                        >
                          Book Session
                        </button>
                      ) : (
                        <button
                          onClick={() => setCurrentPage('pricing')}
                          className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg text-sm font-medium"
                        >
                          Premium Required
                        </button>
                      )
                    ) : (
                      <button disabled className="w-full bg-gray-200 text-gray-500 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                        Not Available
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Session Guidelines */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Session Guidelines 📋</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Prepare Your Mushaf</h3>
                    <p className="text-gray-600 text-sm">Have your Quran ready and choose the surah you'd like to practice</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Join 5 Minutes Early</h3>
                    <p className="text-gray-600 text-sm">This helps ensure a smooth start to your session</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Practice Together</h3>
                    <p className="text-gray-600 text-sm">Sheikh Ahmad will guide you through proper pronunciation and tajweed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-yellow-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ask Questions</h3>
                    <p className="text-gray-600 text-sm">Don't hesitate to ask about pronunciation, meaning, or tajweed rules</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Teacher Profile */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">SA</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900">Sheikh Ahmad</h3>
                <p className="text-gray-600 text-sm mb-4">Certified Quran Teacher</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>500+ Students</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Award className="w-4 h-4 text-blue-500" />
                    <span>10+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Upcoming Sessions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Your Upcoming Sessions</h3>
              
              <div className="space-y-3">
                <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  <p className="font-semibold text-emerald-900 text-sm">Tomorrow at 4:00 PM</p>
                  <p className="text-emerald-700 text-xs">Surah Al-Baqarah practice</p>
                </div>
                
                <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
                  <p className="font-semibold text-blue-900 text-sm">Friday at 5:00 PM</p>
                  <p className="text-blue-700 text-xs">Tajweed rules review</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-3">💡 Quick Tip</h3>
              <p className="text-sm opacity-90">
                Practice reading the verses you want to work on before your session. This helps make the most of your time with Sheikh Ahmad!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LiveSession = () => (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-6rem)]">
          {/* Main Video Area */}
          <div className="lg:col-span-3 bg-black rounded-2xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                LIVE PAIR READING
              </div>
            </div>
            
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button className="bg-black bg-opacity-50 text-white p-2 rounded-lg hover:bg-opacity-70 transition-colors">
                <Video className="w-5 h-5" />
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                End Session
              </button>
            </div>
            
            <div className="w-full h-full bg-gradient-to-br from-emerald-800 to-teal-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-16 h-16 opacity-80" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Pair Reading Session Active</h3>
                <p className="text-emerald-200 mb-4">Reading Surah Al-Fatiha with Sheikh Ahmad</p>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>15:30 elapsed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>1-on-1 Session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-2xl flex flex-col">
            {/* Session Info */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                Current Session
              </h3>
              <div className="bg-emerald-50 p-3 rounded-xl">
                <p className="font-semibold text-emerald-900">Surah Al-Fatiha</p>
                <p className="text-emerald-700 text-sm">Verses 1-7</p>
                <p className="text-emerald-600 text-xs mt-1">Focus: Proper pronunciation</p>
              </div>
            </div>

            {/* Teacher & Student */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Participants</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    SA
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sheikh Ahmad</p>
                    <p className="text-xs text-gray-600">Teacher</p>
                  </div>
                  <Crown className="w-4 h-4 text-yellow-500 ml-auto" />
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    YU
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">You</p>
                    <p className="text-xs text-gray-600">Student</p>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
                </div>
              </div>
            </div>

            {/* Session Notes */}
            <div className="flex-1 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Session Notes 📝</h3>
              <div className="space-y-3 h-48 overflow-y-auto mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Sheikh Ahmad</p>
                  <p className="text-sm text-blue-700 mt-1">Great improvement in your tajweed! Focus on the 'Alif' pronunciation.</p>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-emerald-900">Sheikh Ahmad</p>
                  <p className="text-sm text-emerald-700 mt-1">Remember to pause at the end of each verse. Well done!</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard 👨‍🏫</h1>
          <p className="text-gray-600">Manage your Quran learning platform</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            <Volume2 className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Upload Recitation</h3>
            <p className="text-blue-100 text-sm">Add new Quran recitations</p>
          </button>
          
          <button
            onClick={() => setCurrentPage('live-session')}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Users className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Start Pair Session</h3>
            <p className="text-emerald-100 text-sm">Begin one-on-one reading</p>
          </button>
          
          <button className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-2xl hover:shadow-lg transition-all duration-200 transform hover:scale-105">
            <Calendar className="w-8 h-8 mb-3" />
            <h3 className="font-bold text-lg">Manage Schedule</h3>
            <p className="text-purple-100 text-sm">Set available time slots</p>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Session Management */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Session Management 📅</h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Available Time Slots</h3>
                  <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">
                    + Add Slot
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <span className="text-sm">Today 4:00 PM - 4:30 PM</span>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Available</span>
                      <button className="text-emerald-600 hover:text-emerald-700 text-xs">Start Now</button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm">Tomorrow 3:00 PM - 3:30 PM</span>
                    <div className="flex space-x-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Booked</span>
                      <button className="text-blue-600 hover:text-blue-700 text-xs">View</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Session Requests</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Ahmad (Age 12)</p>
                      <p className="text-xs text-gray-600">Requested: Surah Al-Fatiha practice</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                        Accept
                      </button>
                      <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-400">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Library */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recitation Library 🎵</h2>
            <div className="space-y-4">
              {[
                { title: 'Surah Al-Fatiha', listens: 1240, duration: '2:30', status: 'Published' },
                { title: 'Surah Al-Baqarah (1-10)', listens: 856, duration: '8:45', status: 'Published' },
                { title: 'Surah Al-Ikhlas', listens: 632, duration: '1:15', status: 'Draft' }
              ].map((recitation, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div>
                    <h3 className="font-semibold text-gray-900">{recitation.title}</h3>
                    <p className="text-sm text-gray-600">{recitation.listens} listens • {recitation.duration}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-2 py-1 rounded ${
                      recitation.status === 'Published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {recitation.status}
                    </span>
                    <div className="flex space-x-1">
                      <button className="text-blue-600 hover:text-blue-700 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Management */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Student Management 👨‍🎓</h2>
            <div className="space-y-4">
              {[
                { name: 'Fatima Ahmed', age: 10, tier: 'Premium', progress: 85, lastSession: '2 days ago' },
                { name: 'Omar Hassan', age: 15, tier: 'Premium', progress: 72, lastSession: '1 week ago' },
                { name: 'Aisha Ali', age: 8, tier: 'Free', progress: 45, lastSession: 'Never' }
              ].map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-600">Age {student.age} • {student.tier}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-2 bg-emerald-500 rounded-full" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">{student.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Last session</p>
                    <p className="text-sm font-medium">{student.lastSession}</p>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm mt-1">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Analytics 📊</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900">247</p>
                  <p className="text-xs text-green-600">+12 this month</p>
                </div>
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Sessions</p>
                  <p className="text-3xl font-bold text-gray-900">18</p>
                  <p className="text-xs text-blue-600">This week</p>
                </div>
                <Video className="w-8 h-8 text-blue-500" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">$4,680</p>
                  <p className="text-xs text-purple-600">+8% from last month</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      case 'auth':
        return <AuthPage />;
      case 'pricing':
        return <PricingPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'recitations':
        return <RecitationsPage />;
      case 'pair-reading':
        return <PairReadingPage />;
      case 'live-session':
        return <LiveSession />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      {renderPage()}
    </div>
  );
}

export default App;
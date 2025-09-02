import React, { useState } from 'react';
import { BookOpen, Users, Play, Star, User, Mail, Lock, Calendar, Crown, LogIn, Zap, Award } from 'lucide-react';

type Page = 'home' | 'login' | 'signup' | 'dashboard' | 'salat-videos';
type UserType = 'child' | 'adult' | null;
type LearningLevel = 'beginner' | 'advanced' | 'hifz' | null;
type PaymentStatus = 'unpaid' | 'paid';

interface Session {
  id: string;
  name: string;
  day: string;
  time: string;
  endTime: string;
  level: LearningLevel;
  ageGroup: UserType;
  spotsLeft: number;
  description: string;
}

interface User {
  name: string;
  email: string;
  userType: UserType;
  learningLevel: LearningLevel;
  selectedSessions: string[];
  paymentStatus: PaymentStatus;
}

const allSessions: Session[] = [
  {
    id: '1',
    name: 'Yarsanal Quran Basics',
    day: 'Monday',
    time: '14:00 GMT',
    endTime: '15:00 GMT',
    level: 'beginner',
    ageGroup: 'child',
    spotsLeft: 3,
    description: 'Learn Arabic letters and basic pronunciation'
  },
  {
    id: '2',
    name: 'Advanced Tajweed Class',
    day: 'Wednesday',
    time: '19:00 GMT',
    endTime: '20:30 GMT',
    level: 'advanced',
    ageGroup: 'adult',
    spotsLeft: 2,
    description: 'Perfect your recitation with advanced Tajweed rules'
  },
  {
    id: '3',
    name: 'Hifz Memorization Circle',
    day: 'Friday',
    time: '16:00 GMT',
    endTime: '18:00 GMT',
    level: 'hifz',
    ageGroup: 'child',
    spotsLeft: 1,
    description: 'Systematic Quran memorization with retention techniques'
  },
  {
    id: '4',
    name: 'Adult Beginner Circle',
    day: 'Saturday',
    time: '10:00 GMT',
    endTime: '11:00 GMT',
    level: 'beginner',
    ageGroup: 'adult',
    spotsLeft: 5,
    description: 'Start your Quran journey with supportive adult community'
  },
  {
    id: '5',
    name: 'Youth Advanced Reading',
    day: 'Sunday',
    time: '15:00 GMT',
    endTime: '16:30 GMT',
    level: 'advanced',
    ageGroup: 'child',
    spotsLeft: 4,
    description: 'Advanced recitation practice for young learners'
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userType, setUserType] = useState<UserType>(null);
  const [learningLevel, setLearningLevel] = useState<LearningLevel>(null);
  const [selectedSessions, setSelectedSessions] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Lean Quran
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('salat-videos')}
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Free Salat Videos
              </button>
              <button 
                onClick={() => setCurrentPage('login')}
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Learn Quran with
              <span className="block bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                Joy & Purpose
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Interactive Quran learning platform designed for children and adults. 
              From Yarsanal Quran basics to advanced recitation and Hifz memorization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Learning Today
              </button>
              <button 
                onClick={() => setCurrentPage('salat-videos')}
                className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-200"
              >
                Watch Free Salat Videos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Age Groups Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Age Group
            </h2>
            <p className="text-xl text-gray-600">
              Tailored learning experiences for children and adults
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Children Section */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Children (6-17)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-pink-500" />
                  <span>Fun, interactive learning with games</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-pink-500" />
                  <span>Age-appropriate teaching methods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-pink-500" />
                  <span>Colorful progress tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-pink-500" />
                  <span>Reward system with badges</span>
                </li>
              </ul>
            </div>

            {/* Adults Section */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Adults (18+)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-500" />
                  <span>Structured learning programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-500" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-500" />
                  <span>Advanced recitation techniques</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-emerald-500" />
                  <span>Detailed progress analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Levels Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600">
              Structured programs for every level of Quran learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Beginner</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for those starting their Yarsanal Quran journey. Learn Arabic letters, basic pronunciation, and simple verses.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Arabic alphabet mastery</p>
                  <p>✓ Basic pronunciation rules</p>
                  <p>✓ Short Surahs practice</p>
                  <p>✓ Interactive exercises</p>
                </div>
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced</h3>
                <p className="text-gray-600 mb-6">
                  For students who completed Yarsanal Quran. Focus on Tajweed rules, fluent recitation, and deeper understanding.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Advanced Tajweed rules</p>
                  <p>✓ Fluent recitation practice</p>
                  <p>✓ Meaning and interpretation</p>
                  <p>✓ Beautiful recitation styles</p>
                </div>
              </div>
            </div>

            {/* Hifz */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hifz</h3>
                <p className="text-gray-600 mb-6">
                  Memorization program for dedicated students. Systematic approach to memorizing the entire Quran with proper retention techniques.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>✓ Structured memorization plan</p>
                  <p>✓ Retention techniques</p>
                  <p>✓ Regular revision sessions</p>
                  <p>✓ Progress tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free Salat Videos Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free Salat Videos 🕌
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Learn the proper way to perform Salat - completely free, no signup required
            </p>
            <button 
              onClick={() => setCurrentPage('salat-videos')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Play className="w-5 h-5 inline mr-2" />
              Watch Salat Videos
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                <p className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-500">/month</span></p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Access to all Salat videos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>No signup required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-400">No live sessions</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setCurrentPage('salat-videos')}
                  className="w-full border-2 border-emerald-500 text-emerald-600 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Start Watching
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <p className="text-4xl font-bold mb-6">$19<span className="text-lg opacity-80">/month</span></p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>All Salat videos + Quran recitations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Live pair reading sessions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Personal progress tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Direct teacher feedback</span>
                  </li>
                </ul>
                <button 
                  onClick={() => setCurrentPage('signup')}
                  className="w-full bg-white text-emerald-600 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Continue your Quran learning journey</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => setCurrentPage('signup')}
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Sign up here
            </button>
          </p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-gray-500 hover:text-gray-700 text-sm mt-2"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );

  const SignupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 pt-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Join Lean Quran</h2>
          <p className="text-xl text-gray-600">Start your personalized Quran learning journey</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8">
          {/* Step 1: Age Group Selection */}
          {!userType && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Age Group</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <button 
                  onClick={() => setUserType('child')}
                  className="p-8 border-2 border-gray-200 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-200 group"
                >
                  <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Children & Youth</h4>
                  <p className="text-gray-600">Ages 6-17</p>
                </button>
                <button 
                  onClick={() => setUserType('adult')}
                  className="p-8 border-2 border-gray-200 rounded-2xl hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-200 group"
                >
                  <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Adults</h4>
                  <p className="text-gray-600">Ages 18+</p>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Learning Level Selection */}
          {userType && !learningLevel && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Learning Level</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <button 
                  onClick={() => setLearningLevel('beginner')}
                  className="p-6 border-2 border-gray-200 rounded-2xl hover:border-green-400 hover:bg-green-50 transition-all duration-200 group"
                >
                  <BookOpen className="w-10 h-10 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Beginner</h4>
                  <p className="text-sm text-gray-600">Starting Yarsanal Quran</p>
                </button>
                <button 
                  onClick={() => setLearningLevel('advanced')}
                  className="p-6 border-2 border-gray-200 rounded-2xl hover:border-teal-400 hover:bg-teal-50 transition-all duration-200 group"
                >
                  <Award className="w-10 h-10 text-teal-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Advanced</h4>
                  <p className="text-sm text-gray-600">Completed Yarsanal Quran</p>
                </button>
                <button 
                  onClick={() => setLearningLevel('hifz')}
                  className="p-6 border-2 border-gray-200 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-200 group"
                >
                  <Zap className="w-10 h-10 text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Hifz</h4>
                  <p className="text-sm text-gray-600">Memorization program</p>
                </button>
              </div>
              <button 
                onClick={() => setUserType(null)}
                className="mt-6 text-gray-500 hover:text-gray-700"
              >
                ← Back to age selection
              </button>
            </div>
          )}

          {/* Step 3: Session Selection */}
          {userType && learningLevel && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Select Your Sessions
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Choose the sessions that fit your schedule. Times shown in your local timezone.
              </p>
              
              <div className="space-y-4 mb-8">
                {allSessions
                  .filter(session => 
                    session.ageGroup === userType && 
                    session.level === learningLevel
                  )
                  .map(session => (
                    <div 
                      key={session.id}
                      className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 ${
                        selectedSessions.includes(session.id)
                          ? 'border-emerald-400 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-25'
                      }`}
                      onClick={() => {
                        if (selectedSessions.includes(session.id)) {
                          setSelectedSessions(selectedSessions.filter(id => id !== session.id));
                        } else {
                          setSelectedSessions([...selectedSessions, session.id]);
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{session.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{session.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{session.day}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{session.time} - {session.endTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500 mb-1">Spots left</div>
                          <div className="text-lg font-bold text-emerald-600">{session.spotsLeft}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                
                {/* Show all sessions if none match the filter */}
                {allSessions.filter(session => 
                  session.ageGroup === userType && 
                  session.level === learningLevel
                ).length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No sessions available for your selected level yet.</p>
                    <p className="text-sm text-gray-500">Here are all available sessions:</p>
                    <div className="mt-4 space-y-4">
                      {allSessions.map(session => (
                        <div 
                          key={session.id}
                          className={`p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 ${
                            selectedSessions.includes(session.id)
                              ? 'border-emerald-400 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-25'
                          }`}
                          onClick={() => {
                            if (selectedSessions.includes(session.id)) {
                              setSelectedSessions(selectedSessions.filter(id => id !== session.id));
                            } else {
                              setSelectedSessions([...selectedSessions, session.id]);
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">{session.name}</h4>
                              <p className="text-sm text-gray-600 mb-3">{session.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{session.day}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{session.time} - {session.endTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Users className="w-4 h-4" />
                                  <span className="capitalize">{session.ageGroup}s</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Award className="w-4 h-4" />
                                  <span className="capitalize">{session.level}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm text-gray-500 mb-1">Spots left</div>
                              <div className="text-lg font-bold text-emerald-600">{session.spotsLeft}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Account Details Form */}
              <div className="border-t border-gray-200 pt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Account Details</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input 
                      type="password" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Enter your age"
                      min={userType === 'child' ? 6 : 18}
                      max={userType === 'child' ? 17 : 100}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <button 
                  onClick={() => setLearningLevel(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ← Back to level selection
                </button>
                <button 
                  onClick={() => {
                    // Create user account (mock)
                    const newUser: User = {
                      name: 'Student Name', // In real app, get from form
                      email: 'student@email.com', // In real app, get from form
                      userType: userType!,
                      learningLevel: learningLevel!,
                      selectedSessions,
                      paymentStatus: 'unpaid'
                    };
                    setCurrentUser(newUser);
                    setCurrentPage('dashboard');
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  disabled={selectedSessions.length === 0}
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={() => setCurrentPage('login')}
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Sign in here
            </button>
          </p>
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-gray-500 hover:text-gray-700 text-sm mt-2"
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );

  const SalatVideosPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Lean Quran
              </span>
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setCurrentPage('login')}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Login
              </button>
              <button 
                onClick={() => setCurrentPage('signup')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-200"
              >
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Salat Videos 🕌
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn the proper way to perform your daily prayers - completely free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Salat Videos */}
          {[
            { title: 'How to Perform Fajr Prayer', duration: '8:45', difficulty: 'Beginner' },
            { title: 'Dhuhr Prayer Step by Step', duration: '12:30', difficulty: 'Beginner' },
            { title: 'Asr Prayer with Tajweed', duration: '10:15', difficulty: 'Intermediate' },
            { title: 'Maghrib Prayer Guide', duration: '9:20', difficulty: 'Beginner' },
            { title: 'Isha Prayer Complete', duration: '14:10', difficulty: 'Intermediate' },
            { title: 'Friday Jummah Prayer', duration: '18:45', difficulty: 'Advanced' }
          ].map((video, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <Play className="w-16 h-16 text-emerald-600" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{video.duration}</span>
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    video.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    video.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {video.difficulty}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-emerald-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want More? Upgrade to Premium! ✨
            </h3>
            <p className="text-gray-600 mb-6">
              Get access to live Quran reading sessions, personalized feedback, and hundreds of recitation videos.
            </p>
            <button 
              onClick={() => setCurrentPage('signup')}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Upgrade to Premium - $19/month
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'salat-videos':
        return <SalatVideosPage />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <HomePage />;
    }
  };

  const DashboardPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Lean Quran
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-4 h-4" />
                <span>{currentUser?.name || 'Student'}</span>
              </div>
              <button 
                onClick={() => {
                  setCurrentUser(null);
                  setCurrentPage('home');
                  setUserType(null);
                  setLearningLevel(null);
                  setSelectedSessions([]);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Payment Status Banner */}
        {currentUser?.paymentStatus === 'unpaid' && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Unlock Premium Features! 🌟</h3>
                  <p className="opacity-90">Get access to live sessions and Quran recitations for just $19/month</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  // Mock payment success
                  if (currentUser) {
                    setCurrentUser({...currentUser, paymentStatus: 'paid'});
                  }
                }}
                className="bg-white text-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {currentUser?.name || 'Student'}! 🌙
          </h1>
          <p className="text-xl text-gray-600">
            Continue your beautiful Quran learning journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Sessions Attended</p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentUser?.paymentStatus === 'paid' ? '12' : '0'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Learning Streak</p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentUser?.paymentStatus === 'paid' ? '7 days' : '0 days'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Badges Earned</p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentUser?.paymentStatus === 'paid' ? '5' : '0'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Surahs Learned</p>
                <p className="text-2xl font-bold text-gray-900">
                  {currentUser?.paymentStatus === 'paid' ? '8' : '0'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quran Recitations Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Quran Recitations 📖</h2>
                {currentUser?.paymentStatus === 'unpaid' && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Premium Required
                  </div>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Al-Fatiha', arabic: 'الفاتحة', verses: 7, duration: '2:30' },
                  { name: 'Al-Baqarah', arabic: 'البقرة', verses: 286, duration: '45:20' },
                  { name: 'Al-Ikhlas', arabic: 'الإخلاص', verses: 4, duration: '1:15' },
                  { name: 'An-Nas', arabic: 'الناس', verses: 6, duration: '1:45' }
                ].map((surah, index) => (
                  <div key={index} className="relative">
                    <div className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                      currentUser?.paymentStatus === 'paid' 
                        ? 'border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 cursor-pointer' 
                        : 'border-gray-200 opacity-60'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{surah.name}</h3>
                        <span className="text-xl text-emerald-600">{surah.arabic}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{surah.verses} verses</span>
                        <span>{surah.duration}</span>
                      </div>
                      {currentUser?.paymentStatus === 'paid' && (
                        <button className="mt-3 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                          <Play className="w-4 h-4 inline mr-2" />
                          Listen
                        </button>
                      )}
                    </div>
                    {currentUser?.paymentStatus === 'unpaid' && (
                      <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Premium Required</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Live Sessions Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Your Live Sessions 🎯</h2>
                {currentUser?.paymentStatus === 'unpaid' && (
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Premium Required
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                {currentUser?.selectedSessions.map(sessionId => {
                  const session = allSessions.find(s => s.id === sessionId);
                  if (!session) return null;
                  
                  return (
                    <div key={sessionId} className="relative">
                      <div className={`p-4 border-2 rounded-xl ${
                        currentUser?.paymentStatus === 'paid' 
                          ? 'border-emerald-200 bg-emerald-50' 
                          : 'border-gray-200 opacity-60'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{session.name}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{session.day}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{session.time} - {session.endTime}</span>
                              </div>
                            </div>
                          </div>
                          {currentUser?.paymentStatus === 'paid' && (
                            <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                              Join Session
                            </button>
                          )}
                        </div>
                      </div>
                      {currentUser?.paymentStatus === 'unpaid' && (
                        <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
                          <div className="text-center">
                            <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-700">Premium Required</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {currentUser?.selectedSessions.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No sessions selected yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setCurrentPage('salat-videos')}
                  className="w-full flex items-center space-x-3 p-3 bg-emerald-50 text-emerald-700 rounded-xl hover:bg-emerald-100 transition-colors"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Salat Videos (Free)</span>
                </button>
                
                <div className="relative">
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                      currentUser?.paymentStatus === 'paid'
                        ? 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={currentUser?.paymentStatus === 'unpaid'}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Browse Recitations</span>
                  </button>
                  {currentUser?.paymentStatus === 'unpaid' && (
                    <Crown className="w-4 h-4 text-yellow-500 absolute top-3 right-3" />
                  )}
                </div>
                
                <div className="relative">
                  <button 
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                      currentUser?.paymentStatus === 'paid'
                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                    disabled={currentUser?.paymentStatus === 'unpaid'}
                  >
                    <Users className="w-5 h-5" />
                    <span>Join Live Session</span>
                  </button>
                  {currentUser?.paymentStatus === 'unpaid' && (
                    <Crown className="w-4 h-4 text-yellow-500 absolute top-3 right-3" />
                  )}
                </div>
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Progress</h3>
              {currentUser?.paymentStatus === 'paid' ? (
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Yarsanal Quran Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Tajweed Mastery</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Recent Achievements 🏆</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                        <Star className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm text-gray-700">Completed Al-Fatiha perfectly!</span>
                      </div>
                      <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                        <Award className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-700">7-day learning streak!</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4 opacity-50" />
                  <p className="text-gray-500 mb-4">Progress tracking available with Premium</p>
                  <button 
                    onClick={() => {
                      if (currentUser) {
                        setCurrentUser({...currentUser, paymentStatus: 'paid'});
                      }
                    }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200"
                  >
                    Upgrade Now
                  </button>
                </div>
              )}
            </div>

            {/* Upcoming Sessions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
              {currentUser?.paymentStatus === 'paid' ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Advanced Tajweed</p>
                      <p className="text-sm text-gray-600">Tomorrow at 19:00 GMT</p>
                    </div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Hifz Circle</p>
                      <p className="text-sm text-gray-600">Friday at 16:00 GMT</p>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Clock className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500">Session scheduling available with Premium</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return renderPage();
}

export default App;
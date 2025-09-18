import React, { useState } from 'react';
import { Home, Settings, Sun, Moon, Info, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Dashboard = () => {
  const [isDark, setIsDark] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleVoiceInput = () => {
    console.log('Voice input activated');
    // Voice Functionality will be added here
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900' 
        : 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700'
    }`}>
      {}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 backdrop-blur-sm bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>HOME</span>
              </Button>
              
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>SETTINGS</span>
              </Button>
              
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                <span>{isDark ? 'LIGHT MODE' : 'DARK MODE'}</span>
              </Button>
              
              <Button
                variant="ghost"
                onClick={() => setShowAbout(!showAbout)}
                className="text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Info className="w-4 h-4" />
                <span>ABOUT US</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      {showAbout && (
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 animate-fade-in">
          <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/10 border-white/20">
            <CardContent className="p-6">
              <p className="text-white text-lg text-center font-medium leading-relaxed">
                EYE-THAT SPEAKS IS A PROJECT FOR VISUALLY IMPAIRED PEOPLE FOR NAVIGATING THEIR WORLD EASILY.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
            Welcome to
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white animate-fade-in delay-300 bg-gradient-to-r from-purple-200 via-pink-200 to-white bg-clip-text text-transparent">
            Eye that Speaks!
          </h2>
        </div>
      </div>

      {/* Voice Input Bar at Bottom */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8">
        <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything or use voice input..."
                className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50 focus:ring-white/30 h-12"
              />
              <Button
                onClick={handleVoiceInput}
                className="h-12 px-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <Mic className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;








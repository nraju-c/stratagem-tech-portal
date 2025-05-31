
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

import logo from '../../public/favicon.png'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'IT Consulting', href: '/services/consulting' },
        { name: 'Cloud Solutions', href: '/services/cloud' },
        { name: 'AI & Automation', href: '/services/ai' },
        { name: 'Software Development', href: '/services/development' },
        { name: 'Project Management', href: '/services/project-management' }
      ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md fixed w-full z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">IT</span>
                  </div>
                  {/* <span className="text-white"> */}
  <img
    src={logo}
    alt="Logo"
    className="h-6 w-auto"
    style={{height: 200}}
  />
{/* </span> */}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors ${
                          location.pathname.startsWith(item.href) ? 'text-blue-400' : ''
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {isServicesOpen && (
                        <div 
                          className="absolute top-full left-0 mt-1 w-64 bg-slate-800 rounded-lg shadow-xl border border-blue-500/20 py-2"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.href ? 'text-blue-400' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-blue-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-400 bg-slate-700/50'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IT</span>
                </div>
                <span className="text-white font-bold text-xl">TechSolutions</span>
              </div>

              <p className="text-gray-400 text-sm">
                Transforming Vision into Digital Reality through innovative technology solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/consulting" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
                <li><Link to="/services/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/services/ai" className="text-gray-400 hover:text-white transition-colors">AI & Automation</Link></li>
                <li><Link to="/services/development" className="text-gray-400 hover:text-white transition-colors">Software Development</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with our latest insights</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="bg-slate-800 text-white px-3 py-2 rounded-l-lg flex-1 text-sm border border-slate-700 focus:outline-none focus:border-blue-500"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-l-none px-4">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechSolutions LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

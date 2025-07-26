
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import '@/styles/fonts.css';
import '@/styles/custom.css';


const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { 
      name: 'SERVICES', 
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
    { name: 'INDUSTRIES', href: '/industries' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT', href: '/contact' }
  ];
  const logo='https://qsort.blob.core.windows.net/media/qsortHead.svg'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md fixed w-full z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="flex items-center nav-logo">
  <img
    src={logo}
    alt="Logo"
    className="h-90 w-auto sm:h-90"
  style={{height:360,marginLeft:-76}}
  />
</div>


              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center nav-menu space-x-8 desktop-nav">
            
{navigation.map((item) => (
  <div key={item.name} className="relative group">
    {item.hasDropdown ? (
      <div
        className="relative"
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div
          className={`px-3 py-2 text-sm font-dind tracking-wide flex items-center cursor-pointer transition-colors ${
            location.pathname.startsWith(item.href) && item.href !== '/'
              ? 'text-blue-400'
              : 'text-white'
          }`}
          style={{ fontWeight: 600 }}
        >
          <Link
            to={item.href}
    
            onClick={() => setIsServicesOpen(false)}
          >
            {item.name}
          </Link>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>

        {isServicesOpen && (
          <div className="absolute top-full left-0 mt-0.5 w-64 bg-slate-800 shadow-xl border border-blue-500/20 rounded-lg z-50 overflow-hidden">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.name}
                to={subItem.href}
                className="block px-4 py-2 text-sm font-dind font-normal text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors"
                onClick={() => setIsServicesOpen(false)}
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
        style={{ fontWeight: 600 }}
        className={`px-3 py-2 text-sm font-dind tracking-wide transition-colors ${
          location.pathname === item.href && item.href !== '/'
            ? 'text-blue-400'
            : 'text-white'
        }`}
      >
        {item.name}
      </Link>
    )}
  </div>
))}

            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center mobile-nav-toggle hidden">
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
className={`block px-3 py-2 text-base font-bold tracking-wide transition-colors ${
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
  <div className="col-span-1 md:col-span-2">
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-white font-bold text-xl font-dind">QSORT</span>
    </div>
    <p className="text-gray-400 text-sm">
      QSORT is a technology solutions provider dedicated to helping businesses streamline operations, enhance cybersecurity, and drive digital transformation. Founded with a mission to deliver reliable, scalable, and innovative IT solutions. Serving small to large sized businesses across a range of industries, QSORT stands out for its commitment to client success, rapid response times, and deep technical expertise. Our team of professionals works closely with each client to understand their unique challenges and build customized technology strategies that support long term growth and resilience.
    </p>
  </div>

  <div>
    <h3 className="text-white font-semibold mb-4 font-dind">Services</h3>
    <ul className="space-y-2 text-sm">
      <li><Link to="/services/consulting" className="text-gray-400 hover:text-white transition-colors">IT Consulting</Link></li>
      <li><Link to="/services/cloud" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</Link></li>
      <li><Link to="/services/ai" className="text-gray-400 hover:text-white transition-colors">AI & Automation</Link></li>
      <li><Link to="/services/development" className="text-gray-400 hover:text-white transition-colors">Software Development</Link></li>
    </ul>
  </div>

  <div>
    <h3 className="text-white font-semibold mb-4 font-dind">Company</h3>
    <ul className="space-y-2 text-sm">
      <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
      <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
      <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
      <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
    </ul>
  </div>
</div>

          
<div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-gray-400">
  <span>© 2025 QSORT. All rights reserved. </span>
  <a
    href="/privacy-policy.pdf"
    download
    className="hover:text-white  transition-colors"
  >
    Privacy Policy
  </a>
</div>



        </div>
      </footer>
    </div>
  );
};

export default Layout;

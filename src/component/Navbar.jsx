import React, { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const Navlinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },

  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-gray-100 mb-20 py-4 px-6 rounded-b-3xl fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <span className='text-2xl font-bold text-[#232755]'>
            OLDF<span className='text-[#2563eb]'>CATHOLIC</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden lg:flex items-center gap-6'>
          {Navlinks.map((link) => (
            <li key={link.name} className='flex items-center gap-2 text-base font-semibold text-[#232755]'>
              <Link
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Donation button (highlighted) */}
          <li>
            <Link
              to="/donation"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#f7931e] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#e68312] transition"
            >
              Donate Now
            </Link>
          </li>
        </ul>

        {/* Weekly Activities Button (desktop only) */}
        <button
          onClick={() => navigate('/contact')}
          className='hidden lg:block border border-[#f7931e] text-[#232755] font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition cursor-pointer'
        >
          Weekly Activities
        </button>

        {/* Mobile Menu Button */}
        <div>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#f7931e] text-white'
          >
            {mobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className='lg:hidden mt-4 space-y-4'>
          <ul className='flex flex-col items-start gap-4 px-4'>
            {Navlinks.map((link) => (
              <li key={link.name} className='text-base font-semibold text-black hover:text-blue-600'>
                <Link
                  to={link.path}
                  onClick={() => {
                    setMobileMenu(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Donation button for mobile */}
            <li className="w-full">
              <Link
                to="/donation"
                onClick={() => setMobileMenu(false)}
                className="block w-full text-center bg-[#f7931e] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#e68312] transition"
              >
                Donate Now
              </Link>
            </li>

            <li>
              <Search className='w-5 h-5 cursor-pointer' />
            </li>
          </ul>

          <div className='px-4'>
            <button
              onClick={() => navigate('/contact')}
              className='w-full border border-blue-600 text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-blue-50'
            >
              Weekly Activities
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

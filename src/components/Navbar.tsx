import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 lg:px-16 bg-white shadow-sm">
      {/* Left part */}
      <div className="flex items-center gap-8 lg:gap-12">
        <h1 className="text-3xl font-bold">snap</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-gray-500">
          <li className="relative">
            <button
              onClick={() => toggleDropdown('features')}
              className="flex items-center gap-1 hover:text-black"
            >
              Features <span>▾</span>
            </button>
            {openDropdown === 'features' && (
              <div className="absolute bg-white shadow-lg p-4 rounded-lg mt-2 w-40 space-y-2 z-10">
                <p className="hover:text-black cursor-pointer">Todo List</p>
                <p className="hover:text-black cursor-pointer">Calendar</p>
                <p className="hover:text-black cursor-pointer">Reminders</p>
                <p className="hover:text-black cursor-pointer">Planning</p>
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown('company')}
              className="flex items-center gap-1 hover:text-black"
            >
              Company <span>▾</span>
            </button>
            {openDropdown === 'company' && (
              <div className="absolute bg-white shadow-lg p-4 rounded-lg mt-2 w-40 space-y-2 z-10">
                <p className="hover:text-black cursor-pointer">History</p>
                <p className="hover:text-black cursor-pointer">Our Team</p>
                <p className="hover:text-black cursor-pointer">Blog</p>
              </div>
            )}
          </li>
          <li className="hover:text-black cursor-pointer">Careers</li>
          <li className="hover:text-black cursor-pointer">About</li>
        </ul>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-500 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Right part - Desktop */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-600">
        <button className="hover:text-black text-sm md:text-base font-medium">
          Login
        </button>
        <button className="border border-gray-600 rounded-xl px-3 py-1 md:px-4 md:py-1.5 hover:bg-gray-100 text-sm md:text-base font-medium">
          Register
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-6 z-50">
          <ul className="space-y-4 text-gray-500">
            <li className="relative">
              <button
                onClick={() => toggleDropdown('features')}
                className="flex items-center gap-1 hover:text-black w-full text-left"
              >
                Features <span>▾</span>
              </button>
              {openDropdown === 'features' && (
                <div className="bg-white p-4 space-y-2">
                  <p className="hover:text-black cursor-pointer">Todo List</p>
                  <p className="hover:text-black cursor-pointer">Calendar</p>
                  <p className="hover:text-black cursor-pointer">Reminders</p>
                  <p className="hover:text-black cursor-pointer">Planning</p>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center gap-1 hover:text-black w-full text-left"
              >
                Company <span>▾</span>
              </button>
              {openDropdown === 'company' && (
                <div className="bg-white p-4 space-y-2">
                  <p className="hover:text-black cursor-pointer">History</p>
                  <p className="hover:text-black cursor-pointer">Our Team</p>
                  <p className="hover:text-black cursor-pointer">Blog</p>
                </div>
              )}
            </li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">About</li>
          </ul>
          <div className="flex flex-col gap-4 mt-6 text-center">
            <button className="text-gray-600 font-medium">Login</button>
            <button className="border border-gray-600 rounded-xl px-4 py-2 hover:bg-gray-100 font-medium">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import { useState } from 'react';
import Dropdown from './DropDown';
import { HiMenu } from 'react-icons/hi';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const features = [
    { label: 'Todo List', image: '/assets/images/icon-todo.svg' },
    { label: 'Calendar', image: '/assets/images/icon-calendar.svg' },
    { label: 'Reminders', image: '/assets/images/icon-reminders.svg' },
    { label: 'Planning', image: '/assets/images/icon-planning.svg' },
  ];

  const company = [
    { label: 'History' },
    { label: 'Our Team' },
    { label: 'Blog' },
  ];

  return (
    <nav className="flex items-center justify-between py-2 px-4 md:px-8 lg:px-24 relative z-50">
      {/* Logo and Nav Links */}
      <div className="flex items-center gap-4 md:gap-6 lg:gap-12">
        <h1 className="text-3xl font-bold">snap</h1>

        <ul className="hidden lg:flex gap-6 text-gray-500 list-none">
          <Dropdown
            label="Features"
            isOpen={openDropdown === 'features'}
            onToggle={() => toggleDropdown('features')}
            options={features}
          />
          <Dropdown
            label="Company"
            isOpen={openDropdown === 'company'}
            onToggle={() => toggleDropdown('company')}
            options={company}
          />
          <li className="hover:text-black cursor-pointer">Careers</li>
          <li className="hover:text-black cursor-pointer">About</li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-3 md:gap-4 text-gray-600">
        <button className="hover:text-black text-sm md:text-base font-medium cursor-pointer">
          Login
        </button>
        <button className="border border-gray-600 rounded-xl px-3 py-1 md:px-4 md:py-1.5 hover:bg-gray-100 text-sm md:text-base font-medium cursor-pointer">
          Register
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setMobileMenuOpen(true)}>
          <HiMenu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Background Blur */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
          ></div>

          {/* Mobile Menu Panel with animation */}
          <div
            className={`fixed top-0 right-0 w-[60%] h-screen bg-white p-6 space-y-6 shadow-lg z-50 list-none
              transition-transform duration-300 transform
              ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex justify-end mb-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenDropdown(null);
                }}
                className="text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div>
              <Dropdown
                label="Features"
                isOpen={openDropdown === 'features'}
                onToggle={() => toggleDropdown('features')}
                options={features}
              />
              <Dropdown
                label="Company"
                isOpen={openDropdown === 'company'}
                onToggle={() => toggleDropdown('company')}
                options={company}
              />
              <p className="hover:text-black cursor-pointer">Careers</p>
              <p className="hover:text-black cursor-pointer">About</p>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <button className="hover:text-black text-sm font-medium">
                Login
              </button>
              <button className="border border-gray-600 rounded-xl px-4 py-2 hover:bg-gray-100 text-sm font-medium">
                Register
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;

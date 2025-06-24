import { useEffect, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi';

type Props = {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  options: { label: string; image?: string }[];
};

const Dropdown = ({ label, isOpen, onToggle, options }: Props) => {
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  const handleDropdownClick = () => {
    onToggle();
  };

  return (
    <li ref={dropdownRef} className="relative w-full lg:w-auto">
      <button
        onClick={handleDropdownClick}
        className="flex items-center gap-1 hover:text-black w-full lg:w-auto"
      >
        {label}
        <HiChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`
            mt-2 bg-white shadow-lg p-4 rounded-lg z-50
            w-full lg:w-48
            lg:absolute lg:left-0
          `}
        >
          {options.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 hover:text-black cursor-pointer"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-4 h-4 object-contain"
                />
              )}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default Dropdown;

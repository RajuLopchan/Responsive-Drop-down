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

    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onToggle(); // Close the dropdown
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <li ref={dropdownRef} className="relative list-none">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 hover:text-black"
      >
        {label}
        <HiChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg p-4 rounded-lg w-48 space-y-2 z-50">
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

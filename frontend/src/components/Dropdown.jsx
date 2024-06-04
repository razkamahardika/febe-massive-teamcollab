import React, { useState } from 'react';
import '../assets/components/Dropdown.css'; // Import the CSS file for styling

const Dropdown = ({ options, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <div className={`dropdown-label ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                {selectedOption || 'Type'}
                <span className={`plus ${isOpen ? 'open' : ''}`}></span>
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;

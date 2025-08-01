import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownButton.module.css';
import { useNavigate } from 'react-router';

type butonProp = {
    generos:string[]
}

function DropdownButton(butonProp:butonProp) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    navigate(`/category/${option}`)
    
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Generos ▾
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
            {butonProp.generos.map((genero) => <button onClick={() => handleOptionClick(genero)}>{genero}</button>)}
        </div>
      )}
    </div>
  );
}

export default DropdownButton
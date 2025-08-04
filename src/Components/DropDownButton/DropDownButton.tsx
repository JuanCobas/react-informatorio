import React, { useState, useRef, useEffect } from 'react';
import styles from './DropdownButton.module.css';
import { useNavigate } from 'react-router';

type butonProp = {
    generos:string[]
}

function DropdownButton(butonProp:butonProp) {
  const [abierto, setabierto] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setabierto(!abierto);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setabierto(false);
      }
    };

    if (abierto) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [abierto]);

  const handleOptionClick = (option: string) => {
    setabierto(false);
    navigate(`/category/${option}`)
    
  };

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.dropdownButton}>
        Generos ▾
      </button>

      {abierto && (
        <div className={styles.dropdownMenu}>
            {butonProp.generos.map((genero) => <button onClick={() => handleOptionClick(genero)}>{genero}</button>)}
        </div>
      )}
    </div>
  );
}

export default DropdownButton
import React, { useState, useEffect } from "react";
import CharacterList from "../CharacterList";

const SearchBar = ({ schools }) => {
  const [name, setName] = useState(""); // Состояние для имени
  const [selectedSchool, setSelectedSchool] = useState(""); // Состояние для выбранной школы
  const [characters, setCharacters] = useState([]); // Состояние для списка персонажей

  // Функция для загрузки персонажей с фильтрацией
  const fetchCharacters = () => {
    const queryParams = new URLSearchParams();
    if (name) queryParams.append("name", name);
    if (selectedSchool) queryParams.append("schoolId", selectedSchool);

    fetch(`http://localhost:3000/characters?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => setCharacters(data))
  };

  // Загружаем персонажей при изменении имени или школы
  useEffect(() => {
    fetchCharacters();
  }, [name, selectedSchool]);

  return (
    <div>
      <header>
        <div className="header-block">
          <div className="header-input">
            <label htmlFor="input-name">
              Name
              <input
                className="name-input"
                name="input-name"
                type="text"
                placeholder="Hermione"
                value={name}
                onChange={(e) => setName(e.target.value)} // Обновляем имя
              />
            </label>

            <label htmlFor="input-school">School
              <select
                name="input-school"
                className="name-school"
                id="input-school"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)} // Обновляем выбранную школу
              >
                <option value="" disabled>Choose one</option>
                {schools?.map((school) => (
                  <option key={school.id} value={school.id}>
                    {school.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>

      {/* Выводим отфильтрованный список персонажей */}
      <CharacterList characters={characters} />
    </div>
  );
};

export default SearchBar;

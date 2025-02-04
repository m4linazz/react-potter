import React, { useState, useEffect } from "react";
import CharacterList from "../CharacterList";

const SearchBar = ({ schools }) => {
    const [name, setName] = useState("");  // Состояние для имени
    const [selectedSchool, setSelectedSchool] = useState(""); // Состояние для выбранной школы
    const [characters, setCharacters] = useState([]); // Состояние для списка персонажей

    // Загружаем всех персонажей при загрузке страницы
    useEffect(() => {
        fetch(`http://localhost:3000/characters`)
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error("Ошибка при получении данных:", error));
    }, []);

    // Обрабатываем изменения в поле имени и фильтруем персонажей
    useEffect(() => {
        const queryParams = [];

        if (name.trim() !== "") {
            queryParams.push(`name=${encodeURIComponent(name)}`);
        }

        if (selectedSchool) {
            queryParams.push(`schoolId=${selectedSchool}`);
        }

        const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

        fetch(`http://localhost:3000/characters${queryString}`)
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error("Ошибка при получении данных:", error));

    }, [name, selectedSchool]); // Зависимости: имя и школа

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
                        {
                            schools && schools.map((school) => (
                                <option key={school.id} value={school.id}>{school.name}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
            </div>
            </header>

            {/* Выводим отфильтрованный список персонажей */}
            
            <CharacterList characters={characters} />
        </div>
    );
}

export default SearchBar;

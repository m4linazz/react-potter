import React from 'react';

const SearchBar = ({schools}) => {
    return (
        <div className="header-input">
                <label for="input-name">Name<input class="name-input" name="input-name" type="text" placeholder="Hermione"/></label>

                <label for="input-school">School
                    <select nameName="input-school" className="name-school" id="input-school">
                        <option value="" disabled selected>Choose one</option>
                        {
                            schools && schools.map((school) => {
                                return <option value="{school.id}">{school.name}</option>
                            })
                        }
    
                    </select>
                </label>
            </div>
    );
}

export default SearchBar;

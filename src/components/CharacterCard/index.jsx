import React, { useEffect, useState } from "react";

const CharacterCard = ({ character }) => {
    const [schoolName, setSchoolName] = useState(' ');

    useEffect(() => {
        fetch(`http://localhost:3000/schools/${character.schoolId}`)
            .then(res => res.json())
            .then(data => setSchoolName(data.name));
    }, [character.schoolId]);

    return (
        <div className="card-block">
            <div className="card-img">
                <img src={`http://localhost:3000/static/${character.image}`} alt={character.name} />
            </div>
            <div className="card-text">
                <h3>{character.name}</h3>
                <p>{character.age} годиков</p>
                <p>{schoolName}</p>
            </div>
        </div>
    );
};

export default CharacterCard;

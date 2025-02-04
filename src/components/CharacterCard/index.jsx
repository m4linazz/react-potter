import React from 'react';
import image from '../assets/image.png';

const CharacterCard = ({ character }) => {
    return (
        <div className="card-block">
            <div className="card-img">
                <img src={'http://localhost:3000/static/' + character.image} alt={character.name} />
            </div>
            <div className="card-text">
                <h3>{character.name}</h3>
                <p>{character.age} годиков</p>
                <p>{character.schoolId}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
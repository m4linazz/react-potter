import React from 'react';
import image from '../assets/image.png';


const CharacterCard = () => {
    return (
        <div className="card-block">
                <div className="card-img">
                <img src={image} alt="Гермиона" />
                </div>

                <div className="card-text">
                    <h3>Harry Potter</h3>
                    <p>Actor: Emma Watson</p>
                    <p>Gender: female</p>
                    <p>House: Гриффиндор</p>
                    <p>Wand core: dragon heartstring</p>
                    <p>Alive: yes </p>
                </div>
            </div>
    );
}

export default CharacterCard;

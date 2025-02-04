import React from 'react';
import CharacterCard from '../CharacterCard';


const CharacterList = ({characters}) => {
    return (
    
        <div className="cards">
         
        {
        characters && characters.map((character) => {
             return <header><CharacterCard character={character}/> </header>

                }) 
         } 
   
    </div>

    );
}

export default CharacterList;

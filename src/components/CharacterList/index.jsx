import React from 'react';
import CharacterCard from '../CharacterCard';


const CharacterList = ({characters}) => {
    return (
    
        <div className="cards">
         
        {
        characters && characters.map((character) => {
             return <CharacterCard character={character}/> 

                }) 
         } 
   
    </div>

    );
}

export default CharacterList;

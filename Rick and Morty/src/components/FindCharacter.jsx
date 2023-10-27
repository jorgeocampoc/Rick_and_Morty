import React, { useState } from 'react'

export const FindCharacter = ({newCharacter}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) =>{
        setInputValue( target.value )
    }
    const onSubmit = ( event )=>{
        event.preventDefault();
        const valueCh = inputValue.trim();
        return (valueCh.length  < 1 ) ? '':
        newCharacter( valueInput ), setInputValue('');
        
    }
  return (
    <div>

        <form onSubmit={ onSubmit }>
            <input type="text"
                placeholder="Escribe el nombre de tu personaje"
                value = { inputValue }
                onChange={ onInputChange }
            />
        </form>
    </div>
  )
}

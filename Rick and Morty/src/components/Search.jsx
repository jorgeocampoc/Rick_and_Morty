import React, { useEffect, useState } from 'react'
import { CharacterFind } from '../pages/CharacterFind';
import { NavLink } from 'react-router-dom';
import { AppRouter } from '../router/AppRouter';
import { CharacterList } from '../pages/CharacterList';

export const Search = (counter) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) =>{
        setInputValue( target.value )
        counter = 12;

    }
    const onSubmit = ( event )=>{
        //event.preventdefaul = para que cuando se envie la informacion no aga refresh
        event.preventDefault();
        console.log(counter);
    }
 

  return (
    <div className="ms-auto p-2 md-auto ">
    <form className="d-flex" role="search" onSubmit={ onSubmit }>
      <input
        className="form-control me-2"
        type="number"
        placeholder="Buscar personaje"
        aria-label="Search"
        onChange={ onInputChange }
      />
      <button   className="btn btn-outline-success" 
                >
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </a>
      </button>
    </form>
  </div>
  )
}

import React, { useEffect, useState } from 'react'

export const Form = ( { data } ) => {
    const [name, setName] = useState('');
    const handleInput = ({target}) => {
        const { value } = target;
        setName( value )
         data( name )
    }

    useEffect(() => {
        // Esta función se ejecutará cada vez que 'name' cambie
        data(name);
      }, [name]);

  return (
    <>
        <div className="container b-2">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control "
                  value={name || ""}
                  onChange={handleInput}
                  // value={name || ''}
                />
              </div >
    </>
  )
}

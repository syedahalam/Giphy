import React from 'react';
import './Search.css'

const SearchForm = () => {
    return (
        <div>
           <form className='form-horizontal'>
               <input placeholder='Search'
                      type='text'
                      name='searchString'
                      required
                />
                <button type='submit'>Search</button>
           </form>
        </div>

    );
};

export default SearchForm;
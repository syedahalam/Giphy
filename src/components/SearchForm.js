import React from 'react';
import './Search.css'
import { SearchIcon } from '../shared/AppIcons'

const SearchForm = ({handleSubmit, handleChange, searchString}) => {
    return (
        <div>
           <form 
           onSubmit={handleSubmit} 
           className='form-horizontal'>
               <input 
                    placeholder='Search'
                    type='text'
                    name='searchString'
                    required
                    onChange={handleChange}
                    value={searchString}
                />
                <button type='submit'>
                    <SearchIcon height='2rem' width='2rem' />
                </button>
           </form>
        </div>

    );
};

export default SearchForm;
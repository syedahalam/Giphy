import './App.css'
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import React, { useEffect, useState } from 'react';
import SearchHeader from './components/SearchHeader';

// const images = [
// 	{
// 		id: 1,
// 		url: 'https://media.giphy.com/media/3DsNP07nApt1eEyjvM/giphy.gif',
// 	},
// 	{
// 		id: 2,
// 		url: 'https://media1.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif',
// 	},
// 	{
// 		id: 3,
// 		url: 'https://www.thisiscolossal.com/wp-content/uploads/2018/04/agif2opt.gif',
// 	},
// 	{
// 		id: 4,
// 		url: 'https://media.giphy.com/media/3oEdva9BUHPIs2SkGk/giphy.gif',
// 	},
// 	{
// 		id: 5,
// 		url: 'https://media.giphy.com/media/3o6ozoD1ByqYv7ARIk/giphy.gif',
// 	},
// 	{
// 		id: 6,
// 		url: 'https://buffer.com/library/wp-content/uploads/2016/06/giphy.gif',
// 	},
// 	{
// 		id: 7,
// 		url: 'https://media4.giphy.com/avatars/default5.gif',
// 	},
// 	{
// 		id: 8,
// 		url: 'https://media2.giphy.com/media/3oEduPff5ErjNmlbwY/source.gif',
// 	},
// ];


function App() {

const searchOptions = {
	key:process.env.REACT_APP_KEY,
	limit: 25,
	rating: 'G',
	api: 'https://api.giphy.com/v1/gifs',
	endpoint: '/search',
};

const [images, setImages] = useState([]);
const [searchString, setSearchString] = useState('shang chi');
const [lastSearch, setLastSearch] = useState('');

useEffect(()=> {
  getImages(searchString);
}, [])

function getImages(searchString){
  // const searchString = 'minions'; ??? is it good to do?
  const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString}&limit=${searchOptions.limit}&rating=${searchOptions.rating}&lang=en`;
  fetch(url)
    .then(response=>response.json())
    .then(response=>{
      console.log(response.data)
      setImages(response.data);
      setLastSearch(searchString);
      setSearchString(searchString);
    })
    .catch(console.error)
    
}
 function handleChange(event){
  setSearchString(event.target.value);
 }
 function handleSubmit(event){
   event.preventDefault();
   getImages(searchString);
 }
  

  return (
		<div className='App'>
			<SearchHeader lastSearch={lastSearch} />
      <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images} />
		</div>
	);
}

export default App;

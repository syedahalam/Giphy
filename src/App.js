import './App.css'
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';


function App() {
  return (
		<div className='App'>
			<h1>🦸‍♀️Giphy Searcher🦸‍♀️</h1>
      <SearchForm />
      <SearchResults />
		</div>
	);
}

export default App;

import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {

    const movies = [
        { title: 'Man of Steal', year: 2007, cast: ['Henry', 'Gogo'] },
        { title: 'Oblivion', year: 2008, cast: ['Tom', 'Gogo'] },
        { title: 'The Matrix', year: 1999, cast: ['Neo', 'Troica'] }
    ]
    return (
        <div className="App">
            <h1>State Hook Demo</h1>

            <Counter/>

            <Timer start={0} />
           <MovieList movies={movies}/>
        </div>
    );
}

export default App;

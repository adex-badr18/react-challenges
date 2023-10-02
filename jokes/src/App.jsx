import { useState } from 'react';
import './App.css';
import jokesData from './jokesData';
import Joke from './components/Joke';

function App() {
    const jokesJsx = jokesData.map(joke => <Joke key={joke.id} joke={joke} />)

    return (
        <div className='container'>
            {jokesJsx}
        </div>
    )
}

export default App

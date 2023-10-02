import { useState } from 'react';
import './App.css';
import jokesData from './jokesData';

function App() {
    const jokesJsx = jokesData.map(joke => {
        return (
            <div className="joke--container" key={joke.id}>
                <h2 className="setup">{joke.setup}</h2>
                <p className="punchline">{joke.punchline}</p>
                <hr />
            </div>
        )
    })

    return (
        <div className='container'>
            {jokesJsx}
        </div>
    )
}

export default App

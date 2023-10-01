import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count';

function App() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function subtract() {
        setCount(prevCount => {
            return prevCount > 0 ? prevCount - 1 : 0
        })
    }

    return (
        <div className='container'>
            <main>
                <button className="subtract" onClick={subtract}>-</button>
                <Count number={count} />
                <button className="add" onClick={add}>+</button>
            </main>
        </div>
    )
}

export default App

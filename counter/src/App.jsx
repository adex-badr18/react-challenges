import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    return (
        <div className='container'>
            <main>
                <button className="subtract">-</button>
                <div className="count">
                    0
                </div>
                <button className="add">+</button>
            </main>
        </div>
    )
}

export default App

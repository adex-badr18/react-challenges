import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [itemsArray, setItemsArray] = useState(['Item 1', 'Item 2']);

    const itemsJsx = itemsArray.map(item => <li>{item}</li>)

    return (
        <div className='container'>
            <button className='add-item-btn'>Add Item</button>

            <ul>
                {itemsJsx}
            </ul>
        </div>
    )
}

export default App

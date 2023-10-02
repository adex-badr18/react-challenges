import { useState } from 'react'
import './App.css'
import boxes from './boxes';
import Box from './components/Box';

function App() {
    const [boxArray, setBoxArray] = useState(boxes);

    const boxJsx = boxArray.map(box => <Box key={box.id} square={box} toggleFunc={toggleOn} />);

    function toggleOn(id) {
        setBoxArray(prevArray => {
            return prevArray.map(box => {
                return box.id === id ? {...box, on: !box.on} : box
            })
        })
    }

    return (
        <div className='container'>
            <section className="box-container">
                {boxJsx}
            </section>
        </div>
    )
}

export default App

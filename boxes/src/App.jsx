import { useState } from 'react'
import './App.css'
import boxes from './boxes';

function App() {
    const [boxArray, setBoxArray] = useState(boxes);

    const boxJsx = boxArray.map(box => <div key={box.id} className='box'></div>);
    return (
        <div className='container'>
            <section className="box-container">
                {boxJsx}
            </section>
        </div>
    )
}

export default App

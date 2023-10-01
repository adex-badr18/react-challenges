import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <main>
        <article className="card">
            <img src="/images/user.png" alt="" className="card--image" />

            <div className="card--info">
                <img src={`/images/star-empty.png`} alt="" className="card--star" />
                <h1 className="card--name">John Doe</h1>
                <p className="card--phone">+234(0) 806 484 4004</p>
                <p className="card--email">itsmyrealname@example.com</p>
            </div>
        </article>
      </main>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contact, setContact] = useState({
    firstName: 'Jane',
    image: 'user.png',
    lastName: 'Doe',
    phone: '+234(0) 806 484 4004',
    email: 'itsmyrealname@example.com',
    isFavorite: false
  });

  const starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggle() {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    <div className='container'>
      <main>
        <article className="card">
            <img src={`/images/${contact.image}`} alt="" className="card--image" />

            <div className="card--info">
                <img src={`/images/${starIcon}`} onClick={toggle} alt="Star icon" className="card--star" />
                <h1 className="card--name">{contact.firstName} {contact.lastName}</h1>
                <p className="card--phone">{contact.phone}</p>
                <p className="card--email">{contact.email}</p>
            </div>
        </article>
      </main>
    </div>
  )
}

export default App

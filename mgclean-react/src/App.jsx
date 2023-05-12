// import { useState } from 'react'
import Nav from './Nav.jsx'
import data from './cards-data.jsx'
import Services from './Services.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const cards = data.map(item => {
    return (
      <Services
      key={item.id}
        title={item.title}
        description={item.description}
      />
    )
  })

  return (
    <div>
      <Nav />
      {cards}
    </div>
  )
}

export default App

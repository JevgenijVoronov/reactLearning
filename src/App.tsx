import { useState } from 'react'
import './App.css'
import Header from './components/header'

// const zeka = 10;

interface Link {
  href: string
  imgsrc: string
  alt: string
}
const links: Link[] = [
  {
    href: 'https://vite.dev',
    imgsrc: '/vite.svg',
    alt: 'vite logo'
  },
  {
    href: 'https://react.dev',
    imgsrc: '/react.svg',
    alt: 'react logo'
  },
  {
    href: 'https://react.dev',
    imgsrc: '/react.svg',
    alt: 'react logo'
  }
]

function App() {
  const [zeka, updateZeka] = useState(5)

  return (
    <>
      {
        links.map((link, index) => {
          if (zeka > 10) {
            return (
              <Header 
                key={index}
                href={link.href}
                imgsrc={link.imgsrc}
                alt={link.alt}
              />
            )
          } else {
            return (
              <h1>fdfdfs</h1>
            )
          }
        })
      }

  
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}> */}
        <button onClick={() => {updateZeka(zeka + 1)}}>
          count is {zeka}
        </button>

        <button onClick={() => {updateZeka(zeka - 1)}}>
          count is {zeka}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>{zeka}</h1>
    </>
  )
}

export default App


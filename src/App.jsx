import './App.css'
import Card from './components/Card'
import Form from './components/Form'
import {useState} from 'react'

function App() {
  const [value, setValue] = useState(null)
  return (
    <main>
      <h1>Entregable Front</h1>
      <Form setValue={setValue} />
      {value && <Card value={value} />}
    </main>
  )
}

export default App

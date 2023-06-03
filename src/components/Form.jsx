import {useState} from 'react'
export default function Form({setValue}) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log('prueba')
    // VALIDACIONES:
    setError(false)

    if (name.trim().length < 3) {
      setError(true)
      return
    }

    if (name.trim() === '' || color.trim() === '') {
      setError(true)
      return
    }

    if (color.trim().length < 6) {
      setError(true)
      return
    }
    setValue({name, color})
    e.target.reset()
  }

  function handleChangeName(e) {
    setName(e.target.value.toUpperCase())
  }

  function handleChangeColor(e) {
    setColor(e.target.value.toUpperCase())
  }

  return (
    <div>
      <h2>Elige un color</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChangeName}
          type="text"
          placeholder="Ingresa tu nombre"
        />
        <input
          onChange={handleChangeColor}
          type="text"
          placeholder="Ingresa tu color favorito (formato HEX)"
        />
        <button type="submit">Enviar</button>
        {error && (
          <span style={{color: 'red'}}>
            Por favor chequea que la información sea correcta
          </span>
        )}
      </form>
    </div>
  )
}

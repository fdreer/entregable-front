export default function Card({value}) {
  return (
    <section className="card">
      <h3>{value.name}</h3>
      <p>Sabemos que tu color favorito es:</p>
      <span>{value.color}</span>
    </section>
  )
}

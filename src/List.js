export default function List({ title, items }) {
    return <div>
        <h3>{title}</h3>
        <ul>
            {items.map((text, i) => <li key={i}>{text}</li>)}
        </ul>
        <p>Ilość elementów: {items.length}</p>
    </div>
}

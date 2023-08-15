import './counter.scss'
export default function Counter(props) {
    return (
        <div className="counterBlock">
            <h2>{props.value}</h2>
            <p>{props.title}</p>
        </div>
    )
}
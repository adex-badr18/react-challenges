export default function Star(props) {
    const starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png';

    return (
        <img
            src={`/images/${starIcon}`} 
            onClick={props.toggleFunc} 
            alt="Star icon" 
            className="card--star" />
    )
}
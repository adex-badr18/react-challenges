export default function Joke(props) {
    const joke = props.joke;
    return (
        <div className="joke--container">
            <h2 className="setup">{joke.setup}</h2>
            <p className="punchline">{joke.punchline}</p>
            <hr />
        </div>
    )
}
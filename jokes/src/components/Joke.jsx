import { useState } from "react";

export default function Joke(props) {
    const joke = props.joke;
    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        setIsShown(prevState => !prevState);
    }

    return (
        <div className="joke--container">
            {joke.setup && <h2 className="setup">{joke.setup}</h2>}
            {isShown && <p className="punchline">{joke.punchline}</p>}
            <button className="toggle-btn" onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}
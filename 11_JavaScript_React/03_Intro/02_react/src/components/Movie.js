const Movie = (props) => {
    return (
        <article>
            <h2>
                {props.title} - {props.year}
            </h2>
            <p>{props.cast[0]}</p>
            <p>{props.cast[1]}</p>
        </article>
    );
};

export default Movie;
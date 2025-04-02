import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === parseInt(id));

    if (!movie) {
        return (
            <div>
                <h2>Film non trouvé</h2>
                <Link to="/">Retour à l'accueil</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.videoURL}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
};

export default MovieDetail;